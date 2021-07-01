import { useState } from 'react'

import classes from './SwipeableComponent.module.css'

const SwipeableComponent = () => {
    const [touchStart, setTouchStart] = useState(0)
    const [touchEnd, setTouchEnd] = useState(0)
    const [startTime, setStartTime] = useState(null)
    const [endTime, setEndTime] = useState(null)
    const [isSwipedLeft, setIsSwipedLeft] = useState(false)

    function touchStartHandler(e) {
        document.body.style.overflow = 'hidden'
        setTouchStart(e.targetTouches[0].clientX)
        setStartTime(new Date().getTime())
    }

    function touchMoveHandler(e) {
        document.body.style.overflow = 'hidden'
        setTouchEnd(e.targetTouches[0].clientX)
        setEndTime(new Date().getTime())
    }

    function touchEndHandler() {
        console.log(endTime - startTime, touchStart - touchEnd)
        if (endTime - startTime < 1000) {
            if (touchStart - touchEnd > 100) {
                console.log('left swipe detected')
                setIsSwipedLeft(true)
            } else if (touchStart - touchEnd < -100) {
                console.log('right swipe detected')
                setIsSwipedLeft(false)
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
            <div>A swipeable element</div>
            {isSwipedLeft && (
                <div>
                    <button>Edit</button>
                    <button>Remove</button>
                </div>
            )}
        </div>
    )
}

export default SwipeableComponent
