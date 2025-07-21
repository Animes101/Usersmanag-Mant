
import './user.css'
import { useUserContext } from '../Hooks/useContextHooks';

import { ToastContainer,toast } from 'react-toastify';
const User = ({user}) => {
    const {name,email,username,id,phone,website}=user;
    const {dispatch}=useUserContext()

    const handleDelit=(id)=>{

            dispatch({ type: 'delete user', payload: id })
            toast.error('Delet Succes fully')

    }
  return (
    <div className='user-area'>
        <h1>{name}</h1>
        <h3>{email}</h3>
        <h3>{username}</h3>
        <p>{id}</p>
        <h2>{phone}</h2>
        <h2>{website}</h2>
        <button onClick={()=>handleDelit(id)}>Delete</button>
    </div>
  )
}

export default User