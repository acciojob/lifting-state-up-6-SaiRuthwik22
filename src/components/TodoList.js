import React from "react"

function TodoList({todos,handleComplete}){
  return(
    <div>
      <ul>
    {todos.map((ele)=>(
                <li key={todo.id}>
              {todo.text}
            {!todo.completed && (
              <button onClick={() => handleComplete(todo.id)}>Complete</button>
            )}
          </li>
    ))}
    </ul>
    </div>
  )
}
export default TodoList;
