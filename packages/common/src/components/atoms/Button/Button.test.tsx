import { render } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
  test('it renders successfully', () => {
    const { getByTestId } = render(<Button text="hola" />)
    const buttonElement = getByTestId(/testButton/i)
    expect(buttonElement).toBeInTheDocument()
  })

  test('it renders text property', () => {
    const { getByText } = render(<Button text="hola" />)
    const buttonElement = getByText(/hola/i)
    expect(buttonElement).toBeInTheDocument()
  })
})
