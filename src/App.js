import React from 'react';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Signup from "./components/Signup";
import Logo from "./components/Logo"
import Products from "./Productos/productsRegister/Products";

function App() {
  return (
    <div>
           <Signup/>
           <Logo/>
           <Products/>
        </div>
  );
}

export default App;
