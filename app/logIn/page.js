'use client'

import React from 'react'
import { login } from '@/app/actions/auth'
import { useActionState } from 'react'
import Link from 'next/link'

const page = () => {
    const [state, action, pending] = useActionState(login, undefined)
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
            <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
                <h1 className="text-3xl font-bold text-center mb-4 text-[#174e4f]">Log In</h1>

                <form action={action} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Enter Email"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#174e4f] focus:border-[#174e4f] sm:text-sm"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Enter Password"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#174e4f] focus:border-[#174e4f] sm:text-sm"
                        />
                    </div>
                    <button
                        disabled={pending}
                        type="submit"
                        className="w-full bg-[#174e4f] text-white py-2 px-4 rounded-md hover:bg-[#123d3e] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#174e4f]"
                    >
                        {pending ? 'Logging In...' : 'Log In'}
                    </button>
                    <p className="text-xs text-gray-500 mt-3" >Not a user? <Link href={'/'} className="text-indigo-500 cursor-pointer"> Sign Up</Link> </p>
                </form>
            </div>
        </div>
    )
}

export default page

