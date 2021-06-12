import usersReducer, { UsersState, setUsers, loadingUsers, errorUsers } from './usersSlice'

describe('counter reducer', () => {
  const initialState: UsersState = {
    list: [],
    status: 'IDLE',
  }

  let dateNowSpy: any
  beforeAll(() => {
    dateNowSpy = jest.spyOn(Date, 'now').mockImplementation(() => 1487076708000)
  })

  afterAll(() => {
    dateNowSpy.mockRestore()
  })

  it('should handle initial state', () => {
    expect(usersReducer(undefined, { type: 'unknown' })).toEqual({
      list: [],
      status: 'IDLE',
    })
  })

  it('should handle fetch users loading', () => {
    const actual = usersReducer(initialState, loadingUsers())
    expect(actual.status).toEqual('LOADING')
  })

  it('should handle fetch users correctly', () => {
    const userA: User = { id: '1', name: 'A', email: 'A@b.com', avatar: 'a', createdAt: new Date(1487076708000) }
    const actual = usersReducer(initialState, setUsers([userA]))
    expect(actual.list).toEqual([userA])
    expect(actual.status).toEqual('IDLE')
  })

  it('should handle fetch users error', () => {
    const actual = usersReducer(initialState, errorUsers())
    expect(actual.list).toEqual([])
    expect(actual.status).toEqual('FAILED')
  })
})
