import React, { PureComponent } from 'react';

import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper } from '@material-ui/core';
import {observer} from "mobx-react";
import moment from "moment";
import {Checkbox} from "@material-ui/core";

@observer
class TodoListView extends PureComponent {
  render(){

    const { todos, onSelectedTodo, onToggleStatus } = this.props;

    return (
      <TableContainer component={Paper} >
        <Table m={3}>
          <TableHead>
            <TableRow>
              <TableCell align='center'>Complete</TableCell>
              <TableCell align='center'>Title</TableCell>
              <TableCell align='center'>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              Array.isArray(todos) && todos.length ?
              todos.map( ( todo ) => (
                <TableRow key={todo.id} hover onClick={ () => onSelectedTodo(todo) }>
                  <TableCell>
                    <Checkbox checked={todo.complete} onChange={ (event) => onToggleStatus(event.target.checked) }/>
                  </TableCell>
                  <TableCell>{todo.title}</TableCell>
                  <TableCell>{moment(todo.date).format('YYYY-MM-DD')}</TableCell>
                </TableRow>
              )) : <TableRow>Empty</TableRow>
            }
            
          </TableBody>
        </Table>
      </TableContainer>
    )
  }
}

export default TodoListView;