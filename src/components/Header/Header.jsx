import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
        <header className=' sticky top-0 z-50 '>
            <div className='flex bg-indigo-400 px-6 py-4 text-slate-800 justify-evenly items-center  bg-gradient-to-r from-pink-500  '>
                <div>
                    <Link to='/'>
 <h1 className='text-3xl bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent font-bold'> Sanjit Das</h1>
                    </Link>
                   
                </div>
                <div>
                    <ul className=' flex items-center text-xl gap-4 font-semibold '>
                        <NavLink
                            to="/home"
                            className={({ isActive }) => {
                                return `hover:underline ${isActive ? 'text-red-800' : 'text-gray-950'} hover:text-blue-600`;
                            }}
                        >
                            Home
                        </NavLink>


                        <NavLink to='/about' className={({ isActive }) => {
                                return `hover:underline ${isActive ? 'text-red-800' : 'text-gray-950'} hover:text-blue-600`;
                            }}>
                            About
                        </NavLink>

                        <NavLink to='/contact' className={({ isActive }) => {
                                return `hover:underline ${isActive ? 'text-red-800' : 'text-gray-950'} hover:text-blue-600`;
                            }}>
                            Contact
                        </NavLink>

                        

                        <NavLink to='/github' className={({ isActive }) => {
                                return `hover:underline ${isActive ? 'text-red-800' : 'text-gray-950'} hover:text-blue-600`;
                            }}>
                            Github
                        </NavLink>

                    </ul>
                </div>
                <div>
                    <Link to='login' className="text-xl focus:ring-2  focus:ring-black font-semibold  hover:text-red-900">
                    <h1>Login</h1>
                    </Link>
                
                </div>

                <div>
                   <Link to='/button' className='px-2 py-1 bg-blend-color text-white font-bold rounded-lg shadow-lg border border-x-amber-400'>
                   Get Started

                   </Link>
                    
                </div>

            </div>
            </header>
        </>
    )
}

export default Header