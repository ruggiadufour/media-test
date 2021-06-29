import React, { useState } from "react";
import "./Header.scss";
import { useHistory, Link, NavLink } from "react-router-dom";
import { AccountButton } from "../Sidebar/Sidebar";

import Avatar from "../../assets/images/avatar.png";
import AccountIcon from "../../assets/svgs/account-icon.svg";
import BellIcon from "../../assets/svgs/bell-icon.svg";
import CloseIcon from "../../assets/svgs/close-session-icon.svg";
import ProfileIcon from "../../assets/svgs/profile-icon.svg";

export default function Header({ setMenu, menu }) {
  const [openAccount, setOpenAccount] = useState(false);
  const router = useHistory();

  function pushUrl(url) {
    router.push("/clientes/mediacore" + url);
  }

  return (
    <header className="header d-flex align-items-center">
      <div
        className={`${menu ? "menu-btn menu-btn-clicked" : "menu-btn"}`}
        onClick={() => {
          setMenu((m) => !m);
        }}
      >
        <div></div>
      </div>

      <NavLink className="brand" to="/clientes/mediacore">
        MediaCore®
      </NavLink>

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
              <AccountButton
                icon={ProfileIcon}
                text={"Mi perfil"}
                className="text-gray w-100"
                onClick={() => pushUrl("/contenido/mi-perfil/mis-datos")}
              ></AccountButton>

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
                onClick={() => pushUrl("/login")}
              ></AccountButton>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
