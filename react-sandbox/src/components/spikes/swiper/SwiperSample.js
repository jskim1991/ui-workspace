import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import classes from './SwiperSample.module.css'

const SwiperSample = () => {
    const list = [
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

    function updateSwipeState(index) {
        console.log('update others beside', index)
        list.map((d, idx) => {
            if (idx === index) {
            } else {
                const swiper = document.querySelectorAll('.swiper-container')[
                    idx
                ].swiper
                swiper.slidePrev(300, false)
            }
        })
    }

    function buttonClickHandler(e) {
        e.preventDefault()
        console.log('button clicked')
    }

    return (
        <div>
            {list.map((item, index) => (
                <Swiper
                    key={index}
                    slidesPerView="auto"
                    initialSlide={item.isSwipedLeft ? 1 : 0}
                    // onSlideChange={() => console.log('slide change')}
                    // onSlideMove={() => console.log('slide move')}
                    onReachEnd={() => updateSwipeState(index)}
                    // onReachBeginning={() => restoreSwipeState(index)}
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
