import { useEffect, useRef, useState } from 'react'

const SampleTimer = () => {
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(11)
    const time = useRef(minutes * 60 + seconds)
    const timerId = useRef(null)

    useEffect(() => {
        timerId.current = setInterval(() => {
            setMinutes(parseInt(time.current / 60))
            setSeconds(time.current % 60)
            time.current -= 1
        }, 1000)

        return () => clearInterval(timerId.current)
    }, [])

    useEffect(() => {
        if (time.current < 0) {
            alert('Time out')
            clearInterval(timerId.current)
        }
    }, [seconds])

    return (
        <div>
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </div>
    )
}

export default SampleTimer
