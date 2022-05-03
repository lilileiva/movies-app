import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
    return (
        <header className="navbar">
            <nav>
                <ul className="list">
                    <li className="list-item">
                        <Link exact to="/" >Home</Link>
                        <Link to="/favorites" >Favoritas</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
};