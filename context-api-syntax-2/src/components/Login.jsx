import React from 'react'
import { useState } from 'react'

const Login = () => {

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmitBtn = (e) => {
    e.preventDefault()
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