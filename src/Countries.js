import React from 'react'

const Countries = ({ countryList }) => {
    return (
        <ul>
            {countryList.map(({ id, name }) => 
                <li key={id}>{name}</li>
            )}
        </ul>
    )
}

export default Countries;