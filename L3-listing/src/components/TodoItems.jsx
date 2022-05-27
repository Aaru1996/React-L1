import React from 'react'

const TodoItems = ({value, deleteTodo}) => {
  return (
    <li>
       {value} 
       <button onClick={()=> deleteTodo(value)}>Delete</button>
    </li>
  )
}

export default TodoItems 