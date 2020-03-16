import React from "react"
import PageNavigator from "./navigation/PageNavigator"
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'

const middlewares = [thunk]

const store = createStore(rootReducer, {}, applyMiddleware(...middlewares))

const App = () => {
  return (
    <Provider store={store}>
    <PageNavigator />
    </Provider>
  )
}

export default App

