import React from 'react'
import NewsHome from './NewsHome'

function Home() {
    return (
        <div>
        <div className="home row">
            <div className="col-6">
            <h1>Welkom bij Olympia Wijgmaal</h1>
            <p>Voetbal op een ander niveau</p>

            <input className="primary" type="button" value="Speler worden"/>
            <input className="secondary" type="button" value="Contact" />
            </div>
            <div className="col-6">

            </div>
        </div>
        </div>
    )
}

export default Home
