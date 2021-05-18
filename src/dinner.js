import React from 'react';
function Dinner(props){
    return(
        <div>
            {props.title} {props.body} {props.image}
        </div>
    )
}
export default Dinner;
