import React, { useState } from 'react'
import "./login.css"

import { useDispatch } from "react-redux"
import { login } from '../../redux/authSlice/authSlice'

function Login() {

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        if(name === "emirhan" && password === "emirhan123"){
            dispatch(login())
        }
        
    }

    return (
        <div className='login'>
            <div className="login-container">
                <form onSubmit={handleSubmit}>
                    <div className="input-part">
                        <label>Name : </label>
                        <input
                            type="text"
                            placeholder='Name...'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="input-part">
                        <label>Password : </label>
                        <input
                            type="password"
                            placeholder='Password...'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className='button-con'>
                        <button type='submit'>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login