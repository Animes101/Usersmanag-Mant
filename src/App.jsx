import { useState } from 'react'

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


  const addNewUser=(newUser)=>{

    setUsers([...users, newUser])

  }

  const removeUser=(id)=>{

    const RemoveUser=users.filter((item)=> item.id !== id);


    setUsers(RemoveUser);
  }


  return (
    <div>
      <NewUsers addNewUser={addNewUser} />

     <Users removeUser={removeUser} users={users} />
    </div>
  )
}

export default App
