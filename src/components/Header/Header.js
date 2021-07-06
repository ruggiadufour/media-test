import React, { useState } from "react";
import { useHistory, Link, NavLink } from "react-router-dom";
import { AccountButton } from "../Sidebar/Sidebar";

import Avatar from "../../assets/images/avatar.png";
import AccountIcon from "../../assets/svgs/account-icon.svg";
import BellIcon from "../../assets/svgs/bell-icon.svg";
import CloseIcon from "../../assets/svgs/close-session-icon.svg";
import ProfileIcon from "../../assets/svgs/profile-icon.svg";
import BillingIcon from "../../assets/svgs/billing-icon.svg";
import ArrowUpIcon from "../../assets/svgs/arrow-up-gray-icon.svg";
import ArrowDownIcon from "../../assets/svgs/arrow-down-gray-icon.svg";

export default function Header({ setMenu, menu }) {
  const [openSettings, setOpenSettings] = useState(false);

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

      <NavLink className="brand text-decoration-none" to="/clientes/mediacore">
        MediaCore®
      </NavLink>

      <div className="d-flex gap-3 align-items-center right-elements">
        <img src={BellIcon} alt="avatar administrador" />
        <span className="user-name">Rubén Fuenzalida</span>
        <span className="user-admin">Administrador</span>

        <div className="position-relative">
          <div
            className="avatar-button"
            onClick={() => {
              setOpenSettings((a) => !a);
            }}
          >
            <img className="avatar" src={Avatar} alt="avatar administrador" />
            <div
              className={`arrow-avatar ${
                openSettings ? "opacity-transition-100" : "opacity-transition-0"
              } `}
            ></div>
          </div>
          <DeployableSettings
            openSettings={openSettings}
            setOpenSettings={setOpenSettings}
          />
        </div>
      </div>
    </header>
  );
}

export function DeployableSettings({ openSettings, setOpenSettings }) {
  const router = useHistory();
  const [openAccount, setOpenAccount] = useState(false);

  function pushUrl(url) {
    router.push("/clientes/mediacore" + url);
  }

  function handleClick(url) {
    setOpenSettings((os) => !os);
    pushUrl(url);
  }

  return (
    <div
      className={` ${
        openSettings ? "h-animation-open" : "h-animation-close pb-0 pt-0"
      } account-settings-deployable`}
    >
      {/* "height-animation-open" : "height-animation-close" */}
      <div className="pt-3">
        <AccountButton
          icon={ProfileIcon}
          text={"Mi perfil"}
          className="text-gray-1 w-100"
          onClick={() => handleClick("/contenido/mi-perfil/mis-datos")}
        ></AccountButton>
        <AccountButton
          icon={AccountIcon}
          rightIcon={openAccount ? ArrowUpIcon : ArrowDownIcon}
          text={"Mi cuenta"}
          className="text-gray-1"
          onClick={() => {
            setOpenAccount((oa) => !oa);
          }}
        ></AccountButton>
      </div>
      <div>
        <div
          className={`ms-3 ${
            openAccount ? "h-animation-open" : "h-animation-close"
          }`}
        >
          <AccountButton
            icon={BillingIcon}
            className="text-gray-1 mt-3 small-font"
            text="Facturación"
            onClick={() => {
              handleClick("/contenido/facturacion/datos-de-facturacion");
            }}
          ></AccountButton>
          <AccountButton
            icon={BillingIcon}
            className="text-gray-1 small-font"
            text="Estado de cuenta"
            onClick={() => {
              handleClick("/contenido/facturacion/estado-de-cuenta");
            }}
          ></AccountButton>
        </div>
        <hr />
        <AccountButton
          icon={CloseIcon}
          text={"Cerrar sesión"}
          className="text-gray-1 pb-3"
          onClick={() => pushUrl("/login")}
        ></AccountButton>
      </div>
    </div>
  );
}
