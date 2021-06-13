import { reduxRender, waitFor } from '../../utils/test'
import { rest } from 'msw'

import { server } from '../../mocks/server'
import { Users } from './Users'

describe('Users page', () => {
  test('renders Users title', () => {
    const { getByText } = reduxRender(<Users />)
    const titleElement = getByText(/Users/i)
    expect(titleElement).toBeInTheDocument()
  })

  test('renders Users list if API response is OK', async () => {
    const { getAllByTestId } = reduxRender(<Users />)
    await waitFor(() => getAllByTestId('userNameDiv'))
    const userNameElements = getAllByTestId('userNameDiv')
    expect(userNameElements).toHaveLength(2)
  })

  test('renders No users if API is KO', async () => {
    server.use(
      rest.get('/users', (req, res, ctx) => {
        return res(ctx.status(500))
      }),
    )
    const { queryAllByTestId, getByText } = reduxRender(<Users />)
    await waitFor(() => getByText('Users'))
    await waitFor(() => getByText('Users'))
    const userNameElements = queryAllByTestId('userNameDiv')
    expect(userNameElements).toHaveLength(0)
  })
})
