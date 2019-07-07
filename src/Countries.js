import React from 'react'
import { Router, Link } from "@reach/router"
import CountryDetails from './CountryDetails'
import './Countries.css'

const Countries = ({ countryList }) => {
    return (
        <div className="countries">
            <ul className="countries__list">
                {countryList.map(({ id, name }) => 
                    <li key={id}><Link to={`/countries/${id}`}>{name}</Link></li>
                )}
            </ul>
            <Router className="country-details-container">
                <CountryDetails path="/countries/:id" countryList={countryList} />
            </Router>
        </div>
    )
}

export default Countries;