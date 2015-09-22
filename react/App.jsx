import { Component, PropTypes } from 'react';
import TodoApp from './todo/TodoApp';

class App extends Component {
  render() {
    return this.props.children;
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired
};

export default App;
