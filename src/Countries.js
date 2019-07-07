import React from 'react'
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const GET_COUNTRIES = gql`
    query {
        countries {
            code
            name
            emoji
        }
    }
`;

const Countries = ({ data: { countries, loading } }) => {
    return (
        <ul>
            {loading && <div>Loading ...</div>}
            {countries && countries.slice(0, 10).map(({ code, name, emoji }) => 
                <li key={code}>
                    {code} - {name} - {emoji}
                </li>
            )}
        </ul>
    )
}

const CountriesWithQuery = graphql(GET_COUNTRIES)(Countries);

export default CountriesWithQuery;
