import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { apiAction } from '../../middleware/api/actions'
import { AppThunk, RootState } from '../../store'

export interface UsersState {
  list: User[]
  status: ApiCallStatus
}

const initialState: UsersState = {
  list: [],
  status: 'IDLE',
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    loadingUsers: state => {
      state.status = 'LOADING'
    },
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.status = 'IDLE'
      state.list = action.payload
    },
    errorUsers: state => {
      state.status = 'FAILED'
    },
  },
})

export const { loadingUsers, setUsers, errorUsers } = usersSlice.actions

export const selectUsers = (state: RootState) => state.users.list

export const fetchUsers = (): AppThunk => dispatch => {
  dispatch(loadingUsers())
  dispatch(
    apiAction({
      url: '/users',
      onSuccess: setUsers,
      onFailure: errorUsers,
      label: 'FETCH_USERS',
    }),
  )
}

export default usersSlice.reducer
