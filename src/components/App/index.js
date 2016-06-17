import React from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';

@Cerebral()
class App extends React.Component {
  render() {
    return (
      <div>
        Hello world!
      </div>
    );
  }
}

 export default App;
