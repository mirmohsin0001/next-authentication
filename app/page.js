'use client'

import React from "react";
import { signup } from "./actions/auth";
import { useActionState } from 'react'


export default function Home() {
  const [state, action, pending] = useActionState(signup, undefined)
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold ">UPSC CMS</h1>


        {/* SIGNUP FORM */}
        <form action={action} className='bg-amber-500 p-8 rounded-lg shadow-lg'>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input id="name" name="name" placeholder="Name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm" />
          </div>
          {state?.errors?.name && <p>{state.errors.name}</p>}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input id="email" name="email" type="email" placeholder="Email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm" />
          </div>
          {state?.errors?.email && <p>{state.errors.email}</p>}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input id="password" name="password" type="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm" />
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

          <button disabled={pending} type="submit" className="w-full bg-amber-600 text-white py-2 px-4 rounded-md hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500">
            {pending ? 'Submitting...' : 'Sign Up'}
          </button>
        </form>

      </main>

    </div>
  );
}
