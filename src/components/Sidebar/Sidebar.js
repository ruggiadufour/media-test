import React, { useState } from "react";
import "./Sidebar.scss";

export default function Sidebar() {
  const [deploy, setDeploy] = useState(false);

  return (
    <>
      <div className="d-flex flex-column align-items-center">
        <img
          className="logo-brand"
          src="assets/svgs/logo.svg"
          alt="Logo Template"
          width="100%"
        />

        <SidebarButton
          text={"MediaHost®"}
          onClick={() => {
            setDeploy((d) => !d);
          }}
        />

        <div className={`deploy w-100 ${deploy ? "deployed" : "undeployed"}`}>
          <SidebarButton
            text="Acerca de MH"
            type="deployable"
            leftIcon="assets/svgs/about-doc.svg"
          />
          <SidebarButton
            text={"Soporte"}
            type="deployable"
            leftIcon="assets/svgs/gear.svg"
          />
        </div>
        <SidebarButton text={"MediaSEO®"} />
        <SidebarButton text={"MediaBlog®"} rightIcon="assets/svgs/lock.svg" />
        <SidebarButton
          text={"MediaInvestor®"}
          rightIcon="assets/svgs/lock.svg"
        />
        <SidebarButton text={"MediaBroker®"} />
        <SidebarButton text={"Más Servicios"} />
      </div>

      <div className="d-flex flex-column">
        <AccountButton
          icon="assets/svgs/profile.svg"
          text={"Mi perfil"}
        ></AccountButton>
        <AccountButton
          icon="assets/svgs/account.svg"
          text={"Mi cuenta"}
        ></AccountButton>
        <AccountButton
          icon="assets/svgs/close-session.svg"
          text={"Cerrar sesión"}
        ></AccountButton>
      </div>
    </>
  );
}

function AccountButton({ text, icon, onClick = () => {} }) {
  return (
    <button className="account-button" onClick={onClick}>
      {icon && <img src={icon} alt="icon button" width="15px" />}
      <span>{text}</span>
    </button>
  );
}

function SidebarButton({
  text,
  leftIcon,
  rightIcon,
  type = "",
  onClick = () => {},
}) {
  return (
    <button className={`sidebar-button ${type}`} onClick={onClick}>
      <div>
        {leftIcon && <img src={leftIcon} alt="left icon button" width="18px" />}
        <span>{text}</span>
      </div>
      {rightIcon && <img src={rightIcon} alt="right icon button" />}
    </button>
  );
}
