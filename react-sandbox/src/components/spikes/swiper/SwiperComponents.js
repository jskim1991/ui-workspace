import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperComponent from './SwiperComponent'

const SwiperComponents = () => {
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
        setList(updatedList)
    }

    function restoreSwipeState(index) {
        const updatedList = [...list]
        updatedList[index] = {
            value: updatedList[index].value,
            isSwipedLeft: false,
        }
        setList(updatedList)
    }

    function buttonClickHandler(e) {
        e.preventDefault()
        console.log('button clicked')
    }

    return (
        <div>
            {list.map((item, idx) => (
                <SwiperComponent
                    key={idx}
                    index={idx}
                    onUpdateSwipeState={updateSwipeState}
                    onResetSwipeState={restoreSwipeState}
                    isSwipedLeft={item.isSwipedLeft}
                >
                    <div>{`item number ${idx}`}</div>
                    {item.isSwipedLeft && (
                        <button onClick={buttonClickHandler}>edit</button>
                    )}
                </SwiperComponent>
            ))}
        </div>
    )
}

export default SwiperComponents
