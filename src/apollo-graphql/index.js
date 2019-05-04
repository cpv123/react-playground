import React from 'react';
import { ApolloProvider } from "react-apollo";
import ApolloClient, { gql } from "apollo-boost";

import QueryComponent from './QueryComponent';

const client = new ApolloClient({
    uri: "http://localhost:4000/graphql"
});

function Test() {
    return (
        <ApolloProvider client={client}>
            <QueryComponent />
        </ApolloProvider>
    )
};

export default Test;