import { SHOW_NOTIFICATION } from './ui-index'

export const ADD = 'add'
export const REMOVE = 'remove'
export const REPLACE = 'replace'

const initialState = {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
    changed: false,
}

const cartReducer = (state = initialState, action) => {
    if (action.type === REPLACE) {
        return {
            ...state,
            totalQuantity: action.payload.totalQuantity,
            totalAmount: action.payload.totalAmount,
            items: action.payload.items,
        }
    }

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
                changed: true,
            })
        }
        return {
            ...state,
            items: updatedItems,
            totalQuantity: state.totalQuantity + 1,
            totalAmount: state.totalAmount + newItem.price,
            changed: true,
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
                totalAmount: state.totalAmount - existingItem.price,
                changed: true,
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
                totalAmount: state.totalAmount - existingItem.price,
                changed: true,
            }
        }
    }

    return state
}

export default cartReducer
