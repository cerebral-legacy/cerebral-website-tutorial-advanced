const express = require('express')
const app = express()
const port = process.env.NODE_ENV === 'production' ? process.env.PORT : 3001
const bodyParser = require('body-parser')

app.use(bodyParser.json())

const items = []

function createCallback(shouldFail, cb) {
  return function () {
    cb(shouldFail)
  }
}

var failCount = 0
function respondWithPossibleFail(cb) {
  failCount++
  var shouldFail = false
  if (failCount === 3) {
    shouldFail = true
    failCount = 0
  }
  setTimeout(createCallback(shouldFail, cb), 1000)
}

app.get('/api/items', function (req, res) {
  setTimeout(function () {
    res.send(items)
  }, 1000)
})

app.post('/api/items', function (req, res) {
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

app.patch('/api/items/:id', function (req, res) {
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

app.delete('/api/items/:id', function (req, res) {
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
