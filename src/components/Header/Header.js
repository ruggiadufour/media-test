import React, { useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { AccountButton } from "../Sidebar/Sidebar";
const assets_path = "assets";

export default function Header({ setMenu, menu }) {
  const [openAccount, setOpenAccount] = useState(false);
  
  return (
    <header className="header d-flex align-items-center">
      <div
        className="menu-container"
        onClick={() => {
          setMenu((m) => !m);
        }}
      >
        <div className={`${menu ? "menu-btn menu-btn-clicked" : "menu-btn"}`}>
          <div></div>
        </div>
      </div>

      <Link to="/clientes/mediacore">
        <p className="brand mx-2">MediaCore®</p>
      </Link>
      <div className="d-flex gap-3 align-items-center right-elements">
        <img src={`${assets_path}/svgs/bell.svg`} alt="bell icon" />
        <span className="user-name">Rubén Fuenzalida</span>
        <span className="user-admin">Administrador</span>

        <div
          className="avatar-button"
          onClick={() => {
            setOpenAccount((a) => !a);
          }}
        >
          <img
            className="avatar"
            src={`${assets_path}/avatar.png`}
            alt="avatar administrador"
          />
          <div
            className={`${
              openAccount ? "account-settings-deployable" : "d-none"
            }`}
          >
            <div className="arrow-avatar"></div>
            <div>
              <Link to="/clientes/mediacore/contenido/mi-perfil/mis-datos">
                <AccountButton
                  icon={`${assets_path}/svgs/profile.svg`}
                  text={"Mi perfil"}
                  className="text-gray w-100"
                ></AccountButton>
              </Link>
              <AccountButton
                icon={`${assets_path}/svgs/account.svg`}
                text={"Mi cuenta"}
                className="text-gray"
              ></AccountButton>
            </div>
            <div>
              <hr />
              <AccountButton
                icon={`${assets_path}/svgs/close-session.svg`}
                text={"Cerrar sesión"}
                className="text-gray"
              ></AccountButton>
            </div>
          </div>
        </div>

        <Link to="/clientes/mediacore/login">LogIn</Link>
      </div>
    </header>
  );
}
