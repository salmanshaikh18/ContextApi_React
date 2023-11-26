import React from 'react'

const Login = () => {

    const handleSubmitBtn = (e) => {
        e.preventDefault()
    }

  return (
    <div>
        <h2>Login</h2>
        <input 
        type="text" 
        placeholder='UserName'
        />
        <input 
        type="text" 
        placeholder='UserPassword'
        />
        <button onClick={handleSubmitBtn}>Submit</button>
    </div>
  )
}

export default Login