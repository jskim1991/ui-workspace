import React, { useState } from 'react'
import Toolbar from './components/UI/Toolbar/Toolbar'
import SideDrawer from './components/SideDrawer'
import ToggleSwitch from './components/UI/Switch/ToggleSwitch'
import Modal from './components/UI/Modal/Modal'
import ModalPortal from './ModalPortal'

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
            <SideDrawer open={showSide} closed={hideSideDrawer} />
            <ToggleSwitch />
            <button onClick={showModalHandler}>Open modal</button>
            {showModal && (
                <ModalPortal>
                    <Modal onClose={hideModalHandler} />
                </ModalPortal>
            )}
        </div>
    )
}

export default App
