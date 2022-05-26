import Hello from './components/Hello'
import { Answer1 } from './components/Answer1.jsx'
// import Answer1 from './components/Answer1';

function App() {
  // var u1="arun"
  var info=[
            { name:"arun", place:"UK",},
           {name:"Vikash",place:"India",},
           ]
  
  return (
    <div>
        <Hello></Hello>
        
        {/* <Answer1 name={u1} place="Uk" />
        <Answer1 name="Vikash" place="India" /> */}

        {/* <Answer1 {...info[0]}/>
        <Answer1 {...info[1]}/> */}

      {info.map((elem)=>(
        <div>
            <h1>User1</h1>
            <Answer1 {...elem}/>
        </div>
       
      ))}
    </div>
  
  );
}

export default App;
