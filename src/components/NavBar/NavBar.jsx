import React from 'react';
import { Link } from 'react-router-dom';
import { BsInfoLg } from "react-icons/bs";
import logo from '../../img/logo-movie.png';


export default function Navbar() {
    return (
        <header>
            <nav className='text-white bg-red-500 border-b-4 border-red-700 p-5 mb-10'>
                <div className='flex inline justify-between space-x-5'>
                    <Link exact to="/" >
                        <div className='flex inline'>
                            <img src={logo} alt='movies logo' className='w-11 mr-4' />
                            <button className='text-4xl font-black text-gray-700'>MOVIES</button>
                        </div>
                    </Link>
                    <ul>
                        <li className='space-x-5'>
                            <Link exact to="/" >
                                <button className='border-2 font-extrabold text-xl text-gray-700 border-gray-700 p-1 px-2 rounded-3xl'>Home</button>
                            </Link>
                            <Link to="/favorites" >
                                <button className='border-2 font-extrabold text-xl text-gray-700 border-gray-700 p-1 px-2 rounded-3xl'>Favorites</button>
                            </Link>
                            <Link to='/about'>
                                <button className='border-2 font-extrabold text-xl text-gray-700 border-gray-700 p-1 px-2 rounded-3xl'>
                                    <div className='flex inline h-6'>
                                        <BsInfoLg/>
                                    </div>
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
};