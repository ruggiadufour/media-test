import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../../assets/svgs/brand-logo.svg";
import Wrapper_2 from "../../Wrapper_2";
export default function CardNew({
  image,
  title,
  description,
  date,
  isFirst = false,
  route,
}) {
  return (
    <div className="new-card position-relative">
      <img src={image} alt={title} />
      <div>
        <h2 className="title-2 font-1 fw-bold text-white mb-3">{title}</h2>
        <p className="font-1 text-white paragraph-1">
          {description.length < 120
            ? description
            : description.slice(0, 120) + "..."}
        </p>

        <div className="button-date-container">
          <div>
            <Link
              to="/clientes/mediacore/contenido/media-academy/novedades/titulo-novedad"
              className="blue-button text-decoration-none"
            >
              Ver
            </Link>
          </div>
          <span className="text-white font-1 small-font">{date}</span>
        </div>
      </div>
      {isFirst && (
        <img
          className="brand-logo-in-banner"
          height="60px"
          src={Logo}
          alt="mediahaus logo"
        />
      )}
    </div>
  );
}
