import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
//*import Signup from "./components/Signup";//
import Products from "./Pages/Products";
import maestroProducts from "./Pages/maestroProducts";
//import Login from "./components/Login";*//
 
function App() {
  return (
    <div>
      <Products/>
      <maestroProducts/>
    </div>
  );
}

export default App;
