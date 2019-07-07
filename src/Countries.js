import React from 'react'
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const GET_COUNTRIES = gql`
    # TODO 
    # 여기에 code, name, emoji 필드를 가져오는 GraphQL 쿼리를 삽입합니다. 
    # https://countries.trevorblades.com/
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

// TODO
// graphql 함수를 사용해서 GraphQL 쿼리와 리액트 컴포넌트를 연결해보세요
// Apollo Client 문서를 참조하세요
// https://www.apollographql.com/docs/react/api/react-apollo/#graphqlquery-configcomponent
const CountriesWithQuery = 

export default CountriesWithQuery;
