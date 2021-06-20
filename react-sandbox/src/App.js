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
import { SHOW_NOTIFICATION } from './store/uiIndex'
import Notification from './components/reduxadvanced/UI/Notification'

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
        const sendCartData = async () => {
            dispatch({
                type: SHOW_NOTIFICATION,
                payload: {
                    status: 'Pending...',
                    title: 'Sending...',
                    message: 'Sending cart data',
                },
            })
            const response = await fetch(
                'https://react-advanced-redux-fe6e0-default-rtdb.firebaseio.com/cart.json',
                {
                    method: 'PUT',
                    body: JSON.stringify(cart),
                },
            )

            if (!response.ok) {
                throw new Error('Sending cart data failed')
            }

            dispatch({
                type: SHOW_NOTIFICATION,
                payload: {
                    status: 'success',
                    title: 'Success!',
                    message: 'Sent cart data successfully',
                },
            })
        }

        if (isInitial) {
            isInitial = false
            return
        }

        sendCartData().catch((error) => {
            dispatch({
                type: SHOW_NOTIFICATION,
                payload: {
                    status: 'error',
                    title: 'Error!',
                    message: 'Sending cart data failed',
                },
            })
        })
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
            </main>
        </div>
    )
}

export default App
