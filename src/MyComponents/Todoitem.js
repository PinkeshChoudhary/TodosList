import React, {useState} from 'react'


export const Todoitem = ({todo , onDelete }) => {
    const [title, setTitle] = useState(todo.title)
    const [desc , setDesc] = useState(todo.desc)
    const editHandler =() =>{
        setTitle('pinkesh')
        setDesc('pinkesh')
    }
  return (
    <>
    <div>
        <h3>{title}</h3>
        <p>{desc}</p>
        <button onClick={() =>onDelete(todo.id)}>delete </button>
        <button onClick={() =>editHandler()}>EditTodo</button>
    </div>
    </>
  )
}
 