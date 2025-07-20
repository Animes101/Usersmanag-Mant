import React from 'react'

const User = ({user,removeUser}) => {
    const {name,email,username,id,phone,website}=user;

    const handleDelit=(id)=>{
        removeUser(id)

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