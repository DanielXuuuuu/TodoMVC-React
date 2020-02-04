import React from 'react'

const TodoItem = ({todo, handleChange, deleteTodo}) => (
  <li>
    <input type="checkbox" name="isCompleted" className="Checkbox" id={todo._id} 
      checked={todo.completed} 
      onChange={(e) => handleChange(todo._id, "completed", e.target.checked)}
    />
    <label htmlFor={todo._id}></label>

    <input type="text" name="event" className={todo.completed ? "completed" : ""}
      value={todo.text} 
      onChange={(e) => handleChange(todo._id, "text", e.target.value)}
    />
    
    <button onClick={() => deleteTodo(todo._id)}></button>
</li>
)

export default TodoItem;