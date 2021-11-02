import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
//*import Signup from "./components/Signup";//
import Products from "./Pages/Products";
import Products from "./Pages/maestroProducts";

//import Login from "./components/Login";*//
 
function App() {
  return (
    <Router>
      <div className='container'>
      <h1>Navbar</h1>
      <hr />
      <Switch>
        <Route path="/RegistroProductos">
          Registro Productos
        </Route>
        <Route path="/MaestroProductos">
          Maestro de Productos
        </Route>
        <Route path="/RegistroProductos">
          Registro Productos
        </Route>
        <Route path="/Signup">
          Registro 
        </Route>
        <Route path="/Login">
          Login
        </Route>
        <Route path="/">
          Inicio
        </Route>
      </Switch>
      </div>
    </Router>
  
  );
}

export default App;
