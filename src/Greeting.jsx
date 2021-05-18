import React from 'react';
import './index.css';

function Greetings(){
  // let curTime = new Date().toLocaleTimeString();
let curHour = new Date().getHours();
let greetings = ' ';
const cssStyle = { };

if(curHour >= 5 && curHour < 8){
  greetings = 'Good Morning!';
  cssStyle.color = "orange";
}
else if(curHour >= 8 && curHour < 11){
  greetings = 'Have a Good day!';
  cssStyle.color = 'Blue';
}
else if(curHour >= 11 && curHour < 14){
  greetings = 'Good Noon!';
  cssStyle.color = 'Red';
}
else if(curHour >= 14 && curHour < 19){
  greetings = 'Good Afternoon!';
  cssStyle.color = 'purple';
}
else if(curHour >= 19 && curHour <= 21){
  greetings = 'Good Evening!';
  cssStyle.color = 'yellow';
}
else {
  greetings = 'Good Night!';
  cssStyle.color = 'skyblue'
}
    return(
        <>
        <div>
          <h1> Hello Sir, <span style={cssStyle}>{greetings}</span></h1>
          {/* <p> {curTime} </p> */}
        </div>
        </>
    )
}
export default Greetings;