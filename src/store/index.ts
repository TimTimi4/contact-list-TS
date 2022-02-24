import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'

import  {rootReducer}  from './reducers'

// get initialState from localStorage
const persistedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem("reduxState")||"")
  : {}

const store = createStore(
  rootReducer,
  persistedState,
  applyMiddleware(thunk),
)

// subscribe to store changes and set changes to localStorage
store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

export default store
