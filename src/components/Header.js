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
            <div className="nav-list">
                <div className="list-item"><Link to="/">Home</Link></div>
                <div className="dropdown list-item">
                <div className="dropdown-toggle " id="dropClub" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Club
                </div>
                    <div className="dropdown-menu" aria-labelledby="dropClub">
                        <Link className="dropdown-item" to="/club">Algemene Info</Link>
                        <Link className="dropdown-item" to="/missie">Missie en Visie</Link>
                        <Link className="dropdown-item" to="/club">Historiek</Link>
                    </div>
                    
                </div>
               
               
                <div className="dropdown list-item">
                    <div class="dropdown-toggle" id="dropTeam" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Teams
                    </div>
                    <div className="dropdown-menu" aria-labelledby="dropTeam">
                        <Link className="dropdown-item" to="/teams">A-Kern</Link>
                        <Link className="dropdown-item" to="/teams">Beloften</Link>
                        <Link className="dropdown-item" to="/teams">Dames</Link>
                        <Link className="dropdown-item" to="/teams">Veteranen</Link>
                    </div>
                </div>
                <div className="list-item"><Link to="/jeugd">Jeugd</Link></div>
                <div className="list-item"><Link to="/tickets">Tickets</Link></div>
                <div className="list-item"><Link to="/contact">Contact</Link></div>
            </div>
            </nav>
            </div>
        </div>
    )
}

export default Header
