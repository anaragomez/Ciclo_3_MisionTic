import Logo from "./Logo";
import React from "react";
import Navbar from "navbar.js"
function maestroventas() {
    return (
    <div>
      <div class="container">
        <div class="row align-items-start">
          <div class="col">
            <div class="btn" aria-label="Basic example">
              <button type="button" style="position: absolute;top: 20,8%; left: 3.35%;" class="btn btn-info" >Todas</button>
              <button type="button" style="position: absolute;top: 20,8%; left: 7%;" class="btn btn-warning">Pendientes</button>
              <button type="button" style="position: absolute;top: 20,8%; left: 12.5%;" class="btn btn-success">Exitosas</button>
              <button type="button" class="btn btn-danger">Canceladas</button>
            </div>
          </div>
          <div class="col">
          </div>
          <div class="col">
            <form action="../../form-result.php" method="post" target="_blank">
              <button class="btn btn-outline-success" type="submit">Search</button> 
          </form>
          </div>
        </div>
    </div>
    <table id="tabla" class="table table-bordered table-hover">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Estado</th>
                <th scope="col">Cliente</th>
                <th scope="col">Total</th>
                <th scope="col">Fecha</th>
            </tr> 
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td class="table-warning">Pendiente</td>
                <td>Pepito Perez</td>
                <td>500.000</td>
                <td>25-Abril-2020</td>
            </tr>
            <tr>
                <td>2</td>
                <td class="table-info">Exitosa</td>
                <td>Pablito Diaz</td>
                <td>300.000</td>
                <td>25-julio-2020</td>
            </tr>
            <tr>
                <td>3</td>
                <td class="table-danger">Cancelada</td>
                <td>Juanita Ruiz</td>
                <td>950.000</td>
                <td>18-noviembre-2020</td>
            </tr>
            <tr>
                <td>3</td>
                <td class="table-danger">Cancelada</td>
                <td>Juanita Ruiz</td>
                <td>950.000</td>
                <td>18-noviembre-2020</td>
            </tr>
            <tr>
                <td>3</td>
                <td class="table-danger">Cancelada</td>
                <td>Juanita Ruiz</td>
                <td>950.000</td>
                <td>18-noviembre-2020</td>
            </tr>
            <tr>
                <td>3</td>
                <td class="table-danger">Cancelada</td>
                <td>Juanita Ruiz</td>
                <td>950.000</td>
                <td>18-noviembre-2020</td>
            </tr>
            <tr>
                <td>3</td>
                <td class="table-danger">Cancelada</td>
                <td>Juanita Ruiz</td>
                <td>950.000</td>
                <td>18-noviembre-2020</td>
            </tr>
            <tr>
                <td>1</td>
                <td class="table-warning">Pendiente</td>
                <td>Pepito Perez</td>
                <td>500.000</td>
                <td>25-Abril-2020</td>
            </tr>
            <tr>
                <td>1</td>
                <td class="table-warning">Pendiente</td>
                <td>Pepito Perez</td>
                <td>500.000</td>
                <td>25-Abril-2020</td>
            </tr>
            <tr>
                <td>2</td>
                <td class="table-info">Exitosa</td>
                <td>Pablito Diaz</td>
                <td>300.000</td>
                <td>25-julio-2020</td>
            </tr>
            <tr>
                <td>2</td>
                <td class="table-info">Exitosa</td>
                <td>Pablito Diaz</td>
                <td>300.000</td>
                <td>25-julio-2020</td>
            </tr><tr>
                <td>2</td>
                <td class="table-info">Exitosa</td>
                <td>Pablito Diaz</td>
                <td>300.000</td>
                <td>25-julio-2020</td>
            </tr>
            <tr>
                <td>2</td>
                <td class="table-info">Exitosa</td>
                <td>Pablito Diaz</td>
                <td>300.000</td>
                <td>25-julio-2020</td>
            </tr>
        </tbody>
    </table>
    </div>
    );
}
export default maestroventas;
