import MainHeader from './routes/MainHeader'
import { Route } from 'react-router-dom'
import { Home } from './components/spikes/login/Home'
import Welcome from './routes/Welcome'
import ProductsSample from './routes/ProductsSample'
import SelfAuth from './components/spikes/SelfAuth'
import Toolbar from './components/UI/Toolbar/Toolbar'
import SideDrawer from './components/SideDrawer'
import classes from './App.module.css'
import ToggleSwitch from './components/UI/Switch/ToggleSwitch'
import ModalPortal from './ModalPortal'
import Modal from './components/UI/Modal/Modal'
import ListTest from './ListTest'
import DebouncingComponent from './components/spikes/Debounce/DebouncingComponent'
import ThrottlingComponent from './components/spikes/Throttle/ThrottlingComponent'
import AddModal from './components/UI/Modal/AddModal'
import Counter from './components/reduxsamples/Counter'
import SwipeableComponents from './components/spikes/SwipeableComponent/SwipeableComponents'
import Notification from './components/reduxadvanced/UI/Notification'
import Layout from './components/reduxadvanced/Layout/Layout'
import Cart from './components/reduxadvanced/Cart/Cart'
import Products from './components/reduxadvanced/Shop/Products'
import SwiperSample from './components/spikes/swiper/SwiperSample'
import SwiperComponents from './components/spikes/swiper/SwiperComponents'
import KakaoLogin from './components/spikes/login/KakaoLogin'
import KakaoLogout from './components/spikes/login/KakaoLogout'
import React, { useEffect, useState } from 'react'
import useDebounce from './hooks/useDebounce'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCardData, sendCartData } from './store/cart-actions'

let isInitial = true

const HomePage = () => {
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

                {/*<SampleTimer />*/}

                <h1>Hello there</h1>
                <button onClick={showAddModalHandler}>Add Value</button>
                {showAddModal && (
                    <ModalPortal>
                        <AddModal onClose={hideAddModalHandler} />
                    </ModalPortal>
                )}
                <Counter />
                <SelfAuth />

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

                <SwiperSample />
                <SwiperComponents />

                {/*<Login />*/}
                <Home />
                <KakaoLogin />
                <KakaoLogout />

                <div>End</div>
            </main>
        </div>
    )
}
export default HomePage
