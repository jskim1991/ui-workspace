import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Welcome from './user/Welcome'

import SelfAuthentication from './user/SelfAuthentication'
import LoginPage from './user/LoginPage'
import OAuth2RedirectHandler from './user/OAuth2RedirectHandler'

const App = () => {
    return (
        <BrowserRouter>
            <Route exact path="/">
                <LoginPage />
            </Route>
            <Route path="/welcome">
                <Welcome />
            </Route>
            <Route path="/signup">
                <SelfAuthentication />
            </Route>
            <Route path="/login">
                <LoginPage />
            </Route>
            <Route
                path="/oauth/callback/kakao"
                component={OAuth2RedirectHandler}
            ></Route>
        </BrowserRouter>
    )
}

export default App
