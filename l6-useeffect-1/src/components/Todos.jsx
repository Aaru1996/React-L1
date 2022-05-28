import React, { useEffect, useState } from 'react'

const Todos = () => {

const [todos,setTodos]=useState([]);
const [newTodo, setNewTodo]=useState("");

const saveInfo=()=>{
  // call api to save information in bckend
  fetch("http://localhost:8080/todos",{
    method:"POST",
    headers:{"content-type" : "application/json"},
    body:JSON.stringify({value:newTodo, isCompleted:false})
  })
  .then((res)=> res.json())
  .then((data)=> {
    setTodos([...todos,data]);
    setNewTodo("")
  })
}

useEffect(()=>{
  fetch("http://localhost:8080/todos")
  .then((res)=> res.json())
  .then((data)=>{
    setTodos(data);
  console.log(data)
  })

},[])

   

  return (
    <div>Todos
      <div>
        <input value={newTodo} onChange={(e)=> setNewTodo(e.target.value)} />
        <button disabled={!newTodo} onClick={saveInfo} >+</button>


        {todos.map((todo)=>(
          <div key={todo.id}>{ todo.value}</div>
           
        ))}
      </div>
    </div>
  )
}

export default Todos
