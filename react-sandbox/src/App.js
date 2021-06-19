import React, { useState } from 'react'
import Toolbar from './components/UI/Toolbar/Toolbar'
import ToggleSwitch from './components/UI/Switch/ToggleSwitch'
import Modal from './components/UI/Modal/Modal'
import ModalPortal from './ModalPortal'
import DebouncingComponent from './components/spikes/Debounce/DebouncingComponent'

import classes from './App.module.css'
import ListTest from './ListTest'
import ThrottlingComponent from './components/spikes/Throttle/ThrottlingComponent'
import SideDrawer from './components/SideDrawer'
import useDebounce from './components/spikes/Debounce/useDebounce'
import AddModal from './components/UI/Modal/AddModal'

const App = () => {
    const [showSide, setShowSide] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [searchWord, setSearchWord] = useState('')

    const [showAddModal, setAddShowModal] = useState(false)

    useDebounce(() => console.log('debounce hook'), [searchWord], 1000)

    const showSideDrawer = () => {
        setShowSide(true)
    }

    const hideSideDrawer = () => {
        setShowSide(false)
    }

    const showModalHandler = () => {
        document.body.style.overflow = 'hidden'
        setShowModal(true)
    }

    const hideModalHandler = () => {
        document.body.style.overflow = 'scroll'
        setShowModal(false)
    }

    const onClickInputText = (e) => {
        e.target.scrollIntoView(true)
    }

    const onChangeSearchWord = (e) => {
        setSearchWord(e.target.value)
    }

    const showAddModalHandler = () => {
        document.body.style.overflow = 'hidden'
        setAddShowModal(true)
    }

    const hideAddModalHandler = () => {
        document.body.style.overflow = 'scroll'
        setAddShowModal(false)
    }

    return (
        <div>
            <Toolbar drawerToggleClicked={showSideDrawer} />
            <SideDrawer open={showSide} closed={hideSideDrawer} />
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

                <div>
                    <label htmlFor="search_name">Apartment name</label>
                    <input
                        type="text"
                        id="search_name"
                        placeholder="Search here..."
                        onChange={onChangeSearchWord}
                        onClick={(e) => onClickInputText(e)}
                    />
                </div>

                <ThrottlingComponent />

                <h1>Hello there</h1>
                <button onClick={showAddModalHandler}>Add Value</button>
                {showAddModal && (
                    <ModalPortal>
                        <AddModal onClose={hideAddModalHandler} />
                    </ModalPortal>
                )}
            </main>
        </div>
    )
}

export default App
