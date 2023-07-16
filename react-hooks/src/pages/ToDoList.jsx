import React, {useEffect, useState} from 'react';
import "./ToDoList.css"
import ToDoListItem from '../components/ToDoListItem';

const ToDoList = () => {
  const [todos, setTodos] = useState([]);
  const [isComponentLoaded, setIsComponentLoaded] = useState(false);
  const [remainingItems, setRemainingItems] = useState(0)
  const [text, setText] = useState({
    input: '',
    isChecked:false,
  });


  const handleOnClick = () => {
      setTodos([...todos, text])
  }

  useEffect(()=>{
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if(storedTodos){
      setTodos(storedTodos)
    }
    setIsComponentLoaded(true)
  }, [])

  useEffect(()=>{
    isComponentLoaded && localStorage.setItem('todos', JSON.stringify(todos))
    const remainingTodos =  todos.filter((todo) => !todo.isChecked).length;
    setRemainingItems(remainingTodos);
  }, [text.isChecked, todos, isComponentLoaded]);

  if(!isComponentLoaded){
    <h2>Loading...</h2>
  }

  return (
    <div className='enterTodo'>
      <h1>THINGS TO DO:</h1>
      <input className='inputEnter' onChange={(event) => setText({...text, input: event.target.value})} type='text' />
      <button className='addButton' onClick={handleOnClick}>Add</button>

   <ToDoListItem todos={todos} setTodos={setTodos} />
   <div className='remaining-button'>
   <h5>REMAINING TODOS: {remainingItems}</h5>
  
      <button onClick={()=>{

        const remainingTodos =  todos.filter((todo) => !todo.isChecked)
        setTodos(remainingTodos);
        }}>REMOVE DONE ITEMS</button>
</div>
    </div>
  )
}

export default ToDoList