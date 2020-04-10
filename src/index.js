import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import * as serviceWorker from './serviceWorker'

import { Provider } from 'react-redux'
import { store } from './Redux/store/store'

import {Router} from 'react-router-dom'
import {createBrowserHistory} from 'history'

const history = createBrowserHistory()

console.log(store.getState())

ReactDOM.render((
        <Provider store={store}>
            <Router history={history}>
                <App />
            </Router>
        </Provider>), 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();