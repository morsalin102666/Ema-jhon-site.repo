import React from 'react';
import '../Header/Header.css';
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <nav className='navbar'>
            <img src={logo} alt="logho" />
            <div className='nav-item'>
                <a href="#">Order</a>
                <a href="#">Order Review</a>
                <a href="#">Manage Inventory</a>
                <a href="#">Login</a>
            </div>
        </nav>
    );
};

export default Header;