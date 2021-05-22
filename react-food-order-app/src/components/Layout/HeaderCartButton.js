import CartIcon from '../Cart/CartIcon'

import classes from './HeaderCartButton.module.css'
import { useContext, useEffect, useState } from 'react'
import CartContext from '../../store/cart-context'

const HeaderCartButton = (props) => {
    const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false)
    const cartContext = useContext(CartContext)

    const buttonClasses = `${classes.button} ${
        buttonIsHighlighted ? classes.bump : ''
    }`

    const { items } = cartContext

    useEffect(() => {
        if (items.length === 0) {
            return
        }
        setButtonIsHighlighted(true)

        const timer = setTimeout(() => {
            setButtonIsHighlighted(false)
        }, 300)

        return () => {
            clearTimeout(timer)
        }
    }, [items])

    const numberOfCartItems = items.reduce((result, item) => {
        return result + item.amount
    }, 0)

    return (
        <button className={buttonClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    )
}

export default HeaderCartButton
