import React, { useState } from 'react'

const Stopwatch = () => {
 
    const [timerId, setTimerId]= useState(null);
    const [watch, setWatch]=useState(0);

 const start=() => {
     if(!timerId)
     {
        var id= setInterval(()=> {
        
            setWatch((watch)=> watch+1)
            setTimerId(id)
        },1000)
     }
     
 }

 const pause=() => {
     clearInterval(timerId)
     setTimerId(null);
     
}

const reset=() => {
    clearInterval(timerId)
    setWatch(0)
     
}

  return (
    <div>
        <h2>Stopwatch</h2>
        <h1>{watch}</h1>

        <button onClick={start}>Start</button>
        <button onClick={pause}>Pause</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Stopwatch