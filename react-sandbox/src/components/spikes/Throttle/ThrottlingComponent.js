import React, { useCallback, useState } from 'react'

export const throttle = (callback, limit) => {
    let waiting = false
    return function (...args) {
        console.log(waiting)
        if (!waiting) {
            callback.apply(this, args)
            waiting = true
            setTimeout(() => {
                waiting = false
                callback.apply(this, args) // without this, it won't run after input was complete
            }, limit)
        }
    }
}

const ThrottlingComponent = () => {
    const [repos, setRepos] = useState([])
    const debounceOnChange = useCallback(throttle(onChange, 1000), [])

    function onChange(event) {
        const obj = {
            id: new Date(),
            searchText: event.target.value,
        }
        setRepos((prev) => [...prev, obj])
    }

    return (
        <div>
            <h1>Throttling Component</h1>
            <input
                placeholder="Search..."
                onChange={(e) => debounceOnChange(e)}
            />
            {repos.length > 0
                ? repos.map((repo) => (
                      <div key={repo.id}>{repo.searchText}</div>
                  ))
                : null}
        </div>
    )
}

export default ThrottlingComponent
