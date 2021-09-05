import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import { CryptoBet } from 'components/CryptoBet'
import { AuctionForms } from 'components/AuctionForms'

import store from 'app/store';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/create">Create</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/">
            <CryptoBet />
          </Route>
          <Route exact path="/create">
            <AuctionForms />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
