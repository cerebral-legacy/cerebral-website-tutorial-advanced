import React from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import Items from '../Items'

@Cerebral({
  newItemTitle: 'app.newItemTitle'
})
class App extends React.Component {
  componentDidMount() {
    this.props.signals.app.mounted()
  }
  onFormSubmit(event) {
    event.preventDefault()
    this.props.signals.app.newItemTitleSubmitted()
  }
  onInputChange(event) {
    this.props.signals.app.newItemTitleChanged({
      title: event.target.value
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={event => this.onFormSubmit(event)}>
          <input
            autoFocus
            value={this.props.newItemTitle}
            onChange={event => this.onInputChange(event)}
          />
        </form>
        <Items />
      </div>
    );
  }
}

 export default App;
