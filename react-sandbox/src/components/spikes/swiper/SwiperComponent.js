import { Swiper, SwiperSlide } from 'swiper/react'
import { useRef, useState } from 'react'

const SwiperComponent = (props) => {
    const [isSwiping, setSwiping] = useState(false)

    function touchStartHandler(e) {}

    function touchMoveHandler(e) {
        console.log('touch move')
        setSwiping(true)
    }

    function touchEndHandler(e) {
        console.log('touch end')
        const touchStart = e.touches.startX
        const touchEnd = e.touches.currentX

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
        <Swiper
            // onTouchStart={touchStartHandler}
            onTouchMove={touchMoveHandler}
            onTouchEnd={touchEndHandler}
        >
            <SwiperSlide>{props.children}</SwiperSlide>
        </Swiper>
    )
}

export default SwiperComponent
