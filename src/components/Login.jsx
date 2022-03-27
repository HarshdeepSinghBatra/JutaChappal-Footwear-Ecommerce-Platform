import React, { useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const Login = ({ setAuthError, setAuthSuccess }) => {

    const [ searchParams ] = useSearchParams()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const loginUser = async (userData) => {
        try {
            const res = await axios.post("/api/login", {
                email: userData.email,
                password: userData.password
            })

            let data = res.data
            console.log(data)
            if (data.status) {
                setAuthError(null)
                setAuthSuccess(data.message)
                localStorage.setItem("userName", data.userData.name)
                window.location.href=searchParams.get('continue')
            } else {
                setAuthSuccess(null)
                setAuthError(data.message)
            }
        } catch (err) {
            console.log(err.message)
        }
    }

    return (
        <section className='login'>
            <form onSubmit={handleSubmit(loginUser)}>
                <h1>LOGIN</h1>
                <fieldset>
                    <input
                        type='text'
                        placeholder='Email'
                        {...register('email', {
                            required: true,
                            pattern: /^[a-zA-Z0-9.]+@[a-zA-Z.]+.[a-zA-z]{2,3}$/,
                        })}
                    />
                    {errors.email &&
                        (errors.email.type === 'required' ? (
                            <p className='form-error'>Email is required</p>
                        ) : errors.email.type === 'pattern' ? (
                            <p className='form-error'>
                                Please enter a valid Email
                            </p>
                        ) : null)}
                </fieldset>
                <fieldset>
                    <input
                        type='password'
                        placeholder='Password'
                        {...register('password', { required: true })}
                    />
                    {errors.password &&
                        (errors.password.type === 'required' ? (
                            <p className='form-error'>Password is required</p>
                        ) : null)}
                </fieldset>
                <Link to='/'>Forgot your password?</Link>
                <button className='btn-submit' type='submit'>
                    LOGIN
                </button>
            </form>
        </section>
    )
}

export default Login
