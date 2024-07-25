  
import React from "react";
import './../styles/App.css';
import TodoList from "./TodoList"

const App = () => {
  let [todos,setTodos] = React.useState( [{id:1,text:"Learn React",completed:false}])
  function handleComplete(id){
  setTodos(todos.map((item)=>item.id == id ? {...item,completed:true}:item))
  }
  return (
    <div>
    <h1>Parent Component</h1>
    <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  )
}

export default App

