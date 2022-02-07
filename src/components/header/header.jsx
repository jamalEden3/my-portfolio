import React from 'react';
import './header.style.scss';

import Navigation from '../navigation/navigation';
import { Link } from 'react-router-dom';
import { DiYii } from "react-icons/di";

function Header() {
    
    return (
        <header className="header">
            <div className="header__logo">
                <Link to="/" className="header__logo__link">
                    Jamal
                    <DiYii className="header__logo__icon" />
                </Link>
            </div>
            <Navigation />
        </header>
    )
}

export default Header
