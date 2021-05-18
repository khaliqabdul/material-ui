import React from 'react';

//import './App.css'
import Greetings from './Greeting';
import name, {job, Tick} from './Tick';
function App(){
  return(
  <>
     <ol>
       <li>{name}</li>
       <br/>
       <br/>
       <Greetings/>
       <br/>
       <br/>
       <li>{job}</li>
       <li>{Tick()}</li>
     </ol> 
    
    
  </>
  );
};
export default App;