import React from 'react'

const Footer = ({info, length, completedNum, deleteCompleted, toggleAllTodo}) => {

  const toggle = (completedNum) => {
    const value = (length - completedNum === 0 ? false : true);
    toggleAllTodo(value);
  }
  
  return(
      <div id="bottomChoice">
        <button id="toggleAll" className={length === 0 ? 'hidden' : ''} 
          onClick={()=>toggle(completedNum)}>Toggle all
        </button>
        <span id="info">{info}</span>
        <button id="clear" className={completedNum === 0 ? 'hidden' : ''} 
          onClick={deleteCompleted}>Clear completed
        </button>
      </div>   
    );
}
export default Footer;