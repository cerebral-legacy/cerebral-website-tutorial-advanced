const express = require('express')
const webpackMiddleware = require('webpack-dev-middleware')
const app = express()
const webpack = require('webpack')
const webpackConfig = require('./webpack.config')
const port = process.env.NODE_ENV === 'production' ? process.env.PORT : 8080
const bodyParser = require('body-parser')

if (process.env.NODE_ENV !== 'production') {
  const compiler = webpack(webpackConfig)
  const middleware = webpackMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  });
  app.use(middleware)
}
app.use(bodyParser.json())

const items = []

function createCallback(shouldFail, cb) {
  return function () {
    cb(shouldFail)
  }
}

var failCount = 0
function respondWithPossibleFail(data, cb) {
  failCount++
  var shouldFail = false
  if (failCount === 3) {
    shouldFail = true
    failCount = 0
  }
  setTimeout(createCallback(shouldFail, cb), 1000)
}

app.get('/items', function (req, res) {
  res.send(items)
})

app.post('/items', function (req, res) {
  respondWithPossibleFail(function (shouldFail) {
    if (shouldFail) {
      res.sendStatus(500)
    } else {
      const item = {
        id: String(items.length),
        title: req.body.title,
        completed: req.body.completed,
        datetime: req.body.datetime
      }
      items.unshift(item)
      res.send({
        id: item.id
      })
    }
  })
})

app.patch('/items/:id', function (req, res) {
  respondWithPossibleFail(function (shouldFail) {
    if (shouldFail) {
      res.sendStatus(500)
    } else {
      const item = items.filter(function (item) {
        return item.id === req.params.id
      })[0]
      item.completed = req.body.completed
      res.send({})
    }
  })
})

app.delete('/items/:id', function (req, res) {
  respondWithPossibleFail(function (shouldFail) {
    if (shouldFail) {
      res.sendStatus(500)
    } else {
      const item = items.filter(function (item) {
        return item.id === req.params.id
      })[0]
      const index = items.indexOf(item)
      items.splice(index, 1)
      res.send({})
    }
  })
})

app.listen(port, function () {
  console.log('Running server on port ' + port)
})
