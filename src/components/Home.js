import React from 'react'
import {useNavigate} from 'react-router-dom'

function Home() {
    let navigate = useNavigate();

    return (
        <div>
        <div className="home row">
            <div className="col-lg-8 col-sm-10">
            <h1>Welkom bij Olympia Wijgmaal</h1>
            <p>Voetbal op een ander niveau</p>

            <input className="primary" type="button" value="Speler worden"/>
            <input className="secondary contact" type="button" value="Contact" onClick={() => {
                navigate("/contact");
          }} />
            </div>
            <div className="col-4">

            </div>
        </div>
        </div>
    )
}

export default Home
