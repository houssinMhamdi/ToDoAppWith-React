import React from 'react';

export default function Form({setInputText,inputText,todos,setTodos,setStatus}) {
    const inputTextHandler =(e)=>{
        console.log(e.target.value);
        setInputText(e.target.value)
    }

    const submitTodosHandler = (e)=>{
        e.preventDefault()
        setTodos([...todos,{text:inputText , completed:false , id: Math.random() * 1000}])
        setInputText('')
    }
    const statusHandler = (e) =>{
        setStatus(e.target.value);
    }
  return (
    <form>
        <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitTodosHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
        <div className="select">
            <select onChange={statusHandler} name="todo" className="filter-todo">
                <option value="all">all</option>
                <option value="completed">completed</option>
                <option value="uncompleted">uncompleted</option>
            </select>
        </div>
    </form>
    );
}
