import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Routes() {
  return (
    <Router>
      <Link to="/login" className="btn btn-primary">
        Login
      </Link>
      <Switch>
        <Route path="/" exact>
          <h1>Home</h1>
        </Route>

        <Route path="/login" exact>
          <h1>Login</h1>
        </Route>
      </Switch>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

export default Routes;
