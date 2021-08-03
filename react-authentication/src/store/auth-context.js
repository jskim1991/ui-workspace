import React, { useCallback, useEffect, useState } from 'react'

let logoutTimer

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => {},
    logout: () => {},
})

const calculateRemainingTime = (expirationTime) => {
    const currentTimestamp = new Date().getTime()
    const expirationTimestamp = new Date(expirationTime).getTime()

    const remainingTime = expirationTimestamp - currentTimestamp
    return remainingTime
}

const retrieveStoredToken = () => {
    const storedToken = localStorage.getItem('token')
    const storedExpiration = localStorage.getItem('expirationTime')

    const remainingTime = calculateRemainingTime(storedExpiration)
    if (remainingTime <= 60000) {
        localStorage.removeItem('token')
        localStorage.removeItem('expirationTime')
        return null
    }
    return { token: storedToken, duration: remainingTime }
}

export const AuthContextProvider = (props) => {
    // DO NOT use useEffect here for getting token when page loads
    const tokenData = retrieveStoredToken()
    let initialToken
    if (tokenData) {
        initialToken = tokenData
    }

    const [temp, setTemp] = useState('')

    const logoutHandler = useCallback(() => {
        setToken(null)
        localStorage.removeItem('token')
        localStorage.removeItem('expirationTime')

        if (logoutTimer) {
            clearTimeout(logoutTimer)
        }
        // logoutTimer is global var so it does not come into react rendering,
        // so we don't need it as a dependency
    }, [])

    useEffect(() => {
        if (tokenData) {
            console.log(tokenData.duration)
            logoutTimer = setTimeout(logoutHandler, tokenData.duration)
        }
    }, [tokenData, logoutHandler])

    const [token, setToken] = useState(initialToken)

    const userIsLoggedIn = !!token

    const loginHandler = (token, expirationTime) => {
        localStorage.setItem('token', token)
        localStorage.setItem('expirationTime', expirationTime)
        setToken(token)

        const remainingTime = calculateRemainingTime(expirationTime)
        logoutTimer = setTimeout(logoutHandler, remainingTime)
    }

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
    }

    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext
