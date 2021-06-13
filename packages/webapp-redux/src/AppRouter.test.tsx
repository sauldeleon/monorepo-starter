import { render } from '@testing-library/react'
import { AppRouter } from './AppRouter'

jest.mock('./components', () => ({
  ...jest.requireActual('./components'),
  Layout: ({ children }: any) => <div>{children}</div>,
}))

jest.mock('./pages', () => ({
  ...jest.requireActual('./pages'),
  Home: () => <div>Home</div>,
}))

describe('AppRouter', () => {
  it('renders Home correctly', () => {
    const { getByText } = render(<AppRouter />)
    expect(getByText(/Home/)).toBeDefined()
  })
})
