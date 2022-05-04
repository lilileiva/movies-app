import React from 'react';
import { Link } from 'react-router-dom';


export default function Navbar() {
    return (
        <header>
            <nav className='p-5 bg-slate-500'>
                <div className='inline-flex space-x-5'>
                <Link exact to="/" >
                    <button className=''>MOVIES</button>
                </Link>
                <ul>
                    <li className='space-x-5'>
                        <Link exact to="/" >
                            <button onClick={() => window.location.reload()} className='border-2 border-zinc-300'>Home</button>
                        </Link>
                        <Link to="/favorites" >
                            <button className='border-2 border-zinc-300'>Favorites</button>
                        </Link>
                        <button className='border-2 border-zinc-300'>About</button>
                    </li>
                </ul>
                </div>
            </nav>
        </header>
    )
};