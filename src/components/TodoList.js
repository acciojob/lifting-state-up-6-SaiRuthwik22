import React from "react"

function TodoList({todos,handleComplete}){
  return(
    <div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button style={todo.completed?{display:"none"}:{display:'block'}} onClick={() => handleComplete(todo.id)}>Complete</button>
            
          </li>
        ))}
      </ul>
    </div>
  )
}
export default TodoList;
