import { SHOW_NOTIFICATION } from './uiIndex'

export const ADD = 'add'
export const REMOVE = 'remove'

const initialState = {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
}

const cartReducer = (state = initialState, action) => {
    if (action.type === ADD) {
        const newItem = action.payload

        const existingItemIndex = state.items.findIndex(
            (item) => item.id === newItem.id,
        )

        let updatedItems

        if (existingItemIndex > -1) {
            const existingItem = state.items[existingItemIndex]
            const updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity + 1,
                totalPrice: existingItem.totalPrice + newItem.price,
            }
            updatedItems = [...state.items]
            updatedItems[existingItemIndex] = updatedItem
        } else {
            updatedItems = state.items.concat({
                id: newItem.id,
                price: newItem.price,
                quantity: 1,
                totalPrice: newItem.price,
                name: newItem.title,
            })
        }
        return {
            ...state,
            items: updatedItems,
            totalQuantity: state.totalQuantity + 1,
            totalAmount: state.totalAmount + newItem.price,
        }
    }

    if (action.type === REMOVE) {
        const id = action.payload
        const existingItemIndex = state.items.findIndex(
            (item) => item.id === id,
        )
        const existingItem = state.items[existingItemIndex]
        if (existingItem.quantity === 1) {
            const filteredItems = state.items.filter((item) => item.id !== id)
            return {
                ...state,
                items: filteredItems,
                totalQuantity: state.totalQuantity - 1,
            }
        } else {
            const updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity - 1,
                totalPrice: existingItem.totalPrice - existingItem.price,
            }
            const updatedItems = [...state.items]
            updatedItems[existingItemIndex] = updatedItem
            return {
                ...state,
                items: updatedItems,
                totalQuantity: state.totalQuantity - 1,
            }
        }
    }

    return state
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
                    body: JSON.stringify(cart),
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

export default cartReducer
