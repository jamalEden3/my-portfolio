import React, { useState } from 'react';
import './header.style.scss';

import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { DiYii } from "react-icons/di";

function Header() {
    const [openMenu, setOpenMenu] = useState(true);
    return (
        <header className="header">
            <div className="header__content">
                <h2 className="header__logo">
                    Jamal
                    <DiYii className="header__logo-icon" /></h2>
                <nav className={`header__nav ${openMenu ? 'header__isMenu': ''}`}>
                    <ul className="header__nav-list">
                        <li className="header__nav-item">
                            <a href="#" className="header__nav-link">About</a>
                        </li>
                        <li className="header__nav-item">
                            <a href="#" className="header__nav-link">Service</a>
                        </li>
                        <li className="header__nav-item">
                            <a href="#" className="header__nav-link">Portfolio</a>
                        </li>
                        <li className="header__nav-item">
                            <a href="#" className="header__nav-link">Testimonial</a>
                        </li>
                    </ul>
                    <button className="header__nav-btn btn">CTA Page</button>
                </nav>
                <div className="header__nav-toggle">
                    <BiMenuAltRight />
                </div>
            </div>
        </header>
    )
}

export default Header
