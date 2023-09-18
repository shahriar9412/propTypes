import React from 'react'
import Users from './Components/Users'

const App = () => {
  const user = {
    id: 10,
    name: 'Shahriar Hossain'
  }
  return (
    <div>
      <Users user={user} />
    </div>
  )
}

export default App
