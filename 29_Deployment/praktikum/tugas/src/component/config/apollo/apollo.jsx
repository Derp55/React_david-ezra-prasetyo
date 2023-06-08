import { ApolloClient, InMemoryCache } from '@apollo/client';

export const apolloclient = new ApolloClient({
    uri: 'https://derp55.hasura.app/v1/graphql',
    headers: {
        "x-hasura-admin-secret":"36v6ffuFfYfB8GfU52vyQr5Q6Hd15e2xBVPKxxv7a45KwJqmS6X1Rf0sV4YOcMGT"
    },
    cache: new InMemoryCache(),
  });