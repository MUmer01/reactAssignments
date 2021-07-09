import "./App.css";
import React from "react";
import Topic from "./Topics";
import { Route, Switch, BrowserRouter, Link, Redirect } from "react-router-dom";

// https://signup.live.com/
// https://live.com/
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
          <li>
            <Link to="/about/abc">about sub</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/">
            <h1>home</h1>
          </Route>
          <Route exact path="/about">
            <h1>about</h1>
          </Route>
          <Route exact path="/about/:id">
            <h1>Sub Route</h1>
          </Route>
          <Route path="/topics">
            <Topic />
          </Route>
          <Route path="/error">
            <h1>404 not found</h1>
          </Route>
          <Redirect from="/" to="/error" />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
