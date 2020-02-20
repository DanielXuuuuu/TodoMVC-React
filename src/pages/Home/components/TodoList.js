import React, { useState } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group' ;
import TodoItem from './TodoItem'

const TodoList = ({ todos, handleChange, deleteTodo}) => {
  const [editId, setEditId] = useState(null);

  const edit = (id) => {
    setEditId(id);
  }

  const cancelEdit = () => {
    setEditId(null);
  }

  return (
      <ul id="todo-list">
        <ReactCSSTransitionGroup 
          transitionName="react-animation" 
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
          
          {todos.map((todo) => (
            <TodoItem 
              key={todo._id}
              todo={todo}
              editing={todo._id === editId}
              onEdit={edit}
              onCancel={cancelEdit}
              handleChange={handleChange}
              deleteTodo={deleteTodo}
            />
          ))}

        </ReactCSSTransitionGroup>
      </ul>
  );
}

export default TodoList;