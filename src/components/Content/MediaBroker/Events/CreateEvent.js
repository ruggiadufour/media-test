import React, { useRef, useState } from "react";
import Wrapper_1 from "../../Wrapper_1";
import InputDateTime from "../../../Globals/DateTimeInput";
import { routes } from "../../../../static_data/routes";

export default function CreateEvent() {
  const descriptionRef = useRef();
  const [dateTime, setDateTime] = useState(new Date());

  const breadcrumbItems = [
    {
      text: "MediaBroker®",
      route: routes.mediaBroker.about,
    },
    {
      text: "Eventos",
      route: routes.mediaBroker.events,
    },
    {
      text: "Nuevo evento",
      route: routes.mediaBroker.createEvent,
    },
  ];
  return (
    <Wrapper_1 title="Nuevo evento" breadcrumbItems={breadcrumbItems}>
      <div className="content-mobile-padding w-100p">
        <div className="grid-3-col">
          <div className="d-flex flex-column ">
            <label className="font-1">Sala</label>
            <select className="common-input " onChange={() => {}}>
              <option value="value1">Por Referente</option>
            </select>
          </div>
          <div className="d-flex flex-column ">
            <label className="font-1">Nivel</label>
            <select className="common-input " onChange={() => {}}>
              <option value="value1">Seleccionar</option>
            </select>
          </div>
          <div className="d-flex flex-column ">
            <label className="font-1">Referente</label>
            <select className="common-input " onChange={() => {}}>
              <option value="value1">Seleccionar</option>
            </select>
          </div>
          <div className="d-flex flex-column w-100p">
            <label className="font-1">Nombre del Evento/Capacitación</label>
            <input
              className="common-input"
              onChange={() => {}}
              type="text"
              name="event_name"
            />
          </div>
          <div className="d-flex flex-column w-100p">
            <label className="font-1">Fecha del Evento/Capacitación</label>
            <InputDateTime dateTime={dateTime} setDateTime={setDateTime} />
          </div>
        </div>

        <div className="d-flex flex-column w-100p mt-1r">
          <label className="font-1">Descripción</label>
          <div className="create-event-description">
            <textarea className="common-input-focus" />
            <button
              className="common-input-focus"
              onClick={() => {
                descriptionRef.current.click();
              }}
            >
              Agregar documentos
            </button>
            <input type="file" className="d-none" ref={descriptionRef} />
          </div>
        </div>

        <button className="blue-button mt-2r">Guardar</button>
      </div>
    </Wrapper_1>
  );
}
