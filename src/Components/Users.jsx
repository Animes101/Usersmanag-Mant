import User from './User'


import './users.css'
import { useUserContext } from '../Hooks/useContextHooks'


const Users = () => {
  const {users}=useUserContext()
  return (
    <div className='users-container'>
        <div className='users-area'>
          {users.map((user)=> <User key={user.id} user={user} />)}
        </div>
    </div>
  )
}

export default Users;