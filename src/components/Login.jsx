import React, { useEffect, useRef, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs'

const Login = ({ setAuthError, setAuthSuccess }) => {

    const [searchParams] = useSearchParams()
    const [isShowPassword, setisShowPassword] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const passwordRef = useRef()
    const { ref, ...restRegisterPassword } = register('password', { required: true })

    useEffect(() => {
        if (isShowPassword) passwordRef?.current.setAttribute('type', 'text')
        else passwordRef?.current.setAttribute('type', 'password')
    }, [isShowPassword])

    const loginUser = async (userData) => {
        try {
            const res = await axios.post("/api/login", {
                email: userData.email,
                password: userData.password
            })

            const { data } = res
            if (data.status) {
                setAuthError(null)
                setAuthSuccess(data.message)
                localStorage.setItem("userName", data.userData.email)
                window.location.href=searchParams.get('continue')
            } else {
                setAuthSuccess(null)
                setAuthError(data.message)
            }
            window.scrollTo(0, 0)
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
                <div className="password-container">
                    <input
                        type='password'
                        ref={e => {
                            ref(e)
                            passwordRef.current = e
                        }}
                        placeholder='Password'
                        name='password'
                        {...restRegisterPassword}
                    />
                    {isShowPassword ? <BsEyeSlashFill className='password-icon' onClick={() => setisShowPassword(!isShowPassword)} /> : <BsEyeFill className='password-icon' onClick={() => setisShowPassword(!isShowPassword)} />}
                    </div>
                    {errors.password &&
                        (errors.password.type === 'required' ? (
                            <p className='form-error'>Password is required</p>
                        ) : null)}
                </fieldset>
                <Link to='#'>Forgot password?</Link>
                <button className='btn-submit' type='submit'>
                    LOGIN
                </button>
            </form>
        </section>
    )
}

export default Login
