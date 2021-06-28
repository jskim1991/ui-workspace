import Cart from './components/Cart/Cart'
import Layout from './components/Layout/Layout'
import Products from './components/Shop/Products'
import { useDispatch, useSelector } from 'react-redux'
import { Fragment, useEffect } from 'react'
import Notification from './components/UI/Notification'
import { fetchCartData, sendCartData } from './store/cart-actions'

let isInitial = true

function App() {
    const showCart = useSelector((state) => state.ui.cartIsVisible)
    const cart = useSelector((state) => state.cart)
    const notification = useSelector((state) => state.ui.notification)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCartData())
    }, [dispatch])

    useEffect(() => {
        if (isInitial) {
            isInitial = false
            return
        }

        if (cart.changed) {
            /* option 2: inside the action creators */
            dispatch(sendCartData(cart))
        }

        /* option 1: have http logic inside the component */
        //     dispatch(
        //         uiActions.showNotification({
        //             status: 'pending',
        //             title: 'Sending...',
        //             message: 'Sending cart data',
        //         }),
        //     )
        //
        //     const sendCartData = async () => {
        //         const response = await fetch(
        //             'https://react-advanced-redux-fe6e0-default-rtdb.firebaseio.com/cart.json',
        //             { method: 'PUT', body: JSON.stringify(cart) },
        //         )
        //         if (!response.ok) {
        //             throw new Error('Sending cart data failed')
        //         }
        //
        //         dispatch(
        //             uiActions.showNotification({
        //                 status: 'success',
        //                 title: 'Success!',
        //                 message: 'Sent cart data successfully',
        //             }),
        //         )
        //     }
        //
        //     sendCartData().catch((error) => {
        //         dispatch(
        //             uiActions.showNotification({
        //                 status: 'error',
        //                 title: 'Error!',
        //                 message: 'Sending cart data failed',
        //             }),
        //         )
        //     })
    }, [cart, dispatch])

    return (
        <Fragment>
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
        </Fragment>
    )
}

export default App
