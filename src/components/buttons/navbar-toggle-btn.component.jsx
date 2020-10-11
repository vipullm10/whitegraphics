import React from 'react';
import './navbar-toggle-button.styles.scss';

const NavbarToggleButton = ({handleClick}) => (
    <button className='navbar-toggle-btn' onClick={handleClick}>
        <span className='first-bar'></span>
        <span className='second-bar'></span>
        <span className='third-bar'></span>
    </button>
);

export default NavbarToggleButton;