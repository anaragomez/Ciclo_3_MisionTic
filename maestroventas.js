<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="assets/css/style.css">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Administracion de ventas</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
</head>
<body>
  <nav class="navbar navbar-light " style="background-color:#6a0000;">
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #6a0000; border: none;"  >
      <div class="container-fluid" style="border: none;">
        <a class="navbar-brand" style="border: none;">
          <img style="border: 100%;" src="assets/img/WhatsApp Image 2021-09-26 at 15.04.25.jpeg" width="4%" height="4%" >
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" style="color:whitesmoke;" aria-current="page" href="#"><b>MAESTRO DE PRODUCTOS</b></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" style="color:whitesmoke" href="#"><b>MAESTRO DE VENTAS</b></a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link" style="color: whitesmoke;" href="#"><b>MAESTRO DE USUARIOS</b></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </nav>
    <h1 style="color: black;">
    <b>VENTAS</b>
    </h1>
    <h3 style="color: black;">Lista de ventas</h3>
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
              <input type="search" name="buscarventas" list="listaventas">
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
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"></script>
    <script src="assets/js/app.js"></script>  
</body>
</html>