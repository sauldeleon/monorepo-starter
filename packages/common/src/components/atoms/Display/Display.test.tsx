import { render } from '@testing-library/react'
import { Display } from './Display'

describe('Display component', () => {
  it('renders correctly', () => {
    const { asFragment } = render(
      <Display show>
        <div></div>
      </Display>,
    )
    expect(asFragment().firstChild).toBeTruthy()
  })
  it('returns null if show is false', () => {
    const { asFragment } = render(
      <Display show={false}>
        <div></div>
      </Display>,
    )
    expect(asFragment().firstChild).toBeNull()
  })
})
