import { useState } from 'react'
import './App.css'
import { UserCard } from './components/UserCard' 
import { NewOne } from './components/NewOne'

function App() {
  const [count, setCount] = useState(0)

  const userList = [
    {
      name:"doe",
      surname: "john",
      tel : "699665522",
      age : 30,
      actif : false
    
    },
    {
      name:"dan",
      surname: "johnny",
      tel : "6556129023",
      age : 30,
      actif : true
    
     },
    {
      name:"Doma",
      surname: "jay",
      tel : "6777888999",
      age : 34,
      actif : false
    
    }
  ]
 
  return (
    <>
    {userList.map((user)=>(   <UserCard UserData={user} /> ))}
   
      <NewOne/>
    </>
  )
}

export default App
