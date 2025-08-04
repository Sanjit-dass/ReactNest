import React from 'react'

function Contact() {
  return (
    <section className='flex justify-evenly items-start  bg-gradient-to-r from-indigo-800 via-pink-700 to-blue-800 w-full h-screen  mx-auto '>
  
      <div className=' px-10 py-10 rounded-lg shadow-2xl mt-12  text-white shadow-lime-200 '>
        <h1 className='text-4xl text-black font-bold mb-1'>Get in touch:</h1>
        <p className='mb-7 text-xl'>Fill in the form to start a conversation.</p>
        <p className='mb-3 text-xl'>Bhardha, Saptari, Nepal</p>
        <p className='mb-3 text-xl'>+977-9807058858 / +91-6303783301</p>
        <p className='mb-3 text-xl'>sanjit9842@gmail.com</p>
      </div>

      
      <div className='w-80 px-10 py-12 rounded-lg shadow-2xl flex flex-col gap-5 items-center shadow-white  mt-12'>
        <img src="logo.png" alt="Logo" className='w-16 rounded-full' />
        <input className='w-full px-4 py-3 border border-black rounded-md shadow-lg focus:outline-none ' type="text" id='name' name='name' placeholder='Full Name' required  />
        <input className='w-full px-4 py-3 border border-black rounded-md shadow-lg focus:outline-none ' type="email" id='email' name='email' placeholder='Email' required />
        <input className='w-full px-4 py-3 border border-black rounded-md shadow-lg focus:outline-none ' type="tel" id='tel' name='tel' placeholder='Telephone Number' required />
        <button type="button" className='w-full px-4 py-3  bg-rose-500 hover:bg-rose-600 active:bg-rose-700 focus:outline-none focus:ring focus:ring-violet-300 text-white rounded-lg'>Submit</button>
      </div>
    </section>
  )
}

export default Contact
