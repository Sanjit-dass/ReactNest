import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid}=useParams([])
  return (
    <div className='bg-purple-400 text-black p-4 m-4 text-center font-semibold text-3xl rounded-md shadow-2xl '>User:{userid}</div>
  )
}

export default User