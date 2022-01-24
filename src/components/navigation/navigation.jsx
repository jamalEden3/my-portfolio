import React, { useState, useEffect } from 'react';
import './navigation.style.scss';

import { Link } from 'react-router-dom';

import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';

function Navigation() {
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
    return (
        <>
            <nav className={`nav ${openMenu && size.width < 768 ? 'nav__isMenu': ''}`}>
                <ul className="nav__list">
                    <li className="nav__item">
                        <Link to="/" className="nav__link" onClick={menuToggle}>About</Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/services" className="nav__link" onClick={menuToggle}>Service</Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/portfolio" className="nav__link" onClick={menuToggle}>Portfolio</Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/Testimonials" className="nav__link" onClick={menuToggle}>Testimonial</Link>
                    </li>
                </ul>
            </nav>
            <div className="nav__toggle">
                {!openMenu ? 
                    <BiMenuAltRight onClick={menuToggle}/> 
                    : 
                    <AiOutlineClose onClick={menuToggle}/>}
                
            </div>  
        </>
    )
}

export default Navigation
