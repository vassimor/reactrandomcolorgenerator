import './App.css';
import { GetColorName } from 'hex-color-to-color-name';
import { randomColor } from 'randomcolor';
import { useState } from 'react';

export default function App() {
  // Create state variable newcolor
  const [newcolor, setNewcolor] = useState('');
  const [hue, setHue] = useState('');
  const [luminosity, setLuminosity] = useState('');



  return (
    <div>
      <div className="wrapper">
        <h1>React Random Color Generator</h1>
        <button className="button" onClick={() => setNewcolor(randomColor({hue,luminosity}))}>
          Generate
        </button>
        <p style={{ backgroundColor: newcolor }}>
          Generated color :{GetColorName(newcolor)}
          {` `}
          {newcolor}
        </p>


         <label htmlFor="#hue">Please enter the hue</label>


         <input  id="hue" value ={hue}
         onChange={(event) => {setHue(event.target.value)}} />

         <label htmlFor='#lumin'>Please enter the luminosity</label>



         <input id="lumin" value={luminosity}
         onChange={(event)=>setLuminosity(event.target.value)}/>








      </div>
    </div>
  );
}
