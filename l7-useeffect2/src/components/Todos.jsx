import React from 'react'

import {useEffect, useState} from "react";
import axios from "axios"

const Todos = () => {

    const [limit, setLimit]= useState(5)
    const [pageCount, setPageCount]=useState(0)
    const [page, setPage]= useState(1)
    const [todos, setTodos]=useState([])
  
        useEffect(()=>{
  
          const getTodo= async()=>{
            let res = await axios.get(`http://localhost:8080/todos/?_page=${page}&_limit=${limit}`)
            setTodos(res.data);
            setPageCount(Number(res.headers["x-total-count"]))
            console.log(res.data);
         }
  
         getTodo();
  
    },[page,limit])
  
   
  return (
    <div className="App">

    <button disabled={page<=1} onClick={()=> setPage(page-1)}>{"<"}</button>
    <select onChange={(e)=> setLimit(e.target.value)}>
      <option value={5}>5</option>
      <option value={10}>10</option>
      <option value={20}>20</option>
    </select>
    <button disabled={pageCount < page*limit} onClick={()=> setPage(page+1)}>{`>`}</button>
   
    {todos.map((todo)=>(
      <div key={todo.id}>{todo.value}</div>
    ))}

   
  </div>
  )
}

export default Todos