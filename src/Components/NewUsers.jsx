import React, { useContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
 import { ToastContainer, toast } from 'react-toastify';
import { usersContext } from '../Context/Users';

const NewUsers = ({addNewUser}) => {
    const [newUsers, setNewUsers]=useState({name:'', email:'', username:'', phone:'', website:''});
    const {users ,setUsers, toast}=useContext(usersContext);
    const {name,email,username,phone,website}=newUsers;

    const  handleChange=(e)=>{

      const {name,value}=e.target ;

      setNewUsers({...newUsers,[name]:value})



    }

    const handleSubmit=(e)=>{
      e.preventDefault();

      if(!name || !email || !username|| !phone || !website){
        toast.warning('please fill the input fild')
        return 

        
      }
      const newUsers={
        id:uuidv4(),
        name,
        email,
        username,
        phone,
        website
      }

      setUsers([...users, newUsers])
      setNewUsers({name:'', email:'',username:'',phone:'',website:''})
      toast.success('Add New Users Success fully')
    }
  return (
    <div>
        <h1>NewUsers</h1>
        <ToastContainer />
        <form onSubmit={handleSubmit} action="">
            <input onChange={handleChange} value={name}  type="text" name="name" placeholder='Name' id="name" />
            <input onChange={handleChange} value={email}  type="email" name="email" placeholder='Enter Your Email' id="email" />
            <input onChange={handleChange} value={username}  type="text" name="username" placeholder='User Name' id="userName" />
            <input onChange={handleChange}  value={phone} type="number" name="phone" placeholder='Number' id="phone" />
            <input onChange={handleChange}  value={website} type="text" name="website" placeholder='website' id="websit" />
            <input type="submit" value="Add Users" />
        </form>
    </div>
  )
}

export default NewUsers