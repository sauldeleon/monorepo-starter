import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { apiAction } from '../../actions/api'
import { AppThunk, RootState, ThunkApiAppConfig } from '../../store'

export interface UsersState {
  list: User[]
  status: ApiCallStatus
}

const initialState: UsersState = {
  list: [],
  status: 'IDLE',
}

// With App Typed properties
export const fetchUsersAppThunk = createAsyncThunk<unknown, void, ThunkApiAppConfig>(
  'users/fetchUsersApp',
  async (arg, thunkApi) => {
    const { dispatch } = thunkApi
    dispatch(loadingUsers())
    dispatch(
      apiAction({
        url: '/users',
        onSuccess: setUsers,
        onFailure: errorUsers,
        label: 'FETCH_USERS',
      }),
    )
  },
)

// With Default Typed properties
export const fetchUsersDefaultThunk = createAsyncThunk('users/fetchUsersDefault', async (arg, thunkApi) => {
  const { dispatch } = thunkApi
  dispatch(
    apiAction({
      url: '/users',
      onSuccess: setUsers,
      onFailure: errorUsers,
      label: 'FETCH_USERS',
    }),
  )
})

// Without using createAsyncThunk helper function
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
      state.list = []
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUsersDefaultThunk.pending, state => {
        state.status = 'LOADING'
      })
      .addCase(fetchUsersDefaultThunk.fulfilled, state => {
        state.status = 'IDLE'
      })
  },
})

export const { loadingUsers, setUsers, errorUsers } = usersSlice.actions

export const selectUsers = (state: RootState) => state.users.list

export default usersSlice.reducer
