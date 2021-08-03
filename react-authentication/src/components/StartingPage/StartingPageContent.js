import classes from './StartingPageContent.module.css'
import { useContext, useEffect, useState } from 'react'
import AuthContext from '../../store/auth-context'
import { useHistory } from 'react-router-dom'

const StartingPageContent = () => {
    const authContext = useContext(AuthContext)

    useEffect(() => {
        console.log('hi')

        return function cleanup() {
            console.log('bye')
        }
    }, [])

    return (
        <section className={classes.starting}>
            <h1>Welcome on Board!</h1>
        </section>
    )
}

export default StartingPageContent
