import React from 'react'
import { Provider } from 'react-redux'
import { render, RenderResult } from '@testing-library/react'
import { createStore } from '../app/store'

const reduxRender = (children: React.ReactElement): RenderResult =>
  render(<Provider store={createStore()}>{children}</Provider>)

// re-export everything
export * from '@testing-library/react'
export { reduxRender }
