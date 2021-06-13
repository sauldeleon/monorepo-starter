import { render, screen } from '@testing-library/react'
import { Users } from './Users'

test('renders learn react link', () => {
  render(<Users />)
  const linkElement = screen.getByText(/Users/i)
  expect(linkElement).toBeInTheDocument()
})
