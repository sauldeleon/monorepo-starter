import React from 'react'
import { Provider } from 'react-redux'

import { AppRouter } from './AppRouter'
import { store } from './app/store'

export const App: React.FC = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)
