import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Signup from "./components/Signup";
import Products from "./components/Products";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <Login/>
      <Signup/>
      <Products/>
    </div>
  );
}

export default App;
