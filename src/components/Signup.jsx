import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs'

const Signup = ({ setAuthError, setAuthSuccess }) => {

    const [isShowPassword, setisShowPassword] = useState(false)

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const password_val = watch("password", false)

    const passwordRef = useRef()

    const { ref, ...restRegisterPassword } = register('password', { required: true, minLength: 6 })

    useEffect(() => {
        if (isShowPassword) passwordRef?.current.setAttribute('type', 'text')
        else passwordRef?.current.setAttribute('type', 'password')
    }, [isShowPassword])

    const registerUser = async (userData) => {
        try {
            const res = await axios.post("/api/signup", {
                name: userData.fname + " " + userData.lname,
                email: userData.email,
                password: userData.password
            })

            const data = res.data
            console.log(data)
            if (data.status) {
                setAuthError(null)
                setAuthSuccess(data.message)
            } else {
                setAuthSuccess(null)
                setAuthError(data.message)
            }
            window.scrollTo(0, 0)
        } catch (err) {
            console.error(err.message)
        }
    }

    return (
        <section className='container'>
            <form onSubmit={handleSubmit(registerUser)}>
                <h1>REGISTER</h1>
                <fieldset>
                    <input
                        type='text'
                        placeholder='First Name'
                        {...register('fname', { required: true })}
                    />
                    {errors.fname &&
                        (errors.fname.type === 'required' ? (
                            <p className='form-error'>First Name is required</p>
                        ) : null)}
                </fieldset>
                <fieldset>
                    <input
                        type='text'
                        placeholder='Last Name'
                        {...register('lname', { required: true })}
                    />
                    {errors.lname &&
                        (errors.lname.type === 'required' ? (
                            <p className='form-error'>Last Name is required</p>
                        ) : null)}
                </fieldset>
                <fieldset>
                    <input
                        type='text'
                        placeholder='Email'
                        {...register('email', {
                            required: true,
                            pattern: /^[a-zA-Z0-9.]+@[a-zA-Z]+.[a-zA-Z]*.[a-zA-z]{2,3}$/
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
                        {...restRegisterPassword}
                    />
                    {isShowPassword ? <BsEyeSlashFill className='password-icon' onClick={() => setisShowPassword(!isShowPassword)} /> : <BsEyeFill className='password-icon' onClick={() => setisShowPassword(!isShowPassword)} />}
                    </div>
                    {errors.password &&
                        (errors.password.type === 'required' ? (
                            <p className='form-error'>Password is required</p>
                        ) : errors.password.type === 'minLength' ? (
                            <p className='form-error'>Password must have at least 6 characters</p>
                        ) : null)}
                </fieldset>
                <fieldset>
                    <input
                        type='password'
                        placeholder='Confirm Password'
                        {...register('cnf_password', { required: true, validate: val => val === password_val })}
                    />
                    {errors.cnf_password &&
                        (errors.cnf_password.type === 'required' ? (
                            <p className='form-error'>Confirm Password is required</p>
                        ) : errors.cnf_password.type === 'validate' ? (
                            <p className='form-error'>Password confirmation do not match</p>
                        ) : null )}
                </fieldset>
                <button className='btn-submit' type='submit'>
                    CREATE AN ACCOUNT
                </button>
            </form>
        </section>
    )
}

export default Signup
