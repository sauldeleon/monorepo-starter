import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { axiosMiddleware } from './middleware/api'

import counterReducer from './reducers/counter'
import usersReducer from './reducers/users'

export const store = configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(axiosMiddleware),
  reducer: {
    counter: counterReducer,
    users: usersReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
