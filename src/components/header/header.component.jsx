import React from 'react';
import './header.styles.scss';
import HeaderItem from '../header-item/header-item.component';

const Header = () => (
    <div className="header-container">
        <div className="logo-container">
            <ul className="logo-list">
                <HeaderItem title="WG"/>
            </ul>
        </div>
        <div className="lists-container">
            <ul className="items-list">
                <HeaderItem title="Home"/>
                <HeaderItem title="Services"/>
                <HeaderItem title="About"/>
                <HeaderItem title="Work"/>
                <HeaderItem title="Team"/>
                <HeaderItem title="Testimonials"/>
                <HeaderItem title="Pricing"/>
                <HeaderItem title="Stats"/>
                <HeaderItem title="Clients"/>
                <HeaderItem title="Contact"/>
            </ul>
        </div>
    </div>
);

export default Header;