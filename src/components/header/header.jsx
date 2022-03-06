import React from 'react';
import './header.style.scss';

import Navigation from '../navigation/navigation';
import { Link } from 'react-router-dom';
import { DiYii } from "react-icons/di";

function Header() {
    
    return (
        <header className="header">
            <div className="container flex" style={{justifyContent: 'space-between', alignItems: 'center'}}>
                <div className="header__logo ff-serif fs-400">
                    <Link to="/" className="header__logo__link">
                        Jamal
                        <DiYii className="header__logo__icon" />
                    </Link>
                </div>
                <Navigation/>
            </div>
        </header>
    )
}

export default Header
