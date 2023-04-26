import './header.create.css';
import React from 'react';

function Header() {
    return (
        <div>
            <nav className='navbar'>
            <div className='text'>
                <a href="#">Simple Header</a>
            </div>
            <div className='right navbar'>
                <ul>
                    <li>Home</li>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>FAQs</li>
                    <li>About</li>
                </ul>
            </div>
            </nav>
        </div>
    )
}

export default Header;