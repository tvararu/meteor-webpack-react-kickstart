import { Component, PropTypes } from 'react'
import TodoItem from 'todo/TodoItem'

export default class TodoList extends Component {
  static propTypes = {
    hideCompleted: PropTypes.bool,
    tasks: PropTypes.array.isRequired
  }

  render () {
    return (
      <ul>
        { this.props.tasks.map(task => <TodoItem key={ task._id } task={ task } />) }
      </ul>
    )
  }
}
