import React, { useCallback, useState } from 'react'

export const debounce = (func, wait) => {
    let timeout
    return function (...args) {
        const context = this
        if (timeout) {
            clearTimeout(timeout)
        }
        timeout = setTimeout(() => {
            timeout = null
            func.apply(context, args)
        }, wait)
    }
}

const DebouncingComponent = () => {
    const [repos, setRepos] = useState([])
    const debounceOnChange = useCallback(debounce(onChange, 1000), [])

    function onChange(event) {
        const obj = {
            id: Date.now(),
            searchText: event.target.value,
        }
        setRepos((prev) => [...prev, obj])
    }

    return (
        <div>
            <h1>Debouncing Component</h1>
            <input
                placeholder="Search..."
                onChange={(e) => debounceOnChange(e)}
            />
            {repos &&
                repos.map((repo) => <div key={repo.id}>{repo.searchText}</div>)}
        </div>
    )
}

export default DebouncingComponent
