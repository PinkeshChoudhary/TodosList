import React ,{useState} from 'react'
import { Todoitem } from './Todoitem'

export const Todo = (props) => {
    const [todotext , setToDoText] = useState("")
    const [tododesc , setToDoDesc] = useState("")
       
    const handleSubmit =(e) =>{
        e.preventDefault()
        if(todotext){
        props.submitHandler(todotext, tododesc)
    
        setToDoText("")
        }
        else{
            alert('fields can not be empty')
        }
      }
   
  return (
    <div>
        <p>todos list</p>

        <div>{props.todos.map((todo, index) =>{
            return  <Todoitem todo={todo} key={index} onDelete ={props.onDelete} />
            
        })}</div>
        <form onSubmit={(e) =>handleSubmit(e)}>
            <input type= 'text' value={todotext} onChange={(e)=>setToDoText(e.target.value)} placeholder = 'title'/>
            <input type ='text' value={tododesc} onChange ={(e) =>setToDoDesc(e.target.value)} placeholder = 'desc'/>
            <button type='submit'>AddTodo</button>
        </form>
      
     </div>
  )
}
