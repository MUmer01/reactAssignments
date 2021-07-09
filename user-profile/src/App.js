import React from "react";
import "./index.css";
import { Home } from "./home";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Error } from "./Error";
import { Profile } from "./Profile";

const App = () => {
  return (
    <div>
      <BrowserRouter basename="/user-profile-app">
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Redirect exact from="/" to="/home" />
          <Route exact path="/user/:id">
            <Profile />
          </Route>
          <Route exact path="/404">
            <Error />
          </Route>
          <Redirect from="/" to="/404" />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
