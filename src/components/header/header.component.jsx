import React,{useState,useEffect} from 'react';
import './header.styles.scss';
import HeaderItem from '../header-item/header-item.component';
import NavbarToggleButton from '../buttons/navbar-toggle-btn.component';
import {Transition,animated} from 'react-spring/renderprops';

const Header = () => {
    const [isNavbarToggle,setIsNavbarToggle] = useState(false);
    const [isWindowScrolled,setIsWindowScrolled] = useState(false);
    
    useEffect(()=>{
        window.addEventListener('scroll',(e)=>{
            const scrollTop = window.scrollY;
            console.log(scrollTop);
            (scrollTop>40) ? setIsWindowScrolled(true) : setIsWindowScrolled(false);
        })
    })
    
    const handleClick = (e) => {
        setIsNavbarToggle(!isNavbarToggle);
    }
        return(
            <div className={`header-container ${isWindowScrolled ? "solid-bg" : "transparent-bg"}`}>
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
                    from={{height:'0px',opacity:0}}
                    enter={{height:'400px',opacity:1}}
                    leave={{height:'0px',opacity:0}}
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