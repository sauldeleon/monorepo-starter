import { render } from '@testing-library/react'
import { Flex } from './Flex'

describe('Flex', () => {
  test('it renders successfully', () => {
    const { getByTestId } = render(<Flex />)
    const flexElement = getByTestId(/testFlex/i)
    expect(flexElement).toBeInTheDocument()
  })
})
