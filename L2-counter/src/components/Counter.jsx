import React, {Fragment, useState} from "react";

const Counter = ({initialValue})=>{
    // hooks-use useSatate
    // Hooks is a set inbuild react function use to interact with virtual DOM.

    // let count=0;

    // const [count,setCount]= React.useState(0)
    const [count,setCount]= useState(initialValue)

    // const incrementCount=()=>{
    //    setCount(count+1);
    // }

    // const decrementCount=()=>{
    //     if(count>0)
    //     setCount(count-1)
    // }

    // return (
    //     <div>
    //         <h3>Counter App: {count}</h3>
    //         <button onClick={incrementCount}>Increment</button>
    //         <button onClick={decrementCount}>Decrement</button>
    //     </div>
    // )

    // 2nd method

    // we can only return signal component(div) in components

    return (
            <Fragment>
                <h3>Counter App: {count}</h3>
                <button onClick={()=> setCount(count+1)}>Increment</button>
                <button onClick={()=>  {  if(count>0)
                                          setCount(count-1)}}>Decrement</button>
            </Fragment>
        )
    
}

export default Counter;