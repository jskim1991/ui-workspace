import React, { useEffect, useRef, useContext } from 'react';

import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {

    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // const timer = setTimeout(() => {
        //     // alert('Saved data to cloud!');
        //     console.log("useEffect timeout");
        // }, 1000);
        toggleBtnRef.current.click();

        return() => {
            // clearTimeout(timer);
            console.log('[Cockpit.js] clean up work in useEffect');
        }
    }, []); // once at the beginning

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return() => {
            console.log('[Cockpit.js] 2nd clean up work in useEffect');
        }
    }) // everytime

    const assignedClasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red;
    }
    
    if ( props.personsLength <= 2 ) {
      assignedClasses.push( classes.red ); // classes = ['red']
    }
    if ( props.personsLength <= 1 ) {
      assignedClasses.push( classes.bold ); // classes = ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hi, I'm a React App</h1>
            <p className={assignedClasses.join( ' ' )}>This is really working!</p>
            <button
                ref={toggleBtnRef}
                className={btnClass}
                onClick={props.clicked}>Toggle Persons
            </button>
            {/* <AuthContext.Consumer> */}
                {/* {(context) =>  */}
                <button onClick={authContext.login}>Log in</button>
                {/* } */}
            {/* </AuthContext.Consumer> */}
        </div>
    )
}

export default React.memo(cockpit);