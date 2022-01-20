import React from 'react';

export default function Todo({todo ,todos , setTodos}) {
    const deletHandler = () =>{
      let itemFilter = todos.filter((el)=>el.id !== todo.id)
       setTodos(itemFilter)
    }
    const completeHandler = () =>{
      setTodos( todos.map((item)=>{
            if(item.id === todo.id){
                return{
                    ...item,completed:!item.completed
                }
            }
            return item
        }))
    }
  return (
         <div className='todo'>
            <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>{todo.text}</li>
            <button onClick={completeHandler} className='complete-btn'>
                <i className='fas fa-check'></i>
            </button>
             <button onClick={deletHandler} className='trash-btn'>
                <i className='fas fa-trash'></i>
            </button>
         </div>
  );
}
