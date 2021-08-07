import { render, screen, waitFor, within } from '@testing-library/react'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../../store/store'
import userEvent from '@testing-library/user-event'
import ReduxCartPage from '../../ReduxCartPage'
import configureStore from 'redux-mock-store'

global.fetch = jest.fn()

describe('ReduxCartPage tests', () => {
    describe('Using store stub', () => {
        it('renders items added in shopping cart', () => {
            renderWithStore({
                items: [
                    {
                        id: 1,
                        price: 10,
                        quantity: 5,
                        totalPrice: 50,
                        name: 'Noise Cancelling HeadPhones',
                    },
                ],
                totalAmount: 50,
                totalQuantity: 5,
            })

            userEvent.click(screen.getByText('My Cart'))

            expect(screen.getByText('Your Shopping Cart')).toBeInTheDocument()
            expect(screen.getByText('Noise Cancelling HeadPhones')).toBeInTheDocument()
            expect(screen.getByText('$50.00')).toBeInTheDocument()
            expect(screen.getByText('($10.00/item)')).toBeInTheDocument()
            expect(within(screen.getByText('x')).getByText('5')).toBeInTheDocument()
        })
    })

    describe('Using react-mock-store', () => {
        it('sends async fetch and dispatches replace on render', async () => {
            const initialCart = {
                totalQuantity: 0,
                totalAmount: 0,
            }

            fetch.mockResolvedValue({
                ok: true,
                json: () => Promise.resolve(initialCart),
            })
            let store
            await waitFor(() => {
                store = renderThenReturnReduxMockStore({}, false)
            })

            expect(store.getActions()).toEqual([
                {
                    type: 'replace',
                    payload: {
                        items: [],
                        totalQuantity: 0,
                        totalAmount: 0,
                    },
                },
            ])
        })

        it('toggles Cart display when My Cart button is clicked (redux-mock-store)', () => {
            const store = renderThenReturnReduxMockStore({}, false)

            userEvent.click(screen.getByText('My Cart'))

            expect(store.getActions()).toEqual([
                {
                    type: 'toggle',
                },
            ])
        })

        it('sends async fetch and dispatches add when + button is clicked', async () => {
            const initialCart = {
                items: [
                    {
                        id: 1,
                        price: 10,
                        quantity: 5,
                        totalPrice: 50,
                        name: 'Noise Cancelling HeadPhones',
                    },
                ],
                totalAmount: 50,
                totalQuantity: 5,
            }

            fetch.mockResolvedValue({
                ok: true,
                json: () => Promise.resolve(initialCart),
            })

            let store
            await waitFor(() => {
                store = renderThenReturnReduxMockStore(initialCart, true)
            })

            userEvent.click(screen.getByText('My Cart'))
            userEvent.click(screen.getByText('+'))

            expect(store.getActions()).toEqual([
                {
                    type: 'replace',
                    payload: {
                        items: [
                            {
                                id: 1,
                                price: 10,
                                quantity: 5,
                                totalPrice: 50,
                                name: 'Noise Cancelling HeadPhones',
                            },
                        ],
                        totalQuantity: 5,
                        totalAmount: 50,
                    },
                },
                { type: 'toggle' },
                {
                    type: 'add',
                    payload: { id: 1, title: 'Noise Cancelling HeadPhones', price: 10 },
                },
            ])
        })
    })
})

const renderThenReturnReduxMockStore = (initialCart, showCart) => {
    const mockStore = configureStore([thunk])
    const initialState = {
        cartReducer: initialCart,
        uiReducer: {
            cartIsVisible: showCart,
            notification: null,
        },
        counterReducer: {
            counter: 0,
            showCounter: true,
        },
    }
    const store = mockStore(initialState)
    render(
        <Provider store={store}>
            <ReduxCartPage />
        </Provider>,
    )

    return store
}

const renderWithStore = (initialCart) => {
    const initialState = {
        cartReducer: initialCart,
    }

    const store = createStore(rootReducer, initialState, applyMiddleware(thunk))

    render(
        <Provider store={store}>
            <ReduxCartPage />
        </Provider>,
    )
}
