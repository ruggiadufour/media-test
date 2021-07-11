import React, { useState } from "react";
import Wrapper_1 from "../../Wrapper_1";

import { routes } from "../../../../static_data/routes";

export default function CreateRoom() {
  const [modality, setModality] = useState(false);
  const breadcrumbItems = [
    {
      text: "MediaBroker®",
      route: routes.mediaBroker.about,
    },
    {
      text: "Salas",
      route: routes.mediaBroker.rooms,
    },
    {
      text: "Nueva sala",
      route: routes.mediaBroker.createRoom,
    },
  ];
  return (
    <Wrapper_1 title="Nueva sala" breadcrumbItems={breadcrumbItems}>
      <div className="content-mobile-padding w-100p">
        <div className="d-flex flex-column ">
          <label className="font-1">Modalidad</label>
          <div className="mt-2 mb-4 d-flex">
            <span
              className={`font-1 small-font active-button-${
                modality ? "blue" : "gray"
              }`}
              onClick={() => {
                setModality((m) => true);
              }}
            >
              Presencial
            </span>
            <span
              className={`font-1 small-font active-button-${
                modality ? "gray" : "blue"
              }`}
              onClick={() => {
                setModality((m) => false);
              }}
            >
              Virtual
            </span>
          </div>
        </div>

        <div className="grid-2-col">
          <div className="d-flex flex-column ">
            <label className="font-1">Nombre</label>
            <input className="common-input" onChange={() => {}} type="text" />
          </div>
          <div className="d-flex flex-column ">
            <label className="font-1">Dirección</label>
            <input className="common-input" onChange={() => {}} type="text" />
          </div>
        </div>

        <div className="d-flex flex-column w-100p mt-1r">
          <label className="font-1">Información Extra</label>
          <textarea className="common-input h-6r" />
        </div>

        <button className="blue-button mt-2r">Guardar</button>
      </div>
    </Wrapper_1>
  );
}
