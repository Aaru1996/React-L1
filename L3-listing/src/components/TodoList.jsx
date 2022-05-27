import React from 'react'

const TodoList = ({todos,children}) => {
  return (
    <div>
      <ul>{children}</ul> 
    
       {/* {todos.map((todo)=>{
           return (
               <li>{todo}</li>
           )
       })} */}
    </div>
  )
}

export default TodoList