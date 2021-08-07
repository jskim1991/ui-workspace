import { SHOW_NOTIFICATION } from './ui-index'
import { REPLACE } from './cart-index'

export const fetchCardData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch(
                'https://react-advanced-redux-fe6e0-default-rtdb.firebaseio.com/cart.json',
            )

            if (!response.ok) {
                throw new Error('Could not fetch cart data')
            }

            const data = await response.json()
            return data
        }

        try {
            const cartData = await fetchData()
            dispatch({
                type: REPLACE,
                payload: {
                    items: cartData.items || [],
                    totalQuantity: cartData.totalQuantity,
                    totalAmount: cartData.totalAmount,
                },
            })
        } catch (error) {
            dispatch({
                type: SHOW_NOTIFICATION,
                payload: {
                    status: 'error',
                    title: 'Error!',
                    message: 'Fetching cart data failed',
                },
            })
        }
    }
}

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch({
            type: SHOW_NOTIFICATION,
            payload: {
                status: 'Pending...',
                title: 'Sending...',
                message: 'Sending cart data',
            },
        })

        const sendRequest = async () => {
            const response = await fetch(
                'https://react-advanced-redux-fe6e0-default-rtdb.firebaseio.com/cart.json',
                {
                    method: 'PUT',
                    body: JSON.stringify({
                        items: cart.items,
                        totalQuantity: cart.totalQuantity,
                        totalAmount: cart.totalAmount,
                    }),
                },
            )

            if (!response.ok) {
                throw new Error('Sending cart data failed')
            }
        }

        try {
            await sendRequest()
        } catch (error) {
            dispatch({
                type: SHOW_NOTIFICATION,
                payload: {
                    status: 'error',
                    title: 'Error!',
                    message: 'Sending cart data failed',
                },
            })
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
}
