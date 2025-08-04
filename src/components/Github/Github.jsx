import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {
    // const[data, setData]=useState([]);
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/sanjit-dass')
    //     .then(response=>response.json())
    //     .then(data=>{
    //         setData(data);

    //     })
    // },[])
    const data=useLoaderData();
  return (
    <div className='flex items-center justify-center  bg-gradient-to-r from-rose-800 via-pink-700 to-blue-800 w-full h-screen'>
    <div className=' text-white p-4 m-4 text-center  w-1/2 h-auto rounded-lg shadow-white shadow-2xl'>
          <img className='h-28 mx-auto rounded-full text-center mt-3' src={data.avatar_url} alt="" />
        <h1 className='text-3xl items-center mt-3'>Name:{data.name}</h1>
        <p className='text-xl'>Public Response:{data.public_repos}</p> 
        <p className='text-xl'>Followers:{data.followers}</p>
        <p className='text-xl'>Bio:{data.bio}</p>
     <a href={data.html_url} target='_blank' className='text-lg text-blue-500 font-bold hover:text-blue-700 hover:underline'>Github Profile</a> 
   
    </div>
    </div>
    
  )
}

export default Github
export const  githubinfo= async()=>{
  const response=await fetch('https://api.github.com/users/sanjit-dass')
  return response.json();
}