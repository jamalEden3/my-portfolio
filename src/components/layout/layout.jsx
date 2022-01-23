import React from 'react';
import "./layout.style.scss";

import Header from '../header/header';
function Layout({children}) {
    return (
        <>
            <Header />
            <div className="container">
                {children}
            </div>
        </>
    )
}

export default Layout
