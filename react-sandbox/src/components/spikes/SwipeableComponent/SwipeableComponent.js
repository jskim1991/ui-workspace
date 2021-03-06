import { useRef, useState } from 'react'

import classes from './SwipeableComponent.module.css'

const SwipeableComponent = (props) => {
    const [touchStart, setTouchStart] = useState(0)
    const [touchEnd, setTouchEnd] = useState(0)
    const [isSwiping, setSwiping] = useState(false)

    function touchStartHandler(e) {
        console.log('touch start')
        setTouchStart(e.targetTouches[0].clientX)
    }

    function touchMoveHandler(e) {
        console.log('touch move')
        setSwiping(true)
        setTouchEnd(e.targetTouches[0].clientX)
    }

    function touchEndHandler() {
        console.log('touch end')
        if (isSwiping) {
            if (touchStart - touchEnd > 100) {
                props.onUpdateSwipeState(props.index)
            } else if (touchStart - touchEnd < -100) {
                if (props.isSwipedLeft) {
                    props.onResetSwipeState(props.index)
                }
            }
            setSwiping(false)
        }
    }

    return (
        <div
            onTouchStart={touchStartHandler}
            onTouchMove={touchMoveHandler}
            onTouchEnd={touchEndHandler}
        >
            {props.children}
        </div>
    )
}

export default SwipeableComponent
