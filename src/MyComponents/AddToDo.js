import React, {useState, useEffect} from 'react'
export const AddToDo = ({handleSubmit , edittodo}) => {
    // console.log(edittodo)
    // // const title = edittodo?edittodo.title: ""
    // // const desc = edittodo?edittodo.desc: ""
    // console.log(title , 'title')
    // console.log(desc , 'desc')

    const [todotitle, setToDotitle] = useState("");
  const [tododesc, setToDoDesc] = useState("");
  useEffect(() => {
    
        setToDotitle(edittodo?.title)
        setToDoDesc(edittodo?.desc)
    
  }, [edittodo])
  return (
    <div>
         <form onSubmit={(e) =>{ 
            handleSubmit(e, todotitle, tododesc);
             setToDotitle("")
            setToDoDesc("")
            }}>
        <input
          type="text"
          placeholder="title "
          value={todotitle}
          onChange={(e) => setToDotitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="desc"
          value={tododesc}
          onChange={(e) => setToDoDesc(e.target.value)}
        />
        <button type="submit">{edittodo? "edit" : "add"}</button>
      </form>
    </div>
  )
}
