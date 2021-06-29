import React, { useState } from "react";
import "./Sidebar.scss";

import LogoImage from "../../assets/svgs/logo.svg";
import LockIcon from "../../assets/svgs/lock-icon.svg";
import CloseIcon from "../../assets/svgs/close-session-icon.svg";
import ProfileIcon from "../../assets/svgs/profile-icon.svg";
import AboutIcon from "../../assets/svgs/about-doc-icon.svg";
import AccountIcon from "../../assets/svgs/account-icon.svg";
import GearIcon from "../../assets/svgs/gear-icon.svg";

const assets_path = "assets";

export default function Sidebar() {
  const [deploy, setDeploy] = useState(false);

  return (
    <>
      <div className="d-flex flex-column align-items-center">
        <img
          className="logo-brand"
          src={LogoImage}
          alt="Logo Template"
          width="100%"
        />

        <SidebarButton
          text="MediaHost®"
          onClick={() => {
            setDeploy((d) => !d);
          }}
        />

        <div className={`deploy w-100 ${deploy ? "deployed" : "undeployed"}`}>
          <SidebarButton
            text="Acerca de MH"
            type="deployable"
            leftIcon={AboutIcon}
          />
          <SidebarButton
            text="Soporte"
            type="deployable"
            leftIcon={GearIcon}
          />
        </div>
        <SidebarButton text={"MediaSEO®"} />
        <SidebarButton
          text={"MediaBlog®"}
          rightIcon={LockIcon}
        />
        <SidebarButton
          text="MediaInvestor®"
          rightIcon={LockIcon}
        />
        <SidebarButton text={"MediaBroker®"} />
        <SidebarButton text={"Más Servicios"} />
      </div>

      <div className="d-flex flex-column">
        <AccountButton
          icon={ProfileIcon}
          text={"Mi perfil"}
        ></AccountButton>
        <AccountButton
          icon={AccountIcon}
          text={"Mi cuenta"}
        ></AccountButton>
        <AccountButton
          icon={CloseIcon}
          text={"Cerrar sesión"}
        ></AccountButton>
      </div>
    </>
  );
}

export const AccountButton = ({
  text,
  icon,
  onClick = () => {},
  className = "",
}) => {
  return (
    <button className={`account-button ${className}`} onClick={onClick}>
      {icon && <img src={icon} alt="icon button" width="15px" />}
      <span>{text}</span>
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
