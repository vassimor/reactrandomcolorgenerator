import './App.css';
import { randomColor } from 'randomcolor';
import { useState } from 'react';

export default  function App() {

const [ newcolor, setNewcolor ]= useState(randomColor());




  return (



    <div className='App' >
      <h1>React Random Color Generator</h1>
      <h3>This is a smaller heading</h3>
      <div style={{backgroundColor:newcolor}}> this is a new div  </div>
      <p >This is a paragraph{newcolor}</p>
      <button onClick={ () => setNewcolor(randomColor())}> GENERATE</button>
      {console.log(newcolor)}



    </div>
  );
}
