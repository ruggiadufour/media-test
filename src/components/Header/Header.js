import React, { useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { AccountButton } from "../Sidebar/Sidebar";

import Avatar from "../../assets/images/avatar.png";
import AccountIcon from "../../assets/svgs/account-icon.svg";
import BellIcon from "../../assets/svgs/bell-icon.svg";
import CloseIcon from "../../assets/svgs/close-session-icon.svg";
import ProfileIcon from "../../assets/svgs/profile-icon.svg";

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
        <img src={BellIcon} alt="avatar administrador" />
        <span className="user-name">Rubén Fuenzalida</span>
        <span className="user-admin">Administrador</span>
        <div
          className="avatar-button"
          onClick={() => {
            setOpenAccount((a) => !a);
          }}
        >
          <img className="avatar" src={Avatar} alt="avatar administrador" />
          <div
            className={`${
              openAccount ? "account-settings-deployable" : "d-none"
            }`}
          >
            <div className="arrow-avatar"></div>
            <div>
              <Link to="/clientes/mediacore/contenido/mi-perfil/mis-datos">
                <AccountButton
                  icon={ProfileIcon}
                  text={"Mi perfil"}
                  className="text-gray w-100"
                ></AccountButton>
              </Link>
              <AccountButton
                icon={AccountIcon}
                text={"Mi cuenta"}
                className="text-gray"
              ></AccountButton>
            </div>
            <div>
              <hr />
              <AccountButton
                icon={CloseIcon}
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
