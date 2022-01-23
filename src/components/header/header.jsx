import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';
import './header.style.scss';

import { Link } from 'react-router-dom'

import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { DiYii } from "react-icons/di";

function Header(props) {
    const [openMenu, setOpenMenu] = useState(false);
    const [size, setSize] = useState({
        width: undefined,
        height: undefined
    });

    useEffect(() => {
        const handleResize = ()=> {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, 
    []);

    useEffect(() => {
        if (size.width > 768 && openMenu) {
            setOpenMenu(false);
        }
    },[size.width, openMenu]);

    const menuToggle = () => {
        setOpenMenu((prev) => !prev)
    };

    /* const ctaClickHandler = () => {
        history.push('/home')
    } */
    return (
        <header className="header">
            <div className="header__content">
                <Link to="/" className="header__logo">
                    Jamal
                    <DiYii className="header__logo-icon" />
                </Link>
                <nav className={`header__nav ${openMenu && size.width < 768 ? 'header__isMenu': ''}`}>
                    <ul className="header__nav-list">
                        <li className="header__nav-item">
                            <Link to="/" className="header__nav-link" onClick={menuToggle}>About</Link>
                        </li>
                        <li className="header__nav-item">
                            <Link to="/home" className="header__nav-link" onClick={menuToggle}>Service</Link>
                        </li>
                        <li className="header__nav-item">
                            <Link to="/" className="header__nav-link" onClick={menuToggle}>Portfolio</Link>
                        </li>
                        <li className="header__nav-item">
                            <Link to="/" className="header__nav-link" onClick={menuToggle}>Testimonial</Link>
                        </li>
                    </ul>
                    <button className="header__nav-btn btn">CTA Page</button>
                </nav>
                <div className="header__nav-toggle">
                    {!openMenu ? 
                        <BiMenuAltRight onClick={menuToggle}/> 
                        : 
                        <AiOutlineClose onClick={menuToggle}/>}
                    
                </div>
            </div>
        </header>
    )
}

export default Header
