import classes from './ProfileForm.module.css'
import { useContext, useRef } from 'react'
import AuthContext from '../../store/auth-context'
import { useHistory } from 'react-router-dom'

const ProfileForm = () => {
    const authContext = useContext(AuthContext)
    const history = useHistory()
    const newPasswordInputRef = useRef()

    const submitHandler = (event) => {
        event.preventDefault()

        const enteredNewPassword = newPasswordInputRef.current.value

        fetch(
            'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDgbfIbT0_dZzHC0DVL3k5HmmZQRKk8fHU',
            {
                method: 'POST',
                body: JSON.stringify({
                    idToken: authContext.token,
                    password: enteredNewPassword,
                    returnSecureToken: false,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            },
        ).then((res) => {
            // input has min length 7 - so it should always succeed
            console.log(res.json())
            history.replace('/')
        })

        // redirect after login can be done by Redirect with routers
        // to protect routes
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor="new-password">New Password</label>
                <input
                    type="password"
                    id="new-password"
                    minLength="7"
                    ref={newPasswordInputRef}
                />
            </div>
            <div className={classes.action}>
                <button>Change Password</button>
            </div>
        </form>
    )
}

export default ProfileForm
