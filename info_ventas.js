import Logo from "./Logo";
import React from "react";

function Infoventas() {
    return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-sm-4">
                    <div class="card"> 
                        <div class="card-body">
                            <h5 class="card-title">Información cliente:</h5>
                            <p className="card-text">
                                Nombre:
                                Juanita Ruiz
                                <br></br>   
                                ID:
                                2475658475
                                <br></br>   
                                Dirección:
                                Cra 62c #45-78
                                Bogotá D.C.
                                <br></br>
                                Celular:
                                3285694721
                                <br></br>
                                <E-mail>
                                    Juanita5rp@gmail.com
                                </E-mail>
                            </p>
                            <a href="#" class="btn btn-primary">Buscar</a>
                            <a href="#" class="btn btn-primary">Editar</a>
                            <a href="#" class="btn btn-primary">Añadir</a>
                        </div>
                    </div>

                </div>

            </div>

        </div>
        <div class="col-sm-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Producto:<br></br> Libra de café </h5>
                    <p class="card-text">Referencia: 12548 <br></br>Codigo: 12415<br></br> Café hecho de café variedad catimor</p>
                    <a href="#" class="btn btn-primary">$20.000</a>
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Ticket N°: 2</h5>
                    <p class="card-text">
                    Valor total de la compra: $20.000
                    </p>
                    <a href="#" class="btn btn-primary">COMPRAR</a>
                </div>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Vendedor</h5>
                    <p class="card-text">Jhon Gomez</p>
                    <a href="#" class="btn btn-primary">Consultar</a>
                </div> 
            </div>
            <table id="tabla" class="table table-striped table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Otras plataformas:</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>instagram.com/catimor</td>
                    </tr>
                    <tr>
                        <td>facebook.com/catimor</td>
                    </tr>
                    <tr>
                        <td>@catimor</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    )
}
export default Infoventas