import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { isMobile, useOutsideClick } from '../../utils';
import './Header.css';

export const Header = () => {
    const [open, setOpen] =useState(false)
    const toggleNav = () => setOpen(!open)
    const wrapperRef = useRef(null)

    useOutsideClick(wrapperRef, toggleNav)

    return isMobile
        ? <>
            <div className="blank-bar">
                <img alt="logo" className="logo" src="http://www.gnalley.com/wp-content/uploads/2014/08/LogoTaglineBlue.png" />
            </div>
            <div className={open ? "hamburger-open" : "hamburger-menu"}>
                {!open && <img alt="menu" src="https://img.icons8.com/material-outlined/24/000000/menu--v1.png" onClick={toggleNav}/>}
                {open && <div className="links-menu" ref={wrapperRef}>
                    <Link to="/" className="nav-link" onClick={toggleNav}><h1>Home</h1></Link>
                    <Link to="/firm" className="nav-link" onClick={toggleNav}><h1>Firm</h1></Link>
                    <Link to="/team" className="nav-link" onClick={toggleNav}><h1>Team</h1></Link>
                    <Link to="/contact" className="nav-link" onClick={toggleNav}><h1>Contact</h1></Link>
                </div>}
            </div>
        </>
        : <div className="nav-menu">
            <img alt="logo" className="logo" src="http://www.gnalley.com/wp-content/uploads/2014/08/LogoTaglineBlue.png" />
            <nav className="nav-link-container">
                <Link to="/" className="nav-link"><h1>Home</h1></Link>
                <Link to="/firm" className="nav-link"><h1>Firm</h1></Link>
                <Link to="/team" className="nav-link"><h1>Team</h1></Link>
                <Link to="/contact" className="nav-link"><h1>Contact</h1></Link>
            </nav>
        </div>
}