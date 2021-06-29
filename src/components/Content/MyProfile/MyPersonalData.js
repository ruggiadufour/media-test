import React, { useState, useRef } from "react";
import "./MyProfile.scss";
import "../Content.scss";
import PencilIcon from '../../../assets/svgs/pencil-icon.svg'
import Avatar from '../../../assets/images/avatar.png'
import Background from '../../../assets/images/login-background.png'

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
        <ol className="breadcrumb text-gray">
          <li className="breadcrumb-item">
            <a href="#">Mi Perfil</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Mis datos personales
          </li>
        </ol>
        <h1>Hola, Rubén!</h1>
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
            <img
              src={PencilIcon}
              width="20px"
              alt="edit banner image icon"
            />
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
                width="20px"
                alt="edit profile image icon"
              />
            </button>
          </div>
          <input type="file" ref={inputFileBanner} className="d-none" />
          <input type="file" ref={inputFileProfile} className="d-none" />
        </div>

        <div className="input-grid">
          <div className="d-flex flex-column">
            <h2>Datos personales</h2>
            <label>Nombre y Apellido*</label>
            <input
              onChange={handleChange}
              value={data.fullname}
              type="text"
              name="fullname"
              placeholder="Nombre y Apellido*"
            />
          </div>
          <div className="d-flex flex-column">
            <label>E-mail*</label>
            <input
              onChange={handleChange}
              value={data.email}
              type="text"
              name="email"
              placeholder="E-mail*"
            />
          </div>
          <div className="d-flex flex-column">
            <label>Teléfono / Whatsapp</label>
            <input
              onChange={handleChange}
              value={data.phone}
              type="text"
              name="phone"
              placeholder="Teléfono / Whatsapp"
            />
          </div>
          <div className="d-flex flex-column">
            <h2>Datos de acceso</h2>
            <label>Usuario</label>
            <input
              onChange={handleChange}
              value={data.username}
              type="text"
              name="username"
              placeholder="Usuario"
            />
          </div>
          <div className="d-flex flex-column">
            <label>Contraseña*</label>
            <input
              onChange={handleChange}
              value={data.password}
              type="text"
              name="password"
              placeholder="Contraseña*"
            />
          </div>
          <div className="d-flex flex-column">
            <label>Reingrese Contraseña*</label>
            <input
              onChange={handleChange}
              value={data.repassword}
              type="text"
              name="repassword"
              placeholder="Reingrese Contraseña*"
            />
          </div>
          <div className="d-flex flex-column">
            <label>Sobre mi</label>
            <textarea
              onChange={handleChange}
              value={data.aboutme}
              name="aboutme"
              placeholder="Sobre mi"
            ></textarea>
          </div>
        </div>

        <div className="save-button-wrapper">
          <button className="save-data-button">Guardar</button>
        </div>
      </div>
    </div>
  );
}
