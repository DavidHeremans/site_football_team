import React from 'react';
import { Link } from 'react-router-dom';
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
                <li><Link to="/">Home</Link></li>
                <li className="dropdown">
                <a className="dropdown-toggle" id="dropClub" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Club
                </a>
                    <div className="dropdown-menu" aria-labelledby="dropClub">
                        <Link className="dropdown-item" to="/teams">Algemene Info</Link>
                        <Link className="dropdown-item" to="/teams">Missie en Visie</Link>
                        <Link className="dropdown-item" to="/teams">Historiek</Link>
                    </div>
                    
                </li>
               
               
                <li className="dropdown">
                    <a class="dropdown-toggle" id="dropTeam" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Teams
                    </a>
                    <div className="dropdown-menu" aria-labelledby="dropTeam">
                        <Link className="dropdown-item" to="/club">Eerste ploeg</Link>
                        <Link className="dropdown-item" to="/club">Beloften</Link>
                        <Link className="dropdown-item" to="/club">Dames</Link>
                    </div>
                </li>
                <li><Link to="/jeugd">Jeugd</Link></li>
                <li><Link to="/tickets">Tickets</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            </nav>
            </div>
        </div>
    )
}

export default Header
