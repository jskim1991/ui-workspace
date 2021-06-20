import { combineReducers } from 'redux'
import counterReducer from './index'
import uiReducer from './uiIndex'
import cartReducer from './cartIndex'

export default combineReducers({
    counterReducer,
    uiReducer,
    cartReducer,
})
