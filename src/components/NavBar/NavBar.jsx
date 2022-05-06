import React from 'react';
import { Link } from 'react-router-dom';
import { BsInfoLg } from "react-icons/bs";


export default function Navbar() {
    return (
        <header>
            <nav className='text-white bg-red-500 border-b-4 border-red-700 p-5 mb-10'>
                <div className='flex inline justify-between space-x-5'>
                    <Link exact to="/" >
                        <button className='text-3xl font-extrabold'>MOVIES</button>
                    </Link>
                    <ul>
                        <li className='space-x-5'>
                            <Link exact to="/" >
                                <button className='border-2 border-zinc-300 p-1 px-2 rounded-3xl'>Home</button>
                            </Link>
                            <Link to="/favorites" >
                                <button className='border-2 border-zinc-300 p-1 px-2 rounded-3xl'>Favorites</button>
                            </Link>
                            <Link to='/about'>
                                <button className='border-2 border-zinc-300 p-1 px-2 rounded-3xl'>
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