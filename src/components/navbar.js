import React from "react";
import Logo from "./Logo";

function Navbar() {
  return (
    <div class="container   ">
      <div class="row">
        <div class="col-md-1">
          <Logo />
        </div>
        <div class="p-4 col-md-5">Catimore Coffee</div>
        <div class="p-4 col-md-3">
          <select class="form-select">
            <option selected>Registro / Consulta</option>
            <option value="1">Registro Productos</option>
            <option value="2">Registro Ventas</option>
            <option value="3">Maestro Productos</option>
            <option value="3">Maestro Ventas</option>
          </select>
        </div>
        <div class="p-4 col-md-2">
          {" "}
          <a className="nav-link active" aria-current="page" href=" "> Home</a>{" "}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
