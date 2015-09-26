/* global Tasks */
import { Component } from 'react'

import TodoHeader from 'todo/TodoHeader'
import TodoList from 'todo/TodoList'
import reactMixin from 'react-mixin'

@reactMixin.decorate(ReactMeteorData)
export default class TodoApp extends Component {
  state = {
    hideCompleted: false
  }

  getMeteorData () {
    Meteor.subscribe('tasks')

    let tasks

    if (this.state.hideCompleted) {
      tasks = Tasks.find({checked: {$ne: true}}, {sort: {createdAt: -1}}).fetch()
    } else {
      tasks = Tasks.find({}, {sort: {createdAt: -1}}).fetch()
    }

    const incompleteCount = Tasks.find({checked: {$ne: true}}).count()

    return {
      tasks,
      incompleteCount,
      user: Meteor.user()
    }
  }

  handleToggleHideCompleted = (e) => {
    this.setState({ hideCompleted: e.target.checked })
  }

  componentWillMount () {
    require('todo/TodoApp.css')
  }

  render () {
    if (!this.data.tasks) {
      // loading
      return null
    }

    return (
    <div className='container'>
      <TodoHeader
        incompleteCount={ this.data.incompleteCount }
        hideCompleted={ this.state.hideCompleted }
        toggleHideCompleted={ this.handleToggleHideCompleted }
      />
      <TodoList
        user={ this.data.user }
        tasks={ this.data.tasks }
        hideCompleted={ this.state.hideCompleted }
      />
      </div>
    )
  }
}
