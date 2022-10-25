
import React from 'react';
import './Header.css'

import logo from '../../assets/logo2.png';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <div>
            <main>
                <nav className='navBar'>
                    <Link className='navBar-link' to="/jerseys">
                        <h1>JERSEYS</h1>
                    </Link>
                    <Link to="/">
                        <img className='imgLogo' src={logo}></img>
                    </Link>
                    <Link className='navBar-link' to="/flw-collection">
                        <h1>FLW COLLECTION</h1>
                    </Link>

                </nav>
            </main>
    </div>
    )
}

export default Header