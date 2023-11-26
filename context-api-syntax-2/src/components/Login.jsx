import React from 'react'
import { useState } from 'react'
import { useUser } from '../contexts/User'

const Login = () => {

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const {setUser} = useUser()

  const handleSubmitBtn = (e) => {
    e.preventDefault()
    setUser({userName, password})
  }

  return (
    <div>
      <h2>Login</h2>
      <input 
      type="text" 
      placeholder='UserName'
      value={userName}
      onChange={(e) => setUserName(e.target.value)}
      />
      <input 
      type="password" 
      placeholder='Password'
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmitBtn}>Submit</button>
    </div>
  )
}

export default Login