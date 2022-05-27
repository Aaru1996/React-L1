import React, { useState } from 'react'

const Child1 = ({childValue,setChildValue}) => {
        
    // const[value,setValue]=useState("")
    // const handleChange=(e)=>{
    //    setValue(e.target.value)
    // }
  return (
    <div>Child1:{childValue}
        <input onChange={(e)=> setChildValue(e.target.value)}/>
    </div>
  )
}

export default Child1