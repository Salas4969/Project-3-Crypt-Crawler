import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { ApolloProvider, InMemoryCache, createHttpLink, ApolloClient  } from '@apollo/client';
// import ApolloClient from 'apollo-boost';
import {setContext} from '@apollo/client/link/context'
const httpLink = createHttpLink({
  uri: `/graphql`,
})

const authLink= setContext((_, {headers})=>
{
  const token = localStorage.getItem('id_token');
  return {
    headers:{
      ...headers,
      authorization: token ? `Bearer ${token}`:"",
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
        </Switch>
      </>
    </Router>
    </ApolloProvider>
  );
}

export default App;