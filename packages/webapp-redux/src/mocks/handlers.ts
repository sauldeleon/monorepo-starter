import { rest } from 'msw'

import user200 from '../pages/Users/mocks/users.200.json'

export const handlers = [
  rest.get('/users', (req, res, ctx) => {
    return res(ctx.json(user200))
  }),
]
