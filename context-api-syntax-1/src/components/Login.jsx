import React, {useState} from 'react'
import { useContext } from 'react'
import UserContext from '../contexts/UserContext'

const Login = () => {

    const [userName, setUserName] = useState('')
    const [userPassword, setUserPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmitBtn = (e) => {
        e.preventDefault()
        setUser({userName, userPassword})
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
        type="text" 
        placeholder='UserPassword'
        value={userPassword}
        onChange={(e) => setUserPassword(e.target.value)}
        />
        <button onClick={handleSubmitBtn}>Submit</button>
    </div>
  )
}

export default Login