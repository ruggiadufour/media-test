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
import Gear2Icon from "../../assets/svgs/gear-2-icon.svg";
import CalendarIcon from "../../assets/svgs/calendar-icon.svg";
import RoomIcon from "../../assets/svgs/room-icon.svg";
import PeopleIcon from "../../assets/svgs/people-icon.svg";

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
        rightIcon: AboutIcon,
        route: "/clientes/mediacore/contenido/media-host/acerca",
      },
      {
        text: "Soporte",
        rightIcon: GearIcon,
        route: "/clientes/mediacore/contenido/media-host/soporte",
      },
    ],
  },
  {
    text: "MediaAcademy®",
    subButtons: [
      {
        text: "Novedades",
        rightIcon: DocIcon,
        route: "/clientes/mediacore/contenido/media-academy/novedades",
      },
      {
        text: "Acerca de MA®",
        rightIcon: DocIcon,
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
        rightIcon: DocIcon,
        route: "/clientes/mediacore/contenido/media-blog/novedades",
      },
      {
        text: "Filtros",
        rightIcon: LabelIcon,
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
    subButtons: [
      {
        text: "Acerca de MB®",
        rightIcon: DocIcon,
        route: "/clientes/mediacore/contenido/media-broker/acerca",
      },
      {
        text: "Eventos",
        rightIcon: CalendarIcon,
        route: "/clientes/mediacore/contenido/media-broker/eventos",
      },
      {
        text: "Salas",
        rightIcon: RoomIcon,
        route: "/clientes/mediacore/contenido/media-broker/salas",
      },
      {
        text: "Usuarios",
        rightIcon: PeopleIcon,
        route: "/clientes/mediacore/contenido/media-broker/usuarios",
      },
    ],
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
          floatIcon={ProfileIcon}
          text={"Mi perfil"}
          onClick={() => {
            pushUrl("/contenido/mi-perfil/mis-datos");
          }}
        ></AccountButton>
        <AccountButton
          floatIcon={Gear2Icon}
          rightIcon={openAccount ? ArrowUpIcon : ArrowDownIcon}
          text={"Mi cuenta"}
          className="mt-4"
          onClick={() => {
            setOpenAccount((oa) => !oa);
          }}
        ></AccountButton>
        <div
          className={`ms-1 ${
            openAccount ? "h-animation-open" : "h-animation-close"
          }`}
        >
          <AccountButton
            text="- Facturación"
            className="small-font mt-3"
            onClick={() => {
              pushUrl("/contenido/facturacion/datos-de-facturacion");
            }}
          ></AccountButton>
          <AccountButton
            className="mt-3 small-font"
            text="- Estado de cuenta"
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
          floatIcon={CloseIcon}
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
  floatIcon,
  onClick = () => {},
  className = "",
}) => {
  return (
    <button
      className={`account-button position-relative ${className}`}
      onClick={onClick}
    >
      {icon && <img src={icon} alt="icon button" width="15px" />}
      <span>{text}</span>
      {rightIcon && <img src={rightIcon} alt="icon button" />}
      {floatIcon && (
        <img
          className="position-absolute end-0 me-2"
          src={floatIcon}
          alt="icon button"
        />
      )}
    </button>
  );
};
