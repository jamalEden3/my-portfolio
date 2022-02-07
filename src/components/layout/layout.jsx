import React from 'react';
import "./layout.style.scss";

import Header from '../header/header';

function Layout({children}) {
    return (
        <div className="layout">
            {children}
        </div>
    )
}

export default Layout
