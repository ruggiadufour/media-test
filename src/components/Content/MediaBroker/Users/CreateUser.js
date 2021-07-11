import React, { useState } from "react";
import Wrapper_1 from "../../Wrapper_1";

import { routes } from "../../../../static_data/routes";

export default function CreateUser() {
  const [type, setType] = useState(1);
  const [active, setActive] = useState(false);
  const breadcrumbItems = [
    {
      text: "MediaBroker®",
      route: routes.mediaBroker.about,
    },
    {
      text: "Usuarios",
      route: routes.mediaBroker.users,
    },
    {
      text: "Nuevo usuario",
      route: routes.mediaBroker.createUser,
    },
  ];
  return (
    <Wrapper_1 title="Nuevo usuario" breadcrumbItems={breadcrumbItems}>
      <div className="content-mobile-padding w-100p">
        <div className="grid-3-col">
          <div className="d-flex flex-column ">
            <label className="font-1">Tipo*</label>
            <div className="d-flex gap-1">
              <span
                className={`font-1 small-font active-button-${
                  type == 1 ? "blue" : "gray"
                }`}
                onClick={() => {
                  setType(1);
                }}
              >
                Coordinador
              </span>
              <span
                className={`font-1 small-font active-button-${
                  type == 2 ? "blue" : "gray"
                }`}
                onClick={() => {
                  setType(2);
                }}
              >
                Referente
              </span>
              <span
                className={`font-1 small-font active-button-${
                  type == 3 ? "blue" : "gray"
                }`}
                onClick={() => {
                  setType(3);
                }}
              >
                Asesor
              </span>
            </div>
          </div>

          <div className="d-flex flex-column ">
            <label className={`font-1 ${type !== 3 ? "text-gray-13" : ""}`}>
              Nivel
            </label>
            <select
              disabled={type !== 3}
              className="common-input "
              onChange={() => {}}
            >
              <option value="value1">Inicial</option>
              <option value="value2">Intermedio</option>
              <option value="value3">Avanzado</option>
            </select>
          </div>
        </div>

        <div className="grid-3-col mt-3">
          <div className="d-flex flex-column ">
            <label className="font-1">Nombre*</label>
            <input className="common-input" onChange={() => {}} type="text" />
          </div>

          <div className="d-flex flex-column ">
            <label className="font-1">Email*</label>
            <input className="common-input" onChange={() => {}} type="text" />
          </div>

          <div className="d-flex flex-column ">
            <label className="font-1">Teléfono/WhatsApp*</label>
            <input className="common-input" onChange={() => {}} type="text" />
          </div>
        </div>

        <div className="grid-3-col mt-3">
          <div className="d-flex flex-column ">
            <label className="font-1">Usuario*</label>
            <input className="common-input" onChange={() => {}} type="text" />
          </div>

          <div className="d-flex flex-column">
            <label className="font-1">Contraseña*</label>
            <input className="common-input" onChange={() => {}} type="text" />
          </div>
        </div>

        <div className="d-flex flex-column w-100p mt-1r">
          <label className="font-1">Información Extra</label>
          <textarea className="common-input h-6r" />
        </div>

        <div className="new-ticket-inputs-2 mt-2r">
          <label className="font-1">Activo</label>
          <div className="mt-2 mb-4 d-flex">
            <span
              className={`font-1 small-font active-button-${
                active ? "black" : "gray"
              }`}
              onClick={() => {
                setActive((a) => true);
              }}
            >
              Si
            </span>
            <span
              className={`font-1 small-font active-button-${
                active ? "gray" : "black"
              }`}
              onClick={() => {
                setActive((a) => false);
              }}
            >
              No
            </span>
          </div>
        </div>

        <button className="blue-button mt-1r">Guardar</button>
      </div>
    </Wrapper_1>
  );
}
