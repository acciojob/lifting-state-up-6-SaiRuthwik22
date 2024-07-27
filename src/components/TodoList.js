import React from "react"

function TodoList({todos,handleComplete}){
  return(
    <div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
              {todo.text}
            {!todo.completed ?? <button onclick={handleComplete}>Complete</button>}
          </li>
                   
        ))}
      </ul>
    </div>
  )
}
export default TodoList;
