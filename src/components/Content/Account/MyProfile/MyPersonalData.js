import React, { useState, useRef } from "react";
import Breadcrumb from "../../Breadcrumb";

import PencilIcon from "../../../../assets/svgs/pencil-icon.svg";
import Avatar from "../../../../assets/images/avatar.png";
import Background from "../../../../assets/images/login-background.png";

export default function MyPersonalData() {
  const inputFileProfile = useRef(null);
  const inputFileBanner = useRef(null);
  const [data, setData] = useState({
    fullname: "",
    email: "",
    phone: "",
    username: "",
    password: "",
    repassword: "",
    aboutme: "",
  });

  const breadcrumb_items = [
    {
      text: "Mi Perfil",
    },
    {
      text: "Mis datos personales",
    },
  ];

  function getFileProfile() {
    inputFileProfile.current.click();
  }
  function getFileBanner() {
    inputFileBanner.current.click();
  }

  function handleChange(e) {
    setData((this_data) => {
      return { ...this_data, [e.target.name]: e.target.value };
    });
  }

  return (
    <div className="content my-profile-content">
      <div>
        <Breadcrumb items={breadcrumb_items} />

        <h1 className="title-1 font-2">Hola, Rubén!</h1>
      </div>

      <div className="my-data">
        <div className="images-container">
          <img
            className="banner-image"
            src={Background}
            alt="perfil de usuario"
            width="75px"
          />
          <button className="edit-banner" onClick={getFileBanner}>
            <img src={PencilIcon} width="15px" alt="edit banner image icon" />
          </button>
          <div className="profile-wrapper">
            <img
              className="profile-image"
              src={Avatar}
              alt="perfil de usuario"
              width="75px"
            />
            <button className="edit-profile" onClick={getFileProfile}>
              <img
                src={PencilIcon}
                width="15px"
                alt="edit profile image icon"
              />
            </button>
          </div>
          <input type="file" ref={inputFileBanner} className="d-none" />
          <input type="file" ref={inputFileProfile} className="d-none" />
        </div>

        <div className="input-grid">
          <div className="d-flex flex-column">
            <h2 className="title-2 text-gray-1 font-0">Datos personales</h2>
            <label className="no-display-tablet">Nombre y Apellido*</label>
            <input
              className="common-input input-with-placeholder"
              onChange={handleChange}
              value={data.fullname}
              type="text"
              name="fullname"
              placeholder="Nombre y Apellido*"
            />
          </div>
          <div className="d-flex flex-column">
            <label className="no-display-tablet">E-mail*</label>
            <input
              className="common-input input-with-placeholder"
              onChange={handleChange}
              value={data.email}
              type="email"
              name="email"
              placeholder="E-mail*"
            />
          </div>
          <div className="d-flex flex-column">
            <label className="no-display-tablet">Teléfono / Whatsapp</label>
            <input
              className="common-input input-with-placeholder"
              onChange={handleChange}
              value={data.phone}
              type="text"
              name="phone"
              placeholder="Teléfono / Whatsapp"
            />
          </div>
          <div className="d-flex flex-column">
            <h2 className="title-2 text-gray-1 font-0">Datos de acceso</h2>
            <label className="no-display-tablet">Usuario</label>
            <input
              className="common-input input-with-placeholder"
              onChange={handleChange}
              value={data.username}
              type="text"
              name="username"
              placeholder="Usuario"
            />
          </div>
          <div className="d-flex flex-column">
            <label className="no-display-tablet">Contraseña*</label>
            <input
              className="common-input input-with-placeholder"
              onChange={handleChange}
              value={data.password}
              type="password"
              name="password"
              placeholder="Contraseña*"
            />
          </div>
          <div className="d-flex flex-column">
            <label className="no-display-tablet">Reingrese Contraseña*</label>
            <input
              className="common-input input-with-placeholder"
              onChange={handleChange}
              value={data.repassword}
              type="password"
              name="repassword"
              placeholder="Reingrese Contraseña*"
            />
          </div>
          <div className="d-flex flex-column">
            <label className="no-display-tablet">Sobre mi</label>
            <textarea
              className="common-input input-with-placeholder"
              onChange={handleChange}
              value={data.aboutme}
              name="aboutme"
              placeholder="Sobre mi"
            ></textarea>
          </div>
        </div>

        <div className="save-button-wrapper">
          <button className="blue-button">Guardar</button>
        </div>
      </div>
    </div>
  );
}
