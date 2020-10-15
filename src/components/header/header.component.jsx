import React,{useState} from 'react';
import './header.styles.scss';
import HeaderItem from '../header-item/header-item.component';
import NavbarToggleButton from '../buttons/navbar-toggle-btn.component';
import {Transition,animated,Spring} from 'react-spring/renderprops';

const Header = () => {
    const [isNavbarToggle,setIsNavbarToggle] = useState(false);
    const handleClick = (e) => {
        setIsNavbarToggle(!isNavbarToggle);
    }
        return(
            <div className="header-container">
                <div className="logo-container">
                    <ul className="logo-list">
                        <HeaderItem title="WG"/>
                    </ul>
                </div>
                <div className="lists-container">
                    <ul  className="items-list">
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
                <NavbarToggleButton handleClick={handleClick}/>
                <Transition
                    native
                    items={isNavbarToggle}
                    from={{height:'0px'}}
                    enter={{height:'400px'}}
                    leave={{height:'0px'}}
                >
                    {show => show && (props=>
                            <animated.div style={props}>
                                <animated.ul style={props} className="nav-toggle-list">
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
                                </animated.ul>
                            </animated.div>
                    )}                 
                </Transition>            
            </div>
        )
    }


export default Header;