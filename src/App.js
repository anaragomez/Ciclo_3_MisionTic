import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
//import Signup from "./components/Signup";
//import Products from "./components/Products";
//import Login from "./components/Login";
import Navbar2 from "./components/Navbar2";
import Products from "./components/Products";
import Signup from "./components/Signup";

function App() {
  return (
    <div>
      <Navbar2/>
      <Products/>
      <Products/>
    </div>
  );
}

export default App;
