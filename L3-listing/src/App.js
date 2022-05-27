// import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import { useState } from 'react';
import TodoApp from './components/TodoApp';


function App() {
  const [toggle, setToggle] =useState(false)

  return (
    <div className="App">
      <TodoApp/>
      </div>  
      )
     
    //  {/* <button  onClick={()=>setToggle(!toggle)} > {toggle ? "Hide " : "show counter"}</button>
    //   {toggle ? <Counter/> : null} */}

      {/* <button  onClick={()=>setToggle(!toggle)} > {toggle ? "show Todo" : "show counter"}</button>
       {toggle ? <Counter/> : <TodoApp/>}
   </div> */}
   

  {/* if(toggle){
    return (
      <div className="App">
        <button onClick={()=>setToggle(!toggle)} >toggle</button>
        <Counter/>
     </div>
    )
  }
  else{
    return (
      <div className="App">
        <button onClick={()=>setToggle(!toggle)} >toggle</button>
        <Todo/>
     </div>
    )
  } */}
       
 
}

export default App;
