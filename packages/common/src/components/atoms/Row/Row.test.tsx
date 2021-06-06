import { render } from '@testing-library/react'
import { Row } from './Row'

describe('Row', () => {
  test('it renders successfully', () => {
    const { getByTestId } = render(<Row />)
    const rowElement = getByTestId(/testRow/i)
    expect(rowElement).toBeInTheDocument()
  })
})
