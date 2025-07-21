import { useEffect, useReducer, useRef, useState } from 'react'
  import {toast,ToastContainer} from 'react-toastify';
  import { usersContext } from './Context/Users';

import './App.css'
import Users from './Components/Users'
import NewUsers from './Components/NewUsers'

const initialState=[
  {
    "id": 1,
    "name": "Animes Barman",
    "email": "animes@example.com",
    "username": "animesb",
    "phone": "01711-123456",
    "website": "animes.dev"
  },
  {
    "id": 2,
    "name": "Rahim Uddin",
    "email": "rahim@example.com",
    "username": "rahim123",
    "phone": "01819-654321",
    "website": "rahimtech.com"
  },
  {
    "id": 3,
    "name": "Karim Hossain",
    "email": "karim@example.com",
    "username": "karimh",
    "phone": "01912-987654",
    "website": "karim.codes"
  }
]

const reducer=(users,action)=>{

  switch(action.type){

    case 'add user':
    return [...users, action.payload]


    case 'delete user':
       return users.filter((item)=> item.id !== action.payload);

       case 'search':
        return action.payload

       default: 
       return users;
    

  }

}

function App() {

  const [users, dispatch] = useReducer(reducer, initialState);


  const fildSerchFef=useRef();

   const handleSearch=()=>{

    const searchText=fildSerchFef.current.value;

    const filtered = users.filter(user =>
      user.name.toLowerCase().includes(searchText)
    );

    dispatch({type:'search',payload:filtered})
   }

  return (
    <usersContext.Provider value={{users, dispatch}}>
      <ToastContainer />
      <h1 className='user-header'>User Management App </h1>
      <hr />
      <NewUsers />
      <input className='search' onChange={handleSearch} ref={fildSerchFef}  type="text" name="" placeholder='Search' id="" />
      <Users />
    </usersContext.Provider>
  )
}

export default App;