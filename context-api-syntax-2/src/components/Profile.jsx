import React from 'react'
import { useUser } from '../contexts/User'

const Profile = () => {

  const {user} = useUser()

  if (!user) {
    return <div>Please Login!</div>
  }

  return <div>Welcome {user.userName} your password: {user.password}</div>

}

export default Profile