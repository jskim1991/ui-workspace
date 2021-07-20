import { useRef, useState } from 'react'
import SampleTimer from './timer/SampleTimer'

const SelfAuth = () => {
    const [agree, setAgree] = useState(false)
    const [authenticate, setAuthenticate] = useState(false)
    const birthdateRef = useRef()
    const selfIdRef = useRef()
    const textRef = useRef()

    const [showText, setShowText] = useState(false)
    const [content, setContent] = useState(null)

    const birthdateHandler = () => {
        console.log(birthdateRef.current.value)
        if (birthdateRef.current.value.trim().length === 6) {
            selfIdRef.current.focus()
        }
    }

    const selfIdHandler = () => {
        console.log(selfIdRef.current.value)
    }

    const agreeHandler = () => {
        setAgree((prevState) => !prevState)
    }

    const authenticateHandler = () => {
        setAuthenticate(true)
    }

    const checkTextHandler = () => {
        console.log(textRef.current.value)
    }

    const agreementOneHandler = () => {
        setShowText(true)
        setContent('Agreement 1 goes on like ...')
    }

    const agreementTwoHandler = () => {
        setShowText(true)
        setContent('Agreement 2 goes on like ...')
    }

    const agreementThreeHandler = () => {
        setShowText(true)
        setContent('Agreement 3 goes on like ...')
    }

    const agreementFourHandler = () => {
        setShowText(true)
        setContent('Agreement 4 goes on like ...')
    }

    const closeAgreementHandler = () => {
        setShowText(false)
    }

    return (
        <div>
            {showText && (
                <div>
                    <p>{content}</p>
                    <button onClick={closeAgreementHandler}>close</button>
                </div>
            )}
            <label htmlFor="auth_birthdate">생년월일</label>
            <input
                id="auth_birthdate"
                type="text"
                maxLength="6"
                ref={birthdateRef}
                onChange={birthdateHandler}
            />
            <input
                type="text"
                maxLength="1"
                ref={selfIdRef}
                onChange={selfIdHandler}
            />
            <div>
                <input
                    type="checkbox"
                    checked={agree}
                    onChange={agreeHandler}
                />
                <div>I agree to all</div>
                <input type="checkbox" checked={agree} disabled={true} />
                <div onClick={agreementOneHandler}>Agreement 1</div>
                <input type="checkbox" checked={agree} disabled={true} />
                <div onClick={agreementTwoHandler}>Agreement 2</div>
                <input type="checkbox" checked={agree} disabled={true} />
                <div onClick={agreementThreeHandler}>Agreement 3</div>
                <input type="checkbox" checked={agree} disabled={true} />
                <div onClick={agreementFourHandler}>Agreement 4</div>
            </div>
            {!authenticate && (
                <button onClick={authenticateHandler}>Authenticate</button>
            )}
            {authenticate && (
                <div>
                    <input type="text" ref={textRef} />
                    <button onClick={checkTextHandler}>Check Text</button>
                    <SampleTimer />
                </div>
            )}
        </div>
    )
}

export default SelfAuth
