import React from 'react'
import { Link } from 'react-router'

const NotesNotFound = () => {
  return (
    <div className='nf flex flex-col items-center mt-10'>
        <h1 className='text-4xl'>No notes created yet</h1>
        <Link to={"/create"} className='redirect'>
        <button className='btn btn-primary text-2xl mt-50'>Create One</button>
        </Link>
    </div>
  )
}

export default NotesNotFound