import React, { useState } from 'react'

import DrawerToggle from '../../DrawerToggle'
import classes from './Toolbar.module.css'

const Toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
            <DrawerToggle clicked={props.drawerToggleClicked} />
        </header>
    )
}

export default Toolbar
