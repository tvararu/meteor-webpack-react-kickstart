import { Component } from 'react';

import TodoHeader from './TodoHeader';
import TodoList from './TodoList';

class TodoApp extends Component {
  render() {
    return (
      <div className="container">
        <TodoHeader />
        <TodoList />
      </div>
    );
  }
}

export default TodoApp;
