import React, { Component } from 'react';
import TodoListView from '../views/TodoListView';
import { inject, observer} from "mobx-react";
import autobind from "autobind-decorator";

@inject('todoStore')
@autobind
@observer
class TodoListContainer extends Component {

  onSelectedTodo(todo) {
    this.props.todoStore.selectedTodo(todo);
  }

  onSelectedComplete(checked) {
    this.props.todoStore.toggleCompleteStatus(checked);
  }

  render() {

    let { todos, searchText } = this.props.todoStore;

    todos = todos.filter( t => t.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);

    return (
      <TodoListView
        todos = { todos }
        onSelectedTodo = { this.onSelectedTodo }
        onToggleStatus = { this.onSelectedComplete }
      />
    )
  }
}

export default TodoListContainer;