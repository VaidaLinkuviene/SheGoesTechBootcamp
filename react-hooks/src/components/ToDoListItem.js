import React from 'react';
import "./ToDoListItem.css"

const ToDoListItem = ({todos, setTodos}) => {
  return <ul>{todos.map((todo, index) => (
    <div className='todoListItem'>
     <li style={{textDecoration: todo.isChecked ? "line-through" : ''}}>{todo.input} </li>
     <input onClick={() => {
      const updateTodods= todos.map((todo, i) =>
      i === index ? {...todo, isChecked: !todo.isChecked} : todo);
      setTodos(updateTodods);
     }}
      type='checkbox' checked={todo.isChecked}/>
     </div>
     ))}</ul>
}

export default ToDoListItem