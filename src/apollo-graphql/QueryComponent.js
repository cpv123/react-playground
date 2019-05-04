import React from 'react';
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

const GET_SHOPS = gql`
    {
        shops {
            name
            location
        }
    }
`;

function QueryComponent() {
    return (
        <Query query={GET_SHOPS}>
            {({ loading, error, data }) => {
                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error :(</p>;

                return data.shops.map(({ name, location }) => (
                    <div key={name}>
                        <p>{name}: {location}</p>
                    </div>
                ));
            }}
        </Query>
    )
}

export default QueryComponent;