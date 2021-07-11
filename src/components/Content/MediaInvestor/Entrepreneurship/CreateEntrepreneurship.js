import React, { useState } from "react";

import Wrapper_1 from "../../Wrapper_1";
import { routes } from "../../../../static_data/routes";

export default function CreateEntrepreneurship() {
  const breadcrumbItems = [
    {
      text: "MediaInvestor®",
      route: routes.mediaInvestor.about,
    },
    {
      text: "Emprendimientos",
      route: routes.mediaInvestor.entrepreneurships,
    },
    {
      text: "Nuevo emprendimiento",
      route: routes.mediaInvestor.createEntrepreneurship,
    },
  ];
  return (
    <Wrapper_1 breadcrumbItems={breadcrumbItems} title="Nuevo emprendimiento">
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
