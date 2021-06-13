import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { axiosMiddleware } from './middleware/api'

import counterReducer from './reducers/counter'
import usersReducer from './reducers/users'
import { API_ACTION, API_START, API_ERROR, API_END, API_DENIED } from './actions/api'

export const store = configureStore({
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [API_ACTION, API_START, API_ERROR, API_END, API_DENIED],
      },
    }).concat(axiosMiddleware),
  reducer: {
    counter: counterReducer,
    users: usersReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
export type ThunkApiAppConfig = {
  dispatch: AppDispatch
  state: RootState
}
