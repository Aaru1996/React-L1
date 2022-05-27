import React, { useState } from 'react'
import TodoInput from './TodoInput'
import TodoItems from './TodoItems'
import TodoList from './TodoList'
import { v4 as uuidv4 } from 'uuid';


function TodoApp() {

  const [todos, setTodos] = useState([])

  const addTodo=(xyz)=>{
         setTodos([...todos,{ id:uuidv4(),value:xyz}])
  }

  let deleteTodo=(value)=>{
    setTodos(todos.filter((todo)=>  todo.value !==value))
  }
         
  
  return (
    
    <div>TodoApp

      <TodoInput addTodo={addTodo}/>
       <TodoList >

         {todos.map((todo)=>
            (
              <TodoItems key={todo.id} value={todo.value} deleteTodo={ deleteTodo}  />
           )
         )}

       </TodoList>

      {/* <TodoList todos={todos}/> */}
    </div>
  )
}

export default TodoApp