import React from 'react';
import Todo from './Todo';
import { List } from '@material-ui/core';

const TodoList = ({ todos, toggleCompleted, removeTodo }) => {
  return (
    <div>
      <List>
        {todos.map(todo => <Todo key={todo.id} {...todo} toggleCompleted={toggleCompleted} removeTodo={removeTodo} />)}
      </List>
    </div>
  );
};

export default TodoList;