import React from 'react'
import { Link, useParams } from 'react-router-dom'

function ComponentsPage() {
    const {component} = useParams()
  return (
    <div className='p-4'>
        <button className='bg-blue-600 shadow cursor-pointer text-white'>
            <Link to={"/"} className='px-4 py-2 block w-full h-full'>Go Back</Link>
        </button>
        <h1 className='font-bold capitalize text-3xl'>Explore {component}.</h1>
    </div>
  )
}

export default ComponentsPage