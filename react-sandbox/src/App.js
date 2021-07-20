import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Welcome from './routes/Welcome'
import ProductsSample from './routes/ProductsSample'

import SelfAuth from './components/spikes/SelfAuth'
import HomePage from './HomePage'

const App = () => {
    return (
        <BrowserRouter>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route path="/welcome">
                <Welcome />
            </Route>
            <Route path="/products">
                <ProductsSample />
            </Route>
            <Route path="/signup">
                <SelfAuth />
            </Route>
        </BrowserRouter>
    )
}

export default App
