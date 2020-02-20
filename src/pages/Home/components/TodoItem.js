import React, { useState, useEffect, useRef } from 'react'

const TodoItem = ({todo, editing, onEdit, onCancel, handleChange, deleteTodo}) => {
  const [editText, setEditText] = useState(todo.text);
  const editInput = useRef();

  useEffect(() => {
    if(editInput.current){
      editInput.current.focus();
    }
  })

  const handleEdit = () => {
    setEditText(todo.text);
    onEdit(todo._id);
  }

  const handleKeyDown = (e) => {
    if (e.which === 27) {
      setEditText(todo.text);
      onCancel();
    } else if (e.which === 13) {
      handleSubmit(e);
    }
  }


  const handleSubmit = (e) => {
    const text = editText.trim();
    if(text) {
      handleChange(todo._id, "text", text);
    } else {
      deleteTodo(todo._id);
    }
    onCancel()
  }

  return (
    <li>
      {
        editing ? (
          <input 
            ref={editInput}
            className="edit"
            value={editText} 
            onBlur={handleSubmit}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={handleKeyDown}
          /> 
        ) : (
          <div className="view">
            <input type="checkbox" name="isCompleted" className="Checkbox" id={todo._id} 
              checked={todo.completed} 
              onChange={(e) => handleChange(todo._id, "completed", e.target.checked)}
            />
            <label htmlFor={todo._id}></label>

            <label id="todoText" className={todo.completed ? "completed" : ""}
              onDoubleClick={handleEdit}
            >
              {todo.text}
            </label>
            
            <button onClick={() => deleteTodo(todo._id)}></button>
          </div>
        )
      }
    </li>
  )
}

export default TodoItem;