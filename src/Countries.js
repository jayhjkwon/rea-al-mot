import React from 'react'
import './Countries.css'

const Countries = ({ countryList }) => {
    return (
        <div className="countries">
            <button>Sort</button>
            <ul>
                {countryList.map(({ id, name }) => 
                    <li key={id}>{name}</li>
                )}
            </ul>
        </div>
    )
}

export default Countries;