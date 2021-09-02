import React from 'react';
import { Link }from 'react-router-dom';

function Home({}) {
    return (
        <ul>
            <li>
            <button className='btn'><Link to='/home'>
            Home</Link></button>            
            </li>
            <li>
            <button className='btn'><Link to='/signup'>
            Create New Account</Link></button>
            </li>
        
            <li>
            <button className='btn'><Link to='/login'>
            Login</Link></button>            
            </li>
            <li>
            <button className='btn'><Link to='/about'>
            About</Link></button>            
            </li>
            
            <li>
            <button className='btn'><Link to='/logout'>
            Logout</Link></button>            
            </li>
            <li>
            <button className='btn'><Link to='/search'>
            Search</Link></button>            
            </li>
    </ul>
    );
}

export default Home;