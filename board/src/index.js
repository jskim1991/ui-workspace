import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "mobx-react";
import boardStore from './store/BoardStore';
import userStore from './store/UserStore';
import postStore from './store/PostStore';
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
      <Provider boardStore = { boardStore } userStore = { userStore } postStore = { postStore }>
        <App />
      </Provider>
    </BrowserRouter>,
  document.getElementById('root')
);

