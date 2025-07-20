import { useRef, useState } from 'react'
  import { ToastContainer, toast } from 'react-toastify';
  import { usersContext } from './Context/Users';

import './App.css'
import Users from './Components/Users'
import NewUsers from './Components/NewUsers'

const usersDami=[
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

function App() {

  const [users, setUsers]=useState(usersDami)

  const fildSerchFef=useRef();

   const handleSearch=()=>{

    const searchText=fildSerchFef.current.value;

    const filtered = usersDami.filter(user =>
      user.name.toLowerCase().includes(searchText)
    );
    setUsers(filtered);
   }

  return (
    <usersContext.Provider value={{users, setUsers,toast}}>
      <ToastContainer />
      <input onChange={handleSearch} ref={fildSerchFef}  type="text" name="" placeholder='Search' id="" />
      <NewUsers />

     <Users />
    </usersContext.Provider>
  )
}

export default App
