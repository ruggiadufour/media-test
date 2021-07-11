import React, { useState } from "react";
import Wrapper_1 from "../../Wrapper_1";
import Checkbox from "../../../Globals/Checkbox";
import { routes } from "../../../../static_data/routes";

// Mock data
const entrs = [
  "Media Haus 1",
  "Media Haus 2",
  "Media Haus 3",
  "Media Haus 4",
  "Media Haus 5",
  "Media Haus 6",
  "Media Haus 7",
  "Media Haus 8",
];

export default function CreateInvestor() {
  const [type, setType] = useState(1);
  const [active, setActive] = useState(false);
  const breadcrumbItems = [
    {
      text: "MediaInvestor®",
      route: routes.mediaInvestor.about,
    },
    {
      text: "Inversores",
      route: routes.mediaInvestor.investors,
    },
    {
      text: "Nuevo inversor",
      route: routes.mediaInvestor.createInvestor,
    },
  ];
  return (
    <Wrapper_1 title="Nuevo Inversor" breadcrumbItems={breadcrumbItems}>
      <div className="content-mobile-padding w-100p">
        <div className="mi-grid-create-investor">
          <div className="grid-2-col mb-1r">
            <div className="d-flex flex-column ">
              <label className="font-1">Nombre*</label>
              <input className="common-input" onChange={() => {}} type="text" />
            </div>

            <div className="d-flex flex-column ">
              <label className="font-1">Email*</label>
              <input className="common-input" onChange={() => {}} type="text" />
            </div>

            <div className="d-flex flex-column ">
              <label className="font-1">Teléfono/WhatsApp</label>
              <input className="common-input" onChange={() => {}} type="text" />
            </div>
            <div className="m-0 p-0"></div>

            <div className="d-flex flex-column ">
              <label className="font-1">Usuario*</label>
              <input className="common-input" onChange={() => {}} type="text" />
            </div>

            <div className="d-flex flex-column">
              <label className="font-1">Contraseña*</label>
              <input className="common-input" onChange={() => {}} type="text" />
            </div>
          </div>

          <div className="d-flex flex-column mb-1r">
            <label className="font-1">Emprendimientos</label>
            <div className="grid-checkboxes w-100p mt-1r justify-content-center">
              {entrs.map((entr, i) => (
                <Checkbox key={i} text={entr} />
              ))}
            </div>
          </div>

          <div className="d-flex flex-column w-100p">
            <label className="font-1">Información Extra</label>
            <textarea className="common-input h-6r" />
          </div>
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
