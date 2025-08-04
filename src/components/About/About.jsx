import React from 'react'

function About() {
  return (
    <>
    <div className='flex  justify-evenly  bg-gradient-to-r from-indigo-800 via-pink-700 to-blue-800  max-w-full h-screen'>
      <div>
        <img src="image2.png" alt="" />
      </div>
      <div className=' w-1/2 mt-32 '>
      <h1 className='text-4xl text-slate-800 font-bold mb-6  text-slate-950'>React developer is carried out by passionated developers</h1>
      <p className='text-xl font-semibold text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Modi accusantium quo natus iure aut, sapiente rerum.  <br />
        Recusandae voluptate molestias explicabo quidem doloribus rerum vitae 
        facere eligendi sint blanditiis quis enim repellendus distinctio eum, magni
         nesciunt autem consequatur inventore nisi deleniti!
      </p>
      </div>
    </div>
    </>
  )
}

export default About