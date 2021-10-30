import React from 'react';
import Logo from "./Logo";
import logoFacebook from "../images/logofb.png";
import logoGoogle from "../images/logogoogle.png";
import {useState} from "react";

function Login() {
    const [email, setEmail]= useState();
    const [password, setPassword]= useState();
    const handleClick = (e)=>{
      e.preventDefault();
      console.log("click");
      console.log("email", email);
      console.log("password", password);
  
    }
    return (
      <div className="container w-75 bg-primary mt-5 rounded shadow">
        <div className="row align-items-stretch">
          <div className="col bg d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded"/>
          <div className="col bg-white p-5 rounded-end">
            <Logo />
            <h2 className="fw-bold text-center py-5">Bienvenido</h2>
            <form action="#">
              <div className="mp-4">
                <label htmlFor="email" className="form-label">
                  Correo electrónico
                </label>
                <br />
                <input id= "email" type="email" className="form-control" name="email" onChange={(e)=>{
                  setEmail(e.target.value);
                }} />
              </div>
              <div className="mp-4">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <br />
                <input id="password" type="password" className="form-control" name="email" onChange={(e)=>{
                  setPassword(e.target.value);
                }} />
              </div>
              <div className="mp-4">
                <input
                  type="checkbox"
                  name="connected"
                  className="form-check-input"
                  id="connected"
                />
                <br />
                <label htmlFor="connected" className="form-check-label">
                  No cerrar sesión
                </label>
                <br />
              </div>
  
              <div className="d-grid">
                <button type="submit" className="btn btn-primary" onClick={handleClick}>
                  Iniciar sesión
                </button>
                <br />
              </div>
  
              <div className="my-3">
                <span>
                  ¿No tienes cuenta? <a href="#">Registrate</a>
                </span>
                <br />
                <span>
                  <a href="#">Recuperar password</a>
                </span>
                <br />
              </div>
            </form>
            <div className="row text-center">
              <div className="col-12">Iniciar Sesión</div>
            </div>
            <div className="row">
              <div className="col">
                <button className="btn btn-outline-primary w-100 m-1">
                  <div className="row align-items-center">
                    <div className="col-2 d-none d-md-block">
                      <img src={logoFacebook} width="32" alt="" />
                    </div>
                    <div className="col-12 col-md-10 text-center">Facebook</div>
                  </div>
                </button>
              </div>
              <div className="col">
                <button className="btn btn-outline-danger w-100 m-1">
                  <div className="row align-items-center">
                    <div className="col-2 d-none d-md-block">
                      <img src={logoGoogle} width="32" alt="" />
                    </div>
                    <div className="col-12 col-md-10 text-center">Google</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Login;
  