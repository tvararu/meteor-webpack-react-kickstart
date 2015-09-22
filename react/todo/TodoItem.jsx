import { Component, PropTypes } from 'react';

class TodoItem extends Component {
  handleChecked() {
    // Set the checked property to the opposite of its current value
    Tasks.update(this.props.task._id, {
      $set: {checked: ! this.props.task.checked}
    });
  }

  handleDelete() {
    Tasks.remove(this.props.task._id);
  }

  render() {
    const itemClass = this.props.task.checked ? 'checked' : null;

    return (
      <li className={itemClass}>
        <button className="delete" onClick={this.handleDelete.bind(this)}>&times;</button>

        <input type="checkbox" checked={this.props.task.checked} onClick={this.handleChecked.bind(this)} className="toggle-checked" />

        <span className="text">{this.props.task.text}</span>
      </li>
    );
  }
}

TodoItem.propTypes = {
  task: PropTypes.object.isRequired
};

export default TodoItem;
