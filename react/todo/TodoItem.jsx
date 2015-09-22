import { Component, PropTypes } from 'react';

class TodoItem extends Component {
  render() {
    return (
      <li>{this.props.task.text}</li>
    );
  }
}

TodoItem.propTypes = {
  task: PropTypes.object.isRequired
};

export default TodoItem;
