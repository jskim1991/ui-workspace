import { useSelector, useDispatch } from 'react-redux'

import classes from './Counter.module.css'
import { DECREMENT, INCREASE, INCREMENT, TOGGLE } from '../../store'

const Counter = () => {
    const dispatch = useDispatch()
    const counter = useSelector((state) => state.counterReducer.counter) // this sets up subscription automatically
    const show = useSelector((state) => state.counterReducer.showCounter)

    const incrementHandler = () => {
        dispatch({
            type: INCREMENT,
        })
    }

    const increaseHandler = () => {
        dispatch({
            type: INCREASE,
            amount: 5,
        })
    }

    const decrementHandler = () => {
        dispatch({
            type: DECREMENT,
        })
    }

    const toggleCounterHandler = () => {
        dispatch({
            type: TOGGLE,
        })
    }

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {show && <div className={classes.value}>{counter}</div>}
            <div>
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={increaseHandler}>Increment by 5</button>
                <button onClick={decrementHandler}>Decrement</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    )
}

export default Counter
