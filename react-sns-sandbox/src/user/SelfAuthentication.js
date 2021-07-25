import { useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const SelfAuthentication = () => {
    const [agree, setAgree] = useState(false)
    const [authenticate, setAuthenticate] = useState(false)
    const nameRef = useRef()
    const textRef = useRef()

    const history = useHistory()

    const nameChangeHandler = () => {}

    const agreeHandler = () => {
        setAgree((prevState) => !prevState)
    }

    const authenticateHandler = async () => {
        sendSms()
            .then((response) => {
                console.log(response.data)
                setAuthenticate(true)
            })
            .catch((error) => console.log(error))
    }

    const sendSms = async () => {
        // return await axios.post(`/api/auth/sms`, nameRef.current.value)
        const userId = localStorage.getItem('userId')
        return await axios.post(`/api/auth/sms`, {
            userId: userId,
        })
    }

    const checkTextHandler = () => {
        console.log(textRef.current.value)
        sendVerificationCode(textRef.current.value)
            .then((response) => {
                localStorage.setItem('token', response.data)
                localStorage.removeItem('userId')
                history.replace('/welcome')
            })
            .catch((error) => {
                console.log('error', error)
            })
    }

    const sendVerificationCode = async (code) => {
        const userId = localStorage.getItem('userId')
        return await axios.post(`/api/auth/verify`, {
            userId: userId,
            verificationCode: code,
        })
    }

    return (
        <div>
            <label htmlFor="auth_name">Name</label>
            <input
                id="auth_name"
                type="text"
                ref={nameRef}
                onChange={nameChangeHandler}
            />
            <div>
                <input
                    type="checkbox"
                    checked={agree}
                    onChange={agreeHandler}
                />
                <div>I agree to all</div>
            </div>
            {!authenticate && (
                <button onClick={authenticateHandler}>Authenticate</button>
            )}
            {authenticate && (
                <div>
                    <input type="number" ref={textRef} />
                    <button onClick={checkTextHandler}>Check Text</button>
                </div>
            )}
        </div>
    )
}

export default SelfAuthentication
