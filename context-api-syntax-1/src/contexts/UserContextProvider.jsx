import React from 'react'
import { useState } from 'react'
import UserContext from './UserContext'

const UserContextProvider = ({children}) => {

    const [user, setUser] = useState(null)

  return (
    <UserContext.Provider>
        {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider