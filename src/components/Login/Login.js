import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoIcon from '../../assets/svgs/brand-logo.svg'

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
          <img src={LogoIcon} alt="brand logo" />
        </Link>

        <form className="login-form" action="">
          <h1 className="title-1 font-1 mb-4">
            Acceso privado <Link className="text-decoration-none text-blue-1" to="/clientes/mediacore">MediaCore®</Link>
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
          <button className="blue-button mt-4 p-2" type="submit">
            Entrar
          </button>
          <a href="#">Olvidé mi contraseña</a>
        </form>
        
        <p className="font-1 small-font text-gray-2">
          Plataforma <span className="text-blue-1">MediaCore®</span> by <a className="link-1" href="https://www.mediahaus.com.ar" target="_blank">MediaHaus</a> 2021. Todos los
          derechos reservados.
        </p>
      </div>

      <div className="login-image"></div>
    </div>
  );
}
