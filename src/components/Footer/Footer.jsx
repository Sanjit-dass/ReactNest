import React from 'react'

function Footer() {
  return (
    <>
    <div className='flex flex-col md:flex-row  text-white gap-7 mx-auto px-10 py-10 inset-x-10 justify-evenly bg-gradient-to-r from-rose-900 via-gray-700 to-pink-700 flex-start'>
    <div> 
     <img className='h-20 rounded-full  ' src="logo.png" alt="" />
     
    </div>

    <div>
      <h1 className='text-xl  mb-3 font-semibold'>RESOURCES</h1>
      <p className='text-lg mb-1'>Home </p>
      <p className='text-lg mb-1'>About</p>
    </div>

    <div>
      <h1 className='text-xl mb-3 font-semibold'>FOLLOW US</h1>
      <p className='text-lg mb-1' >Github</p>
      <p className='text-lg mb-1'>Discord</p>
    </div>

    <div>
      <h1 className='text-xl mb-3 font-semibold'>LEGAL</h1>
      <p className='text-lg mb-1'>Privacy Policy</p>
      <p className='text-lg mb-1'>Terms & Conditions</p>
    </div>
    </div>
    
    </>
  )
}

export default Footer