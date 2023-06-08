import React from 'react';
import ReactRouter from './component/config/router/ReactRouter';
import { apolloclient } from './component/config/apollo/apollo';
import { ApolloProvider } from '@apollo/client';

function App() {
  return (
    <ApolloProvider client={apolloclient}>
    <ReactRouter/>
    </ApolloProvider>
  );
}

export default App;

