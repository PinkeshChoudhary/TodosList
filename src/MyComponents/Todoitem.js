import React from 'react'

export const Todoitem = ({todo, deletehandler, editHandler}) => {
  return (
    <div>
      <h5>{todo.title}</h5>
      <p>{todo.desc}</p>

      <button onClick={() =>deletehandler(todo.id)}>DeleteTodo</button>
      <button onClick={() =>editHandler(todo)}>EditTodo</button>

      </div>
  )
}
