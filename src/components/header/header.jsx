import React from 'react';
import './header.style.scss';

import Navigation from '../navigation/navigation';
import { Link } from 'react-router-dom';
import { DiYii } from "react-icons/di";

function Header() {
    
    return (
        <header className="header">
            <div className="header__content">
                <Link to="/" className="header__logo">
                    Jamal
                    <DiYii className="header__logo-icon" />
                </Link>
               <Navigation />
            </div>
        </header>
    )
}

export default Header
