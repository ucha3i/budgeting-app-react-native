import React from "react"
import PageNavigator from "./navigation/PageNavigator"
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'

const store = createStore(rootReducer)
const App = () => {
  return (
    <Provider store={store}>
    <PageNavigator />
    </Provider>
  )
}

export default App


// import { render } from 'react-dom'

