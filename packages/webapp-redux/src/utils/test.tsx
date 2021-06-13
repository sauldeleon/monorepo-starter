// test-utils.js
import React from 'react'
import { render, RenderResult } from '@testing-library/react'
import { Provider } from 'react-redux'
// Import your own store
import { store } from '../app/store'

const reduxRender = (children: React.ReactElement): RenderResult =>
  render(<Provider store={store}>{children}</Provider>)

// re-export everything
export * from '@testing-library/react'
export { reduxRender }
