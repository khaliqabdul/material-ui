import React, { useState } from 'react';
import { Tab, Tabs, AppBar } from '@material-ui/core';



function MaterialUI() {
    const [active, setActive] = useState(0)

    const handleTabs = (e, val) => {
        setActive(val)
    }
    
    return (
        <div>
        <h1>Material UI</h1>
        <AppBar position='static'>
            <Tabs value={active} onChange={handleTabs}>
                <Tab label="Item 1"/>
                <Tab label="Item 2"/>
                <Tab label="Item 3"/>
                <Tab label="Item 4"/>
            </Tabs>
        </AppBar>
            <TabPanel value={active} index={0}>
                Item One Detail
            </TabPanel>
            <TabPanel value={active} index={1}>
                Item Two Detail
            </TabPanel>
            <TabPanel value={active} index={2}>
                Item Three Detail
            </TabPanel>
            <TabPanel value={active} index={3}>
                Item Four Detail
            </TabPanel>
        
        </div>
    )
}
export default MaterialUI;

function TabPanel(props) {
    const {value, index, children} = props
    return(
        <div>
            {value === index && (<h1>{children}</h1>)}
        </div>
    )
}