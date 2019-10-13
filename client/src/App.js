import React from 'react';
import ApolloClient from 'apollo-boost'
import {ApolloProvider} from 'react-apollo'
import Launches from './components/Launches.jsx'
import Launch from './components/Launch'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import './App.css';

const client = new ApolloClient({
  uri: '/graphql'
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <h1>spaceX</h1>
          <Route exact path="/" component={Launches} />
          <Route exact path="/launch/:flight_number" component={Launch} />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
