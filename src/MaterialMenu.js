import React, { useState } from 'react'
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import {Menu, MenuItem, Button  } from '@material-ui/core';
import Greetings from './Greeting';
import Reddit from './Reddit';
import Time from './Time';


export default function MaterialMenu() {
    const [anchor, setAnchor] = useState(null)

    const openMenu = (event) => {
        setAnchor(event.currentTarget)
    }

    const closeMenu = () => {
        setAnchor(null)
    }

    return (
        
        <Router>
        <h1 style={{color:'blue',border:'solid 1px', width: '500px', margin:'auto'}}>React Material UI | Menu</h1>
        <Button onClick={openMenu}>Menu</Button>
        
        <Menu open={anchor} onClick={closeMenu}>
            <MenuItem onClick={closeMenu}><Link to='/'>Home</Link></MenuItem>
            <MenuItem><Link to='/greeting'>Greeting</Link></MenuItem>
            <MenuItem><Link to='/reddit'> Reddit </Link></MenuItem>
            <MenuItem><Link to='time'>Time</Link></MenuItem>
        </Menu>
        <div className="greetings">
            <Route path='/greeting'> <Greetings/> </Route>
        </div>
        <Route path='/reddit'> <Reddit subreddit='reactjs'/> </Route>
        <Route path='/time'> <Time image={<img src="https://picsum.photos/810/350" alt="pic"></img>}/> </Route>
            
        </Router>
       
    )
}
