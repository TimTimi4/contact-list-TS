import { combineReducers } from 'redux'

import contacts from './contacts'

export const rootReducer = combineReducers({
  contacts,
})

export type RootState = ReturnType<typeof rootReducer>