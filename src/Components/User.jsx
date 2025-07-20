import React, { useContext } from 'react'
import { usersContext } from '../Context/Users';

const User = ({user}) => {
    const {name,email,username,id,phone,website}=user;
    const {users,setUsers,toast}=useContext(usersContext)

    const handleDelit=(id)=>{

        const RemoveUser=users.filter((item)=> item.id !== id);


            setUsers(RemoveUser);
            toast.error('Delet Succes fully')

    }
  return (
    <div>
        <h1>{name}</h1>
        <h3>{email}</h3>
        <h3>{username}</h3>
        <p>{id}</p>
        <h2>{phone}</h2>
        <h2>{website}</h2>
        <button onClick={()=>handleDelit(id)}>Delet</button>
    </div>
  )
}

export default User