import React, { useEffect, useState } from 'react'
import Toolbar from './components/UI/Toolbar/Toolbar'
import ToggleSwitch from './components/UI/Switch/ToggleSwitch'
import Modal from './components/UI/Modal/Modal'
import ModalPortal from './ModalPortal'
import DebouncingComponent from './components/spikes/Debounce/DebouncingComponent'

import classes from './App.module.css'
import ListTest from './ListTest'
import ThrottlingComponent from './components/spikes/Throttle/ThrottlingComponent'
import SideDrawer from './components/SideDrawer'
import useDebounce from './hooks/useDebounce'
import AddModal from './components/UI/Modal/AddModal'
import Counter from './components/reduxsamples/Counter'
import Layout from './components/reduxadvanced/Layout/Layout'
import Cart from './components/reduxadvanced/Cart/Cart'
import Products from './components/reduxadvanced/Shop/Products'
import { useDispatch, useSelector } from 'react-redux'
import Notification from './components/reduxadvanced/UI/Notification'
import { fetchCardData, sendCartData } from './store/cart-actions'

import { Route } from 'react-router-dom'
import Welcome from './routes/Welcome'
import ProductsSample from './routes/ProductsSample'
import MainHeader from './routes/MainHeader'
import SwipeableComponents from './components/spikes/SwipeableComponent/SwipeableComponents'

let isInitial = true

const App = () => {
    const [showSide, setShowSide] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [searchWord, setSearchWord] = useState('')

    const [showAddModal, setAddShowModal] = useState(false)

    useDebounce(() => console.log('debounce hook'), [searchWord], 1000)

    /* redux */
    const showCart = useSelector((state) => state.uiReducer.cartIsVisible)
    const cart = useSelector((state) => state.cartReducer)
    const notification = useSelector((state) => state.uiReducer.notification)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCardData())
    }, [dispatch])

    useEffect(() => {
        if (isInitial) {
            isInitial = false
            return
        }

        if (cart.changed) {
            dispatch(sendCartData(cart))
        }
    }, [cart, dispatch]) // dispatch will never trigger this to run

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
            <MainHeader />
            <main>
                <Route path="/welcome">
                    <Welcome />
                </Route>
                <Route path="/products">
                    <ProductsSample />
                </Route>
            </main>

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
                <Counter />

                <SwipeableComponents />

                {notification && (
                    <Notification
                        status={notification.status}
                        title={notification.title}
                        message={notification.message}
                    />
                )}
                <Layout>
                    {showCart && <Cart />}
                    <Products />
                </Layout>

                <div>End</div>
            </main>
        </div>
    )
}

export default App
