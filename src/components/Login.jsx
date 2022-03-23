import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const Login = ({ setAuthError, setAuthSuccess }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = data => {
        console.log(data)
        setAuthSuccess("Successfuly logged in")
        setAuthError(null)
    }

    return (
        <section className='login'>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                    SIGN IN
                </button>
            </form>
        </section>
    )
}

export default Login
