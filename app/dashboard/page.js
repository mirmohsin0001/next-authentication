import React from 'react'
import { logout } from '../actions/auth'


const page = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
        <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
          <h1 className="text-3xl font-bold text-center mb-4 text-[#174e4f]">Dashboard</h1>
          <p className="text-gray-700 text-center">Welcome to the dashboard!</p>
          <button onClick={logout} className="w-full bg-[#174e4f] text-white py-2 px-4 mt-16 rounded-md hover:bg-[#123d3e] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#174e4f]">Log Out</button>
        </div>
      </div>
    </>
  )
}

export default page