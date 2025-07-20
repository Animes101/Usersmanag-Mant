import React from 'react'
import User from './User'

const Users = ({users,removeUser}) => {
  return (
    <div>
        <h1>Users</h1>
        <div>
          {users.map((user)=> <User key={user.id} user={user} removeUser={removeUser} />)}
        </div>
    </div>
  )
}

export default Users