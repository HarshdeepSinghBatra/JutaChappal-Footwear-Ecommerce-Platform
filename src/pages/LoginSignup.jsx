import React, { useEffect, useState } from 'react'
import Login from '../components/Login'
import Signup from '../components/Signup'
import { MdError } from 'react-icons/md'
import { BsCheckCircleFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

const LoginSignup = () => {

    const navigate = useNavigate()

    useEffect(() => {
        if (localStorage.getItem("userName")) {
            navigate("/")
        }
    }, [])

    const [authError, setAuthError] = useState(null)
    const [authSuccess, setAuthSuccess] = useState(null)

    return (
        <main className={`login-signup-main ${(authError && 'authMessage') || (authSuccess && 'authMessage')}`}>
            {authError && (
                <p className='authenticate-error'>
                <MdError className='error-icon' />
                {authError}
            </p>
            )}
            {authSuccess && (
                <p className='authenticate-success'>
                <BsCheckCircleFill className='success-icon' />
                {authSuccess}
            </p>
            )} 
            <div className='login-signup-container'>
                <Login setAuthError={val => setAuthError(val)} setAuthSuccess={val => setAuthSuccess(val)} />
                <Signup setAuthError={val => setAuthError(val)} setAuthSuccess={val => setAuthSuccess(val)} />
            </div>
        </main>
    )
}

export default LoginSignup
