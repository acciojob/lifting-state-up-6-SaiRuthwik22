import React from "react";
import './../styles/App.css';
import TodoList from "./TodoList"

const App = () => {
  let arr = [
    { id: 1, text: 'Learn React', completed: false }
  ]
  const [todos, setTodos] = React.useState(arr);

  function handleComplete(id) => {
    setTodos(todos.map(todo =>
      todo.id == id ? { ...todo, completed: true } : todo
    ));
  };
  return (
    <div>
    <h1>Parent Component</h1>
    <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  )
}

export default App

