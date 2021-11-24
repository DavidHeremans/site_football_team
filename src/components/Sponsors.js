import React from 'react'
import debrug from '../images/debrug.png'
import vanhemelryck from '../images/vanhemelryck.png'
import jartazi from '../images/jartazi.png'
import leuven from '../images/leuven.png'

function Sponsors() {
    return (
        <div className="sponsors mt-4">
            <div className="container">
           
                <div className="row">
                <h2 className="home-title">Sponsors</h2>
                    <div className="col-3">
                <img src={debrug} alt="De brug" />
                </div>
                <div className="col-3">
                <img src={vanhemelryck} alt="Vanhemelryck" />
                </div>
                <div className="col-3">
                <img src={jartazi} alt="jartazi" />
                </div>
                <div className="col-3">
                <img src={leuven} alt="Leuven" />
                </div>
                </div>
            </div>
            
        </div>
    )
}

export default Sponsors
