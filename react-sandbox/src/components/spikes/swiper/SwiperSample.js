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
        // const updatedList = list.map((d, idx) => {
        //     return idx === index
        //         ? {
        //               value: d.value,
        //               isSwipedLeft: true,
        //           }
        //         : {
        //               value: d.value,
        //               isSwipedLeft: false,
        //           }
        // })

        list.map((d, idx) => {
            if (idx === index) {
            } else {
                const swiper = document.querySelectorAll('.swiper-container')[
                    idx
                ].swiper
                swiper.slidePrev(0.1, false)
            }
        })

        // setList(updatedList)
    }

    // function restoreSwipeState(index) {
    //     const updatedList = [...list]
    //     updatedList[index] = {
    //         value: updatedList[index].value,
    //         isSwipedLeft: false,
    //     }
    //     setList(updatedList)
    // }

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
