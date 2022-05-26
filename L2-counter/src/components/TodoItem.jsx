import React, { useState } from 'react'
import styles from './Todo.module.css';

const TodoItem = ({elem,OnDelete}) => {

    const [isCompleted, setIsCompleted]=useState(elem.isCompleted)

  return (
    <div key={elem.id} className={styles.container}>
        <input type="checkbox" checked={isCompleted} onChange={(e)=>(
              setIsCompleted(e.target.checked)
        )} />
        
        <div className={isCompleted ? styles.striked : ""} > {elem.value}</div>
           
       
        

        <button  onClick={()=>OnDelete(elem.id)}>Delete</button>
   </div>
  )
}

export default TodoItem