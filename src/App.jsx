import { useState } from 'react'
import './App.css'
import { UserCard } from './components/UserCard' 
import { NewOne } from './components/NewOne'

function App() {
  const [count, setCount] = useState(0)

const user1 = {
  name:"doe",
  surname: "john",
  tel : "699665522",
  age : 30,
  actif : false

}
 const user2 = {
  name:"dan",
  surname: "johnny",
  tel : "6556129023",
  age : 30,
  actif : true

}
const user3 = {
  name:"Doma",
  surname: "jay",
  tel : "6777888999",
  age : 34,
  actif : false

}

  return (
    <>
      <UserCard UserData={user1} />  <UserCard UserData={user2}/>  <UserCard UserData={user3}/> 
      <NewOne/>
    </>
  )
}

export default App
