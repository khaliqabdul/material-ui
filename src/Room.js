import React, {useState} from 'react';
import './index.css';
function Room(){
   
    let [isLit, setLit] = useState(false);
    let [roomTemp,setTemp] = useState(22);
    
return(
      <div className={`room ${isLit? "lit" : "dark"}`}>
        <h1>This Room is {isLit? "lit" : "dark"}</h1>
        <br/>
        <button onClick={()=>{setLit(isLit = true)}}>ON</button>
       
        <button onClick={()=>{setLit(isLit = false)}}>OFF</button>
        <br/>
        <h1>Room Temperature = {roomTemp}</h1>
        <br/>
        <button onClick={()=>{setTemp(++roomTemp)}}>+ Temp</button>
        
        <button onClick={()=>{setTemp(--roomTemp)}}>-Temp</button>
      </div>
  );
};
export default Room;