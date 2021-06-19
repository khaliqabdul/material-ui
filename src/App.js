import React from 'react';
// import Room from './Room';
import './App.css'
import Greetings from './Greeting';
import Reddit from './Reddit';
import Time from './Time.js';

function App() {
  return (
    <div className="App">
        <Time image={<img src="https://picsum.photos/810/350" alt="pic"></img>} />
      <div className="greetings">
        <Greetings />
      </div>

      <Reddit subreddit='reactjs'/>
    </div>
  );
};
export default App;