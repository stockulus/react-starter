'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

import App from './components/app.jsx'
import reducers from './reducers'

let store = createStore(reducers)

ReactDOM.render(<App store={store}/>, document.getElementById('content'))
