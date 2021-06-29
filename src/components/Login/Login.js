import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.scss";
const assets_path = "assets"

export default function Login() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  function handleChange(e) {
    setData((data_) => {
      return { ...data_, [e.target.name]: e.target.value };
    });
  }

  return (
    <div className="login-container">
      <div className="login-section">
        <Link to="/clientes/mediacore">
          <img src={`${assets_path}/svgs/brand-logo.svg`} alt="brand logo" />
        </Link>

        <form className="login-form" action="">
          <h1 className="mb-4">
            Acceso privado <Link to="/clientes/mediacore">MediaCore®</Link>
          </h1>
          <div className="d-flex flex-column gap-2">
            <label>Usuario</label>
            <input
              name="username"
              value={data.username}
              onChange={handleChange}
              required
              className="login-input"
              type="text"
              placeholder="Usuario"
            />
          </div>
          <div className="d-flex flex-column gap-2">
            <label>Contraseña</label>
            <input
              name="password"
              value={data.password}
              onChange={handleChange}
              required
              className="login-input"
              type="password"
              placeholder="Contraseña"
            />
          </div>
          <button className="mt-4 login-button" type="submit">
            Entrar
          </button>
          <a href="#">Olvidé mi contraseña</a>
        </form>
        
        <p>
          Plataforma MediaCore® by <a href="https://www.mediahaus.com.ar" target="_blank">MediaHaus</a> 2021. Todos los
          derechos reservados.
        </p>
      </div>

      <div className="login-image"></div>
    </div>
  );
}
