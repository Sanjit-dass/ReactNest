import React from 'react'

function Home() {
  return (
    <>
    <div className=' flex justify-evenly items-center p-4 bg-gradient-to-r from-red-700 via-purple-800 via-fuchsia-700 via-rose-500 via-stone-800 to-blue-700  mx-auto  shadow-xl h-screen w-full'>
      <div>
  <img className='h-auto w-auto shadow-2xl  shadow-white' src="home.png" alt="" />
      </div>
      <div className='mt-24'>
         <h1 className=' font-bold text-4xl  text-white'>Dowload Now</h1>
         <h1 className="font-bold text-2xl pl-24 bg-gradient-to-r from-blue-500 via-blue-400 to-white bg-clip-text text-transparent">
          lorem ipsum
</h1>

         <button className='text-xl  font-semibold px-3 py-2 rounded-xl bg-red-700 text-white ml-24 mt-5'> Dowload Now</button>
      </div>
      
    </div>
    
    </>
  )
}

export default Home