import classes from './CartButton.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { TOGGLE } from '../../store/ui-index'

const CartButton = (props) => {
    const dispatch = useDispatch()
    const cartQuantity = useSelector((state) => state.cartReducer.totalQuantity)

    const toggleCartHandler = () => {
        dispatch({
            type: TOGGLE,
        })
    }

    return (
        <button className={classes.button} onClick={toggleCartHandler}>
            <span>My Cart</span>
            <span className={classes.badge}>{cartQuantity}</span>
        </button>
    )
}

export default CartButton
