'use client'

import React from "react";
import { signup } from "./actions/auth";
import { useActionState } from 'react'
import Link from "next/link";

export default function Home() {
  const [state, action, pending] = useActionState(signup, undefined)
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <main className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-4 text-[#174e4f]"> Sign Up</h1>

        {/* SIGNUP FORM */}
        <form action={action} className='space-y-4'>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input id="name" name="name" placeholder="Enter Name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#174e4f] focus:border-[#174e4f] sm:text-sm" />
          </div>
          {state?.errors?.name && <p className="text-red-500 text-sm">{state.errors.name}</p>}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input id="email" name="email" type="email" placeholder="Enter Email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#174e4f] focus:border-[#174e4f] sm:text-sm" />
          </div>
          {state?.errors?.email && <p className="text-red-500 text-sm">{state.errors.email}</p>}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input id="password" name="password" type="password" placeholder="Enter Password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#174e4f] focus:border-[#174e4f] sm:text-sm" />
          </div>

          {/* DISPLAY ERRORS IN PASSWORD */}
          {state?.errors?.password && (
            <div>
              <p>Password must:</p>
              <ul>
                {state.errors.password.map((error) => (
                  <li key={error}>- {error}</li>
                ))}
              </ul>
            </div>
          )}

          <button disabled={pending} type="submit" className="w-full bg-[#174e4f] text-white py-2 px-4 rounded-md hover:bg-[#123d3e] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#174e4f]">
            {pending ? 'Submitting...' : 'Sign Up'}
          </button>
          <p className="text-xs text-gray-500 mt-3" >Already a user? <Link href={'/logIn'} className="text-indigo-500 cursor-pointer"> Log In</Link> </p>
        </form>

      </main>

    </div>
  );
}
