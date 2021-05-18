import React, {useState} from 'react';
import './index.css';
function Room(){
    // const state = useState(true);
    // console.log("State; ", state);
    let [isLit, setLit] = useState(false);
    let [roomTemp,setTemp] = useState(22);
    // console.log(isLit);
    // function updateLitOn(){
    //     setLit(isLit = true);
    //     console.log(isLit);
    // }
    // function updateLitOff(){
    //     setLit(isLit = false)
    //     console.log(isLit);
    // }
return(
      <div className={`room ${isLit? "lit" : "dark"}`}>
        This Room is {isLit? "lit" : "dark"}
        <br/>
        <button onClick={()=>{setLit(isLit = true)}}>ON</button>
        <br/>
        <br/>
        <button onClick={()=>{setLit(isLit = false)}}>OFF</button>
        <br/>
        Room Temperature = {roomTemp}
        <br/>
        <button onClick={()=>{setTemp(++roomTemp)}}>+ Temp</button>
        <br/>
        <button onClick={()=>{setTemp(--roomTemp)}}>-Temp</button>
      </div>
  );
};
export default Room;