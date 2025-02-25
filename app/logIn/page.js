'use client'

import React from 'react'
import { login } from '@/app/actions/auth'
import { useActionState } from 'react'

const page = () => {
    const [state, action, pending] = useActionState(login, undefined)
    return (
        <>
            <h1>Login</h1>

            <form action={action}>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input id="email" name="email" type="email" placeholder="Enter Email" />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input id="password" name="password" type="password" placeholder='Enter Password' />
                </div>
                <button disabled={pending} type='submit' >
                    {pending ? 'Logging In...' : 'Log In'}
                </button>
            </form>
        </>
    )
}

export default page

