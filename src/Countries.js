import React from 'react'
import { Router, Link } from "@reach/router"
import CountryDetails from './CountryDetails'
import './Countries.css'

const Countries = ({ countryList }) => {
    return (
        <div className="countries">
            <ul className="countries__list">
                {countryList.map(({ id, name }) => 
                    <li key={id}>
                        {name}
                    </li>
                )}
            </ul>
            <Router>
                <CountryDetails countryList={countryList} />
            </Router>
        </div>
    )
}

export default Countries;