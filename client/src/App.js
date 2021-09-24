import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CharacterForm from './components/CharacterForm';

import { ApolloProvider, InMemoryCache, HttpLink, ApolloClient  } from '@apollo/client';
// import ApolloClient from 'apollo-boost';
import {setContext} from '@apollo/client/link/context'
import './App.css'
// const httpLink = createHttpLink({
//   uri: `/graphql`,
// })
const httpLink = new HttpLink({
  uri: `http://localhost:3001/graphql`,
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
      <CharacterForm/>
        <Switch>
          {/* <Route render={}/> */}
        </Switch>
      </>

    </Router>
    </ApolloProvider> 
  );
}

export default App;
