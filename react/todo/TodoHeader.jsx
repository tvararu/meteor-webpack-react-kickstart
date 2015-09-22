import { Component } from 'react';

class TodoHeader extends Component {
  handleSubmit(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    var text = event.target.text.value;

    // Insert a task into the collection
    Tasks.insert({
      text: text,
      createdAt: new Date() // current time
    });

    // Clear form
    event.target.text.value = '';
  }

  render() {
    return (
      <header>
        <h1>Todo List</h1>

        <form className="new-task" onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" name="text" placeholder="Type to add new tasks" />
        </form>
      </header>
    );
  }
}

export default TodoHeader;
