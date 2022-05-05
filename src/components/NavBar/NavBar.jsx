import React from 'react';
import { Link } from 'react-router-dom';


export default function Navbar() {
    return (
        <header>
            <nav className='flex text-white bg-red-500 border-b-4 border-red-700 p-5 mb-4'>
                <div className='inline-flex space-x-5'>
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
                        <button className='border-2 border-zinc-300 p-1 px-2 rounded-3xl'>About</button>
                    </li>
                </ul>
                </div>
            </nav>
        </header>
    )
};