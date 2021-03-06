import React, { useState } from "react";
import Breadcrumb from "../../Breadcrumb";

import Wrapper_1 from "../../Wrapper_1";
import { routes } from "../../../../static_data/routes";

export default function NewFilter() {
  const breadcrumbItems = [
    {
      text: "MediaBlog┬«",
      route: routes.base,
    },
    {
      text: "Filtros",
      route: routes.mediaBlog.filters,
    },
    {
      text: "Nuevo filtro",
      route: routes.mediaBlog.createFilter,
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
