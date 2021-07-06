import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import LogoImage from "../../assets/svgs/logo.svg";
import LockIcon from "../../assets/svgs/lock-icon.svg";
import CloseIcon from "../../assets/svgs/close-session-icon.svg";
import ProfileIcon from "../../assets/svgs/profile-icon.svg";
import AboutIcon from "../../assets/svgs/about-doc-icon.svg";
import AccountIcon from "../../assets/svgs/account-icon.svg";
import GearIcon from "../../assets/svgs/gear-icon.svg";
import DocIcon from "../../assets/svgs/doc-icon.svg";
import BillingIcon from "../../assets/svgs/billing-icon.svg";
import ArrowUpIcon from "../../assets/svgs/arrow-up-gray-icon.svg";
import ArrowDownIcon from "../../assets/svgs/arrow-down-gray-icon.svg";
import LabelIcon from "../../assets/svgs/label-icon.svg";

import DeployableButton from "./DeployableButton";
import { DeployableSettings } from "../Header/Header";

const assets_path = "assets";

const DeployableButtons = [
  {
    text: "MediaHost®",
    deployed: true,
    subButtons: [
      {
        text: "Acerca de MH®",
        leftIcon: AboutIcon,
        route: "/clientes/mediacore/contenido/media-host/acerca",
      },
      {
        text: "Soporte",
        leftIcon: GearIcon,
        route: "/clientes/mediacore/contenido/media-host/soporte",
      },
    ],
  },
  {
    text: "MediaAcademy®",
    subButtons: [
      {
        text: "Novedades",
        leftIcon: DocIcon,
        route: "/clientes/mediacore/contenido/media-academy/novedades",
      },
      {
        text: "Acerca de MA®",
        leftIcon: DocIcon,
        route: "/clientes/mediacore/contenido/media-academy/acerca",
      },
    ],
  },
  {
    text: "MediaSEO®",
    subButtons: [],
  },
  {
    text: "MediaBlog®",
    subButtons: [],
    rightIcon: LockIcon,
    subButtons: [
      {
        text: "Novedades",
        leftIcon: DocIcon,
        route: "/clientes/mediacore/contenido/media-blog/novedades",
      },
      {
        text: "Filtros",
        leftIcon: LabelIcon,
        route: "/clientes/mediacore/contenido/media-blog/filtros",
      },
    ],
  },
  {
    text: "MediaInvestor®",
    subButtons: [],
    rightIcon: LockIcon,
  },
  {
    text: "MediaBroker®",
    subButtons: [],
    rightIcon: LockIcon,
  },
  {
    text: "Más Servicios",
    subButtons: [],
  },
];

export default function Sidebar({ setMenu }) {
  const router = useHistory();
  const [openAccount, setOpenAccount] = useState(false);

  function pushUrl(url) {
    closeMenu();
    router.push("/clientes/mediacore" + url);
  }
  function closeMenu() {
    setMenu(false);
  }

  return (
    <>
      <div className="d-flex flex-column align-items-center">
        <img
          className="logo-brand"
          src={LogoImage}
          alt="Logo Template"
          width="100%"
        />

        {DeployableButtons.map((buttonData, i) => (
          <DeployableButton key={i} {...buttonData} onClick={closeMenu} />
        ))}
      </div>

      <div className="account-buttons d-flex flex-column ">
        <AccountButton
          icon={ProfileIcon}
          text={"Mi perfil"}
          onClick={() => {
            pushUrl("/contenido/mi-perfil/mis-datos");
          }}
        ></AccountButton>
        <AccountButton
          icon={AccountIcon}
          rightIcon={openAccount ? ArrowUpIcon : ArrowDownIcon}
          text={"Mi cuenta"}
          className="mt-4"
          onClick={() => {
            setOpenAccount((oa) => !oa);
          }}
        ></AccountButton>
        <div className={`ms-3 ${
            openAccount ? "h-animation-open" : "h-animation-close"
          }`}>
          <AccountButton
            icon={BillingIcon}
            text="Facturación"
            className="small-font mt-3"
            onClick={() => {
              pushUrl("/contenido/facturacion/datos-de-facturacion");
            }}
          ></AccountButton>
          <AccountButton
            icon={BillingIcon}
            className="mt-3 small-font"
            text="Estado de cuenta"
            onClick={() => {
              pushUrl("/contenido/facturacion/estado-de-cuenta");
            }}
          ></AccountButton>
        </div>
        {/* <AccountButton
          icon={BillingIcon}
          text="Facturación"
          onClick={() => {
            pushUrl("/contenido/facturacion/datos-de-facturacion");
          }}
        ></AccountButton>
        <AccountButton
          icon={BillingIcon}
          text="Estado de cuenta"
          onClick={() => {
            pushUrl("/contenido/facturacion/estado-de-cuenta");
          }}
        ></AccountButton> */}
        <AccountButton
          icon={CloseIcon}
          className="mt-4"
          text={"Cerrar sesión"}
          onClick={() => {
            pushUrl("/login");
          }}
        ></AccountButton>
      </div>
    </>
  );
}

export const AccountButton = ({
  text,
  icon,
  rightIcon,
  onClick = () => {},
  className = "",
}) => {
  return (
    <button className={`account-button ${className}`} onClick={onClick}>
      {icon && <img src={icon} alt="icon button" width="15px" />}
      <span>{text}</span> 
      {rightIcon && <img src={rightIcon} alt="icon button" />}
    </button>
  );
};

export const SidebarButton = ({
  text,
  leftIcon,
  rightIcon,
  type = "",
  onClick = () => {},
}) => {
  return (
    <button className={`sidebar-button ${type}`} onClick={onClick}>
      <div>
        {leftIcon && <img src={leftIcon} alt="left icon button" width="18px" />}
        <span>{text}</span>
      </div>
      {rightIcon && <img src={rightIcon} alt="right icon button" />}
    </button>
  );
};
