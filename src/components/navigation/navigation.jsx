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
        if (size.width > 768 && !openMenu) {
            setOpenMenu(false);
        }
    },[size.width, openMenu]);
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


    const menuToggle = () => {
        setOpenMenu((prev) => !prev)
    };

    console.log(window.innerWidth)
    return (
        <>
            <nav className={`nav fs-300 flex ${openMenu && size.width < 768 ? 'nav__isMenu': ''}`}>
                <ul className="nav__list flex fs-300" role="list" style={{['--gap']: '2rem'}}>
                    <li>
                        <Link to="/" onClick={menuToggle}>About</Link>
                    </li>
                    <li>
                        <Link to="/services" onClick={menuToggle}>Service</Link>
                    </li>
                    <li>
                        <Link to="/portfolio" onClick={menuToggle}>Portfolio</Link>
                    </li>
                    <li>
                        <Link to="/Testimonials" onClick={menuToggle}>Testimonial</Link>
                    </li>
                </ul>
            </nav>
            <div className="nav__toggle">
                    {
                    !openMenu ? 
                        <BiMenuAltRight onClick={menuToggle}/>
                        : 
                        <AiOutlineClose onClick={menuToggle}/> 
                    }
                    
            </div>
        </>
    )
}

export default Navigation
