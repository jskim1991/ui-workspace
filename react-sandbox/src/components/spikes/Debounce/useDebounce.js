import { useEffect } from 'react'

const useDebounce = (effect, deps = [], delay) => {
    useEffect(() => {
        const handler = setTimeout(() => effect(), delay)

        return () => clearTimeout(handler)
    }, [...deps])
}

export default useDebounce
