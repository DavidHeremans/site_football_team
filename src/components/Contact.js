import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Contact() {
    return ( <> <div className="container">
        <Header/>
        <div className="row page-header">
            <h2>Contact</h2>
            <div className="col-12 contact">
                <form>
                    <div>
                        <label htmlFor="Name">Naam</label>
                        <input type="text" id="Name" name="Name" required/>
                    </div>
                    <div>
                        <label htmlFor="Email">Email</label>
                        <input type="email" id="Email" name="Email" required/>
                    </div>
                    <div>
                        <label htmlFor="persoon">Wie wil je contacteren?</label>
                        <input type="text" id="persoon" name="persoon" required/>
                    </div>
                    <div>
                        <label htmlFor="Onderwerp">Onderwerp</label>
                        <input type="text" id="Onderwerp" name="Onderwerp" required/>
                    </div>
                    <div>
                        <label htmlFor="Message" className="fcf-label">Bericht</label>
                        <textarea id="Message" name="Message" rows="6" maxLength="3000" required></textarea>
                    </div>
                    <div>
                       <input type="submit" className="primary" value="Verstuur" />
                    </div>
                </form>
            </div>
        </div>

    </div> < Footer /> </>)
}

export default Contact
