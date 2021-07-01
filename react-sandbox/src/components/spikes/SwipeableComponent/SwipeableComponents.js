import SwipeableComponent from './SwipeableComponent'
import { useCallback, useState } from 'react'

const SwipeableComponents = () => {
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

    return list.map((item, idx) => (
        <SwipeableComponent
            key={idx}
            index={idx}
            data={item.value}
            onUpdateSwipeState={updateSwipeState}
            onResetSwipeState={restoreSwipeState}
            isSwipedLeft={item.isSwipedLeft}
        />
    ))
}

export default SwipeableComponents
