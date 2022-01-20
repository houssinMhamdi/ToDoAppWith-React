import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { useEffect, useState } from "react";

function App() {
  const [inputText ,setInputText] = useState('')
  const [todos ,setTodos] = useState([])
  const [status , setStatus] = useState('all')
  const [filteredTodos,setFilteredTodos] = useState([])

  useEffect(()=>{
    getLocalTods()
  },[])

  useEffect(()=>{
    filteredHandler()
    saveLocalTodos()
  },[todos,status])

  const filteredHandler = () =>{
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter((todo)=>todo.completed === true))
        break;
        case 'uncompleted':
          setFilteredTodos(todos.filter((todo)=>todo.completed === false))
        break;
      default:
        setFilteredTodos(todos)
        break;  
    }
  }
  //localStorage
  const saveLocalTodos = () =>{
    localStorage.setItem('todos' ,JSON.stringify(todos))
  }

  const getLocalTods = () =>{
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]))
    }else{
      let lockTodo = JSON.parse(localStorage.getItem('todos'))
      setTodos(lockTodo)
    }
  }

  return(
    <div className="App">
        <header>
            <h1>To do List</h1>
        </header>

        <Form 
            inputText={inputText} 
            setInputText={setInputText} 
            todos={todos} 
            setTodos={setTodos}
            setStatus={setStatus}
            />
        <TodoList 
            filteredTodos={filteredTodos}
            todos={todos} 
            setTodos={setTodos}/>
    </div>

  )

}
  
   
  

export default App;
