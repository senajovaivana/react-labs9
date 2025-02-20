import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../redux/reducers";
import thunk from 'redux-thunk';
import PageEmployeesList from "./PageEmployeesList";
import PageEmployeeCreate from "./PageEmployeeCreate";
import Login from "./Login";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/list">
          <PageEmployeesList />
        </Route>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/new">
          <PageEmployeeCreate />
        </Route>
      </Switch>
    </Router>
  </Provider>
);

export default App;
