import React from 'react'

const Countries = ({ countryList }) => {
    return (
        <div className="countries">
            <ul>
                {countryList.map(({ id, name }) => 
                    <li key={id}>{name}</li>
                )}
            </ul>
        </div>
    )
}

export default Countries;