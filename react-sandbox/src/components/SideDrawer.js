import React, { Fragment, useState } from 'react'
import classes from './SideDrawer.module.css'
import Backdrop from './Backdrop'

const SideDrawer = (props) => {
    let sideDrawerStyles = [classes.SideDrawer, classes.Close]
    if (props.open) {
        sideDrawerStyles = [classes.SideDrawer, classes.Open]
    }

    return (
        <div>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={sideDrawerStyles.join(' ')}>
                <div>Logo</div>
                <nav>
                    <ul>
                        <li>link 1</li>
                        <li>link 2</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default SideDrawer
