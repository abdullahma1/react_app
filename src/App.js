

import { useState } from 'react';
import './App.css';

var num= 0;

function App() {
   
  const [text , setext] = useState("abc");
  const [result , setResult] = useState(0);
  const [name , setName] = useState("");


function add(){

  //result = num++;
  setResult(num++);

}
function getvalue(event){
          console.log(event.target.value)
          setName(event.target.value)
}
// function show(){}

function changetext(){
  setext(name);

}
  return (
    <>

    <h1>hello react</h1>
      <div className="App">
    <input   onChange={getvalue} /> 
      <button onClick={changetext}> change value</button>
{text}

      </div>
    </>

  );
}

export default App;
