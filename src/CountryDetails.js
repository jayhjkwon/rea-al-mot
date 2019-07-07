import React from 'react'

const CountryDetails = ({ countryList, id }) => {
    const { name, city } = countryList.find(c => c.id === parseInt(id))
    return (
        <article>
            <ul>
                <li>ID: {id}</li>
                <li>NAME: {name}</li>
                <li>City: {city}</li>
            </ul>
        </article>
    )
}

export default CountryDetails