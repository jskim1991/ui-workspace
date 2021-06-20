export const TOGGLE = 'toggle'
export const SHOW_NOTIFICATION = 'show-notification'

const initialState = {
    cartIsVisible: false,
    notification: null,
}

const uiReducer = (state = initialState, action) => {
    if (action.type === TOGGLE) {
        return {
            cartIsVisible: !state.cartIsVisible,
        }
    }
    if (action.type === SHOW_NOTIFICATION) {
        state.notification = {
            status: action.payload.status,
            title: action.payload.title,
            message: action.payload.message,
        }
    }

    return state
}

export default uiReducer
