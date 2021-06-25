import React from 'react';
import MaterialMenu from './MaterialMenu'
import './App.css'
import Greetings from './Greeting';
import Reddit from './Reddit';
import Room from './Room.js';
import MaterialUI from './MaterialUI';
import Time from './Time';
import { Grid } from '@material-ui/core';


function App() {
  return (
    <div className="App" >
        <MaterialUI/>
        <Grid item container spacing={2} xs={12}>
            <Grid item lg={6} md={6} sm={6} xs={12} >
              <Time image={<img src="https://picsum.photos/730/350" alt="pic"></img>} />
            </Grid>
            <Grid item lg={6} md={6} sm={6} xs={12}><Room/></Grid>
        </Grid>
        <div className="greetings"><Greetings /></div>
        <Reddit subreddit='reactjs'/>
        <hr/>
        <MaterialMenu/>
    </div>
  );
};
export default App;