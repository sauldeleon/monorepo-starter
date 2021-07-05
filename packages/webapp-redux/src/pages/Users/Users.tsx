import React, { useEffect } from 'react'

import { useAppSelector, useAppDispatch } from '@redux/hooks'
import { selectUsers, fetchUsers } from '@redux/reducers/users'

export const Users: React.FC = () => {
  const users = useAppSelector(selectUsers)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  return (
    <div>
      <h1>Users</h1>
      <div>
        {users.map((user, key) => (
          <div key={key} data-testid="userNameDiv">
            {user.name}
          </div>
        ))}
      </div>
    </div>
  )
}
