import { render } from '@testing-library/react'
import { Column } from './Column'

describe('Row', () => {
  test('it renders successfully', () => {
    const { getByTestId } = render(<Column />)
    const columnElement = getByTestId(/testColumn/i)
    expect(columnElement).toBeInTheDocument()
  })
})
