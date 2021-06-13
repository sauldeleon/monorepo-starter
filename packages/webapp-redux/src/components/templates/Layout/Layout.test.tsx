import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Layout } from './Layout'

const Test = () => <div>test</div>

const initialEntries = ['/']

describe('Layout', () => {
  it('should render content', () => {
    const { getByText } = render(
      <MemoryRouter {...{ initialEntries }}>
        <Layout>
          <Test />
        </Layout>
      </MemoryRouter>,
    )
    expect(getByText(/test/)).toBeDefined()
  })
})
