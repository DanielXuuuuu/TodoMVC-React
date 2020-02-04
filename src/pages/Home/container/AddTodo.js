import React from 'react'
import { connect } from 'react-redux';
import { todoActions } from "../../../redux/actions/todoActions";

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <input
      id="add-todo" 
      type="text" 
      placeholder="What needs to be done?"
      ref={node => {
        input = node
      }}
      onKeyDown={(e) => {
        if(e.keyCode !== 13 || !input.value.trim()) 
          return;
        dispatch(todoActions.addTodo({text: input.value}));
        input.value = '';
      }}
    />
  )
}

export default connect()(AddTodo);