import Inferno from 'inferno';
import Component from 'inferno-component'
import {connect} from 'cerebral-view-inferno'
import Filters from '../Filters'
import Items from '../Items'

export default connect({
  newItemTitle: 'app.newItemTitle',
  error: 'app.error'
}, {
  newItemTitleSubmitted: 'app.newItemTitleSubmitted',
  newItemTitleChanged: 'app.newItemTitleChanged',
  mounted: 'app.mounted'
},
  class App extends Component {
    componentDidMount() {
      this.props.mounted()
    }
    onFormSubmit(event) {
      event.preventDefault()
      this.props.newItemTitleSubmitted()
    }
    onInputChange(event) {
      this.props.newItemTitleChanged({
        title: event.target.value
      })
    }
    render() {
      return (
        <div>
          <Filters />
          <br />
          <form onSubmit={event => this.onFormSubmit(event)}>
            <input
              autoFocus
              value={this.props.newItemTitle}
              onChange={event => this.onInputChange(event)}
            />
            {
              this.props.error ?
                <span style={{color: 'red', paddingLeft: '10px'}}>{this.props.error}</span>
              :
                null
            }
          </form>
          <Items />
        </div>
      );
    }
  }
)
