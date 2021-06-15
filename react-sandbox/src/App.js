import React, { useState } from 'react'
import Toolbar from './components/UI/Toolbar/Toolbar'
import ToggleSwitch from './components/UI/Switch/ToggleSwitch'
import Modal from './components/UI/Modal/Modal'
import ModalPortal from './ModalPortal'
import DebouncingComponent from './components/spikes/Debounce/DebouncingComponent'

import classes from './App.module.css'
import ListTest from './ListTest'
import ThrottlingComponent from './components/spikes/Throttle/ThrottlingComponent'

const App = () => {
    const [showSide, setShowSide] = useState(false)
    const [showModal, setShowModal] = useState(false)

    const showSideDrawer = () => {
        setShowSide(true)
    }

    const hideSideDrawer = () => {
        setShowSide(false)
    }

    const showModalHandler = () => {
        setShowModal(true)
    }

    const hideModalHandler = () => {
        setShowModal(false)
    }

    return (
        <div>
            <Toolbar drawerToggleClicked={showSideDrawer} />
            {/*<SideDrawer open={showSide} closed={hideSideDrawer}/>*/}
            <main className={classes.Main}>
                <ToggleSwitch />
                <button onClick={showModalHandler}>Open modal</button>
                {showModal && (
                    <ModalPortal>
                        <Modal onClose={hideModalHandler} />
                    </ModalPortal>
                )}
                <div>
                    <ToggleSwitch />
                </div>
                <ListTest />
                <DebouncingComponent />
                <ThrottlingComponent />
            </main>
        </div>
    )
}

export default App
