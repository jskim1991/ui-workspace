import Layout from './reduxadvanced/Layout/Layout'
import Cart from './reduxadvanced/Cart/Cart'
import Products from './reduxadvanced/Shop/Products'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCardData, sendCartData } from './store/cart-actions'
import Notification from './reduxadvanced/UI/Notification'

let isInitial = true

const ReduxCartPage = () => {
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

    return (
        <div>
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
        </div>
    )
}
export default ReduxCartPage
