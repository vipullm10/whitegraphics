import React from 'react';
import './header.styles.scss';
import HeaderItem from '../header-item/header-item.component';
import NavbarToggleButton from '../buttons/navbar-toggle-btn.component';

class Header extends React.Component {
    
    constructor(props){

        super(props);
        this.state={
            isNavbarToggle:false
        }
    }

    handleClick = (e) => {
        console.log("Click called")
        if(this.state.isNavbarToggle===false){
            this.setState({isNavbarToggle:true},() => console.log(this.state));
        }else{
            this.setState({isNavbarToggle:false},()=>console.log(this.state))
        }
    }

    render(){
        const showNav = this.state.isNavbarToggle;
        return(
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
                <NavbarToggleButton handleClick={this.handleClick}/>
                {
                    showNav ? (
                        <ul className="nav-toggle-list">
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
                    ) : (null)
                }            
            </div>
        )
    }
}


export default Header;