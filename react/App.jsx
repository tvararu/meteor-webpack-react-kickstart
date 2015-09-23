import { Component, PropTypes } from 'react';
import TodoApp from './todo/TodoApp';

export default class App extends Component {
  render() {
    return this.props.children;
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired
};
