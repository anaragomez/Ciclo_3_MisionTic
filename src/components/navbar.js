import Logo from "./Logo";


function Navbar(){
    return(
<nav className="navbar navbar-light bg-light">
    <div class="container-fluid">
    <Logo /> Catimore Coffee  
         
         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">RegistroUsuarios</a>
        </li>
     
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Administración Productos
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">RegistroProductos</a></li>
            <li><a class="dropdown-item" href="#">MaestroProductos</a></li>
          </ul>

          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Administración Ventas
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">RegistroVentas</a></li>
            <li><a class="dropdown-item" href="#">MaestroVentas</a></li>
          </ul>
        </li>
      </ul>
 
    </div>  
    </div>

</nav>
)
}
export default Navbar; 