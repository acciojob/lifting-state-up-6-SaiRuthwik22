  
import React from "react";
import './../styles/App.css';
import TodoList from "./TodoList"

const App = () => {
  let [todos,setTodos] = React.useState( [{id:1,todo:"Learn React"},{id:2,todo:"BUild a react app"},{id:3,todo:"Deploy the React app"}])
  function handleComplete(id){
  todos.map((item)=>item.id == id ? {...item,completed:true}:item)
  }
  return (
    <div>
    <h1>Parent Component</h1>
    <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  )
}

export default App

