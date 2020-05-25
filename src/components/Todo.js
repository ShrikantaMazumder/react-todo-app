import React from 'react';
import './Todo.css';
import { ListItem, Typography, Checkbox, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const Todo = ( {id, task, completed, toggleCompleted, removeTodo }) => {
  function handleCheckboxClicked() {
    toggleCompleted(id);
  }
  function handleRemove() {
    removeTodo(id);
  }
  return (
    <ListItem className="todo">
      <Checkbox 
        checked={completed}
        onClick={handleCheckboxClicked} />
      <Typography
        variant="body1"
        style={{ textDecoration: completed ? "line-through" : null }}
        >
          {task}
        </Typography>
      <IconButton onClick={handleRemove}>
        <CloseIcon />
      </IconButton>
    </ListItem>
  );
};

export default Todo;