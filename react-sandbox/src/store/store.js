import { applyMiddleware, combineReducers } from 'redux'
import counterReducer from './index'
import uiReducer from './ui-index'
import cartReducer from './cart-index'

export default combineReducers({
    counterReducer,
    uiReducer,
    cartReducer,
})
