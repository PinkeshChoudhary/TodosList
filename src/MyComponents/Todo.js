import React, { useState } from "react";
import { Todoitem } from "./Todoitem";
import { AddToDo } from "./AddToDo";
export const Todo = (props) => {
  const [todolist, setToDoList] = useState(props.todos);
  const [edittodo, setEditToDo] = useState(null);
  const handleSubmit = (e, todotitle, tododesc) => {
    e.preventDefault();
    if (!edittodo) {
      const newtodo = {
        id: todolist.length + 1,
        title: todotitle,
        desc: tododesc,
      };
      const newlist = [...todolist, newtodo];
      setToDoList(newlist);
    }else{
      const restarr =todolist.filter(todo => todo.id!==edittodo.id)
      console.log(restarr)
      const editedobj ={
        id : edittodo.id,
        title : todotitle,
        desc : tododesc
      }
      let newarr = [...restarr , editedobj]
      console.log(newarr , 'newarr')
      newarr = newarr.sort((a,b)=> {
        return a.id-b.id
       })
       setToDoList(newarr)
    }
  };
  
  const deletehandler = (id) => {
    const newlistdelete = todolist.filter((todo) => {
      return todo.id !== id;
    });
    setToDoList(newlistdelete);
  };
  const editHandler = (td) => {
    //  console.log(td)
    setEditToDo(td);
  };

  return (
    <div>
      <AddToDo handleSubmit={handleSubmit} edittodo={edittodo} />
      {todolist.map((todo) => {
        return (
          <Todoitem
            todo={todo}
            key={todo.id}
            deletehandler={deletehandler}
            editHandler={editHandler}
          />
        );
      })}
    </div>
  );
};
