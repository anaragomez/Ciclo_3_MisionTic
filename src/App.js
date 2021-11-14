import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import "bootstrap";
//import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navbar2 from "./components/Navbar2";
import Login from "./components/Login";
//import Products from "./components/Products";
//import Signup from "./components/Signup";

//think how Page each function
function App() {
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

export default App;
