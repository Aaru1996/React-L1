import React, { useState } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

const Parent = () => {

    const[childValue,setChildValue]=useState("")

    
  return (
    <div>Parent:
        
       
        <Child1 childValue={childValue} setChildValue={setChildValue} />
        <Child2 childValue={childValue} />
    </div>
  )
}

export default Parent