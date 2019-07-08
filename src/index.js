import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import Root from './containers/Root'
import reducer from './reducers'

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk, logger)))

ReactDOM.render(<Root store={store} />, document.getElementById('root'))
