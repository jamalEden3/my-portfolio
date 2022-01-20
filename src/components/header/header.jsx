import React from 'react';
import './header.style.scss';

import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { DiYii } from "react-icons/di";

function Header() {
    return (
        <header className="header">
            <div className="header__content">
                <h2 className="header__logo"><DiYii className="logo-icon" /></h2>
                <nav className="nav">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <a href="#" className="nav-link">Page One</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Page 2</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Page 3</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Page 4</a>
                        </li>
                    </ul>
                    <button className="nav-btn btn">CTA Page</button>
                </nav>
                <div className="menu-toggle">
                    <BiMenuAltRight />
                </div>
            </div>
        </header>
    )
}

export default Header
