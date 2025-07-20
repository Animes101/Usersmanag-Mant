import React, { useContext } from 'react'
import User from './User'
import { usersContext } from '../Context/Users'


const Users = () => {
  const {users}=useContext(usersContext)
  return (
    <div>
        <h1>Users</h1>
        <div>
          {users.map((user)=> <User key={user.id} user={user} />)}
        </div>
    </div>
  )
}

export default Users