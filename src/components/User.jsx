import React from 'react'

    function User({userDetails}) {
  return (
    <div>
        <p>{userDetails.id}</p>
        <p>{userDetails.name}</p>
    </div>
  )
}

export default User
