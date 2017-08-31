import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
// import App from './containers/App'
import Counter from './containers/Counter'
import reducer from './reducers'

let store = createStore(reducer)

render(
    <Provider store={store}>
        <Counter />
    </Provider>,
    document.getElementById('root')
)
