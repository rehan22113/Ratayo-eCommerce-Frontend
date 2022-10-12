import React from 'react'
import { Link } from 'react-router-dom'
const index = () => {
  return (
    <>
        <div className='flex items-center justify-center flex-col bg-gray-300 h-screen'>
        <h1 className='text-4xl text-gray-500 leading-loose'>Welcome ! Sports Shop</h1>
        <h2 className='text-xl text-gray-500'>Manage Your Shop Here</h2>
        <Link to="/help" className='text-xl text-gray-500'>Need Help?</Link>

      </div>
    </>
  )
}

export default index