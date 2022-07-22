import './App.css';
import Header from './MyComponents/Header';
import {Todo} from './MyComponents/Todo';
import React, {useState} from 'react';

let todos =[
  {
  id  : 1,
  title : 'go to market',
  desc : "you need to go to market for job done",
},
{
  id  : 2,
  title : 'go to office',
  desc : "you need to go to office for job done",
},
{
  id  : 3,
  title : 'go to home',
  desc : "you need to go to home for job done",
}
]


function App() {

  const[todolist , setTodoList] = useState(todos)

  const submitHandler =(todotext, tododesc) =>{
  const newtodo =  {
      id  : todolist.length+1,
      title : todotext,
      desc : tododesc,
    }
  const newlist =  [...todolist, newtodo]
  setTodoList(newlist)
  }
 
  const onDelete =(id) =>{
    debugger;
    console.log(id)
    const newlist =  todolist.filter(todo => {
      console.log(todo.id);
      return todo.id !== id
    })
    setTodoList(newlist)
  }

//  console.log(todolist)
  return (
    <div className="App">
    <Header title = "ToDo Application"/>
    <Todo todos ={todolist} onDelete ={onDelete} submitHandler = {submitHandler}/>
    {/* <footer/> */}
    </div>
  );
}

export default App;
