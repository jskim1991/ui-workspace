import cartReducer, { ADD, REMOVE } from '../../store/cart-index'

describe('CartReducer', () => {
    it('should return the initial state', () => {
        expect(cartReducer(undefined, {})).toEqual({
            items: [],
            totalQuantity: 0,
            totalAmount: 0,
            changed: false,
        })
    })

    it('should handle an item being added to an empty cart', () => {
        const newItem = {
            id: 1,
            title: 'Bread',
            price: 5,
        }

        const state = cartReducer(undefined, { type: ADD, payload: newItem })

        expect(state).toEqual({
            items: [
                {
                    id: 1,
                    price: 5,
                    quantity: 1,
                    totalPrice: 5,
                    name: 'Bread',
                },
            ],
            totalQuantity: 1,
            totalAmount: 5,
            changed: true,
        })
    })

    it('should handle an item being added to an existing cart', () => {
        const prevState = {
            items: [
                {
                    id: 1,
                    price: 5,
                    quantity: 1,
                    totalPrice: 5,
                    name: 'Bread',
                },
            ],
            totalQuantity: 1,
            totalAmount: 5,
            changed: true,
        }
        const newItem = {
            id: 1,
            title: 'Bread',
            price: 5,
        }

        const state = cartReducer(prevState, { type: ADD, payload: newItem })

        expect(state).toEqual({
            items: [
                {
                    id: 1,
                    price: 5,
                    quantity: 2,
                    totalPrice: 10,
                    name: 'Bread',
                },
            ],
            totalQuantity: 2,
            totalAmount: 10,
            changed: true,
        })
    })

    it('should handle an item being removed from an existing list that has 1 item', () => {
        const prevState = {
            items: [
                {
                    id: 1,
                    price: 5,
                    quantity: 1,
                    totalPrice: 5,
                    name: 'Bread',
                },
            ],
            totalQuantity: 1,
            totalAmount: 5,
            changed: true,
        }

        const state = cartReducer(prevState, { type: REMOVE, payload: 1 })

        expect(state).toEqual({
            items: [],
            totalQuantity: 0,
            totalAmount: 0,
            changed: true,
        })
    })

    it('should handle an item being removed from an existing list that has many items', () => {
        const prevState = {
            items: [
                {
                    id: 1,
                    price: 5,
                    quantity: 2,
                    totalPrice: 10,
                    name: 'Bread',
                },
            ],
            totalQuantity: 2,
            totalAmount: 10,
            changed: true,
        }

        const state = cartReducer(prevState, { type: REMOVE, payload: 1 })

        expect(state).toEqual({
            items: [
                {
                    id: 1,
                    price: 5,
                    quantity: 1,
                    totalPrice: 5,
                    name: 'Bread',
                },
            ],
            totalQuantity: 1,
            totalAmount: 5,
            changed: true,
        })
    })
})
