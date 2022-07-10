import React from 'react';
import { Link } from 'react-router-dom';
import { BsInfoLg } from "react-icons/bs";


function Navbar() {
    return (
        <header>
            <nav className='absolute text-white bg-red-500 border-b-4 border-red-700 p-5 mb-10 z-20 w-full'>
                <div className='flex inline justify-between space-x-5'>
                    <Link exact to="/" >
                        <div className='flex'>
                            <button className='text-4xl font-black text-neutral-800 border-2 border-current pl-2 pr-2'>
                                MOVIES APP
                            </button>
                        </div>
                    </Link>
                    <ul className='justify-items-center'>
                        <li className='sm:space-x-5 xl:space-x-5'>
                            <Link exact to="/" >
                                <button className='sm:inline-flex xl:font-extrabold text-xl text-neutral-800  p-1 px-2 rounded-sm hidden hover:border-b-2 border-neutral-800'>
                                    HOME
                                </button>
                            </Link>
                            <Link to="/favorites" >
                                <button className='font-extrabold text-xl text-neutral-800 p-1 px-2 rounded-sm hover:border-b-2 border-neutral-800 sm:mx-4'>
                                    FAVORITES                                    
                                </button>
                            </Link>
                            <Link to='/about'>
                                <button className='font-extrabold text-xl text-neutral-800 p-1 px-2 rounded-sm hover:border-b-2 border-neutral-800'>
                                    <div className='flex inline h-6'>
                                        <BsInfoLg />
                                    </div>
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header >
    )
};

export default Navbar;