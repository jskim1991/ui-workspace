import { Link } from 'react-router-dom'

import classes from './MainNavigation.module.css'
import { useContext } from 'react'
import AuthContext from '../../store/auth-context'

const MainNavigation = () => {
    const authContext = useContext(AuthContext)

    const isLoggedIn = authContext.isLoggedIn

    const logoutHandler = () => {
        authContext.logout()
        // optional: redirect the user?
    }

    return (
        <header className={classes.header}>
            <Link to="/">
                <div className={classes.logo}>React Auth</div>
            </Link>
            <nav>
                <ul>
                    {!isLoggedIn && (
                        <li>
                            <Link to="/auth">Login</Link>
                        </li>
                    )}
                    {isLoggedIn && (
                        <li>
                            <Link to="/profile">Profile</Link>
                        </li>
                    )}
                    {isLoggedIn && (
                        <li>
                            <button onClick={logoutHandler}>Logout</button>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation
