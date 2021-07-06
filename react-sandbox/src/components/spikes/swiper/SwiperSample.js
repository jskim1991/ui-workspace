import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import classes from './SwiperSample.module.css'

const SwiperSample = () => {
    const initialState = [
        {
            value: 1,
            isSwipedLeft: false,
        },
        {
            value: 2,
            isSwipedLeft: false,
        },
        {
            value: 3,
            isSwipedLeft: false,
        },
    ]

    const [list, setList] = useState(initialState)

    function updateSwipeState(index) {
        console.log('update others')
        const updatedList = list.map((d, idx) => {
            return idx === index
                ? {
                      value: d.value,
                      isSwipedLeft: true,
                  }
                : {
                      value: d.value,
                      isSwipedLeft: false,
                  }
        })
        console.log(updatedList)
        setList(updatedList)
    }

    function buttonClickHandler(e) {
        e.preventDefault()
        console.log('button clicked')
    }

    console.log('render', list)

    return (
        <div>
            {list.map((item, index) => (
                <Swiper
                    slidesPerView="auto"
                    initialSlide={item.isSwipedLeft ? 1 : 0}
                    onSlideChange={() => console.log('slide change')}
                    onSlideMove={() => console.log('slide move')}
                    onReachEnd={() => updateSwipeState(index)}
                    onReachBeginning={() => console.log('reach begin')}
                >
                    <SwiperSlide className={classes.content}>
                        {`item number ${index}`}
                    </SwiperSlide>
                    <SwiperSlide className={classes.menu}>
                        <button onClick={buttonClickHandler}>Edit</button>
                        <button onClick={buttonClickHandler}>Delete</button>
                    </SwiperSlide>
                </Swiper>
            ))}
        </div>
    )
}

export default SwiperSample
