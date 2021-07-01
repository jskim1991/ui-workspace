import { useState } from 'react'

import classes from './SwipeableComponent.module.css'

const SwipeableComponent = (props) => {
    const [touchStart, setTouchStart] = useState(0)
    const [startTime, setStartTime] = useState(null)

    const [touchEnd, setTouchEnd] = useState(0)
    const [endTime, setEndTime] = useState(null)

    function touchStartHandler(e) {
        setTouchStart(e.targetTouches[0].clientX)
        setStartTime(new Date().getTime())
    }

    function touchMoveHandler(e) {
        setTouchEnd(e.targetTouches[0].clientX)
        setEndTime(new Date().getTime())
    }

    function touchEndHandler() {
        // const touchEnd = e.changedTouches[0].clientX
        // const endTime = new Date().getTime()
        if (endTime - startTime < 1000) {
            if (touchStart - touchEnd > 100) {
                console.log('left swipe detected', props.index)
                props.onUpdateSwipeState(props.index)
            } else if (touchStart - touchEnd < -100) {
                console.log('right swipe detected', props.index)
                props.onResetSwipeState(props.index)
            }
        }
    }

    return (
        <div
            className={classes.SwipeableComponent}
            onTouchStart={touchStartHandler}
            onTouchMove={touchMoveHandler}
            onTouchEnd={touchEndHandler}
        >
            <div>A swipeable element {props.data}</div>
            {props.isSwipedLeft && (
                <div>
                    <button>Edit</button>
                    <button>Remove</button>
                </div>
            )}
        </div>
    )
}

export default SwipeableComponent
