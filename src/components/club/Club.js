import React from 'react'
import Header from '../Header'
import terrein from '../../images/club_foto_olympia_Wijgmaal.jpg'

function Club() {
    return (
        <div className="container">
            <Header/>
            <div className="row page-header">
            <h2>Algemene Info</h2>
            <div className="col-6">
                <table className="table-info" width="100%">
                    <tbody>
                    <tr>
                        <td>Adres</td>
                        <td> <p>Pastoor Bellonstraat 29</p> 
                             <p> 3018 Wijgmaal - België</p>
                        </td>
                    </tr>
                    <tr>
                        <td>Telefoon</td>
                        <td>016 44 43 16</td>
                    </tr>
                    <tr>
                        <td>KBVB-Stamboeknummer</td>
                        <td>1349</td>
                    </tr>
                    <tr>
                        <td>Bloc</td>
                        <td>2440</td>
                    </tr>
                    <tr>
                        <td>BTW-nummer</td>
                        <td>430.469.469</td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <div className="col-6">
                <img width="90%" src={terrein} alt="Terrein Wijgmaal" />
            </div>
            </div>
            <div className="row page-header">
                <h2>Bestuur</h2>

            </div>
           
        </div>
    )
}

export default Club
