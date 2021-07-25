import React, { useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const OAuth2RedirectHandler = (props) => {
    const history = useHistory()

    const code = new URL(window.location.href).searchParams.get('code')

    useEffect(() => {
        async function callBackend() {
            return await axios.get(
                `/api/oauth2/callback/kakao?code=${code}`,
                // '/api/hello',
            )
        }

        callBackend().then((response) => {
            console.log(response)
            const { data } = response
            if (data.requireSignup) {
                console.log(data.userId)
                localStorage.setItem('userId', data.userId)
                history.push('/signup')
            } else {
                localStorage.setItem('token', data.token)
                console.log(
                    'access token is here',
                    localStorage.getItem('token'),
                )
                history.push('/welcome')
            }
        })
    }, [])

    return <div>loading</div>
}

export default OAuth2RedirectHandler
