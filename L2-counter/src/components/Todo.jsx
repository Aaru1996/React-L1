import React, { useState } from 'react'
import TodoItem from './TodoItem'
import styles from './Todo.module.css';

const Todo = () => {

    const [newTodo, setnewTodo]=useState("")
     const[todos, setTodos]=useState([])


    const handleTodo=(e)=>{
         setnewTodo(e.target.value)
    }
 
    const onDelete=(id)=>{
        let updateTodo=todos.filter(todo => todo.id !== id)
        setTodos(updateTodo);
     }
  

  return (
    <div>
        <h3>Todo</h3>
        <input value={newTodo} onChange={handleTodo}/>
        <button onClick={()=>{
                    setTodos([...todos, {id:Date.now(), value:newTodo}])
                    setnewTodo("")
                }}>Add</button>
        
        {todos.map((elem)=>{
            return (
                <div className={styles.todo}  key={elem.id}>
                    <TodoItem elem={elem} onDelete={onDelete}/>
                </div>
                
               )
        })}
    </div>
  )
}

export default Todo