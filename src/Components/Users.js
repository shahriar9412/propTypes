import React from 'react'
import User from './User'

const Users = (props) => {
  return (
    <div>
      <User user={props.user} />
    </div>
  )
}

export default Users
