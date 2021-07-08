import React, { useState } from "react";
import Breadcrumb from "../../Breadcrumb";

import Wrapper_1 from "../../Wrapper_1";

export default function NewFilter() {
  const breadcrumbItems = [
    {
      text: "MediaBlog®",
    },
    {
      text: "Filtros",
      route: "/media-blog/filtros",
    },
    {
      text: "Nuevo filtro",
    },
  ];
  return (
    <Wrapper_1 breadcrumbItems={breadcrumbItems} title="Nuevo filtro">
      <div className="content-mobile-padding w-100">
        <div className="d-flex flex-column align-items-start w-100">
          <label>Nombre</label>
          <input type="text" className="common-input w-100 mxw-500 mb-2" />

          <button className="blue-button mt-4">Guardar</button>
        </div>
      </div>
    </Wrapper_1>
  );
}
