import React from 'react';
import logo from '../images/logo.png';


function Header() {
    return (
        <div className="row header">
            <div className="col-3">
                <img src={logo} alt="Logo Wijgmaal" width="30%" />
            </div>
            <div className="col-9">
            <nav className="nav">
            <ul>
                <li>Home</li>
                <li>Club</li>
                <li>Teams</li>
                <li>Jeugd</li>
                <li>Tickets</li>
                <li>Contact</li>
            </ul>
            </nav>
            </div>
        </div>
    )
}

export default Header
