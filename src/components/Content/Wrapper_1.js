import React from "react";
import Breadcrumb from "./Breadcrumb";

export default function Wrapper_1({ breadcrumbItems, rightLink }) {
  return (
    <div className="content">
      <div>
        <Breadcrumb items={breadcrumb_items} />

        <div className="d-flex flex-wrap justify-content-between">
          <h1 className="title-1 m-0">Filtros</h1>

          {rightLink && (
            <Link
              to="/clientes/mediacore/contenido/media-blog/filtros/crear-filtro"
              className="text-decoration-none text-gray-9 d-flex justify-content-center align-items-center gap-2"
            >
              <img src={AddIcon} alt="abrir nuevo ticket" />
              <p className="font-1 p-0 m-0">Nuevo Filtro</p>
            </Link>
          )}
        </div>
      </div>

      <div className="container2">{children}</div>
    </div>
  );
}
