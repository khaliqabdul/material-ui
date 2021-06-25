import React, { useState } from 'react';

function Time(props){
    
    function getTime() {
        let curTime = new Date().toLocaleTimeString();
        return curTime
    }
    
    const [time, setTime] = useState(getTime());
    const updateTime = () => setTime(getTime());
    
    setInterval(updateTime, 1000)
    return(
        <div>
            {props.image}
            <h2>{time}</h2>
        </div>
    )
}
export default Time;
