import React, { useState } from "react";
import EditIcon from "../../../../assets/svgs/edit-icon.svg";
import ArrowUpIcon from "../../../../assets/svgs/arrow-up-icon.svg";
import DeleteIcon from "../../../../assets/svgs/delete-icon.svg";
import AddIcon from "../../../../assets/svgs/add-icon.svg";
import SearchIcon from "../../../../assets/svgs/search-icon.svg";
import Wrapper_2 from "../../Wrapper_2";
import Avatar from "../../../../assets/images/avatar.png";
import Table from "../../Table";

import { routes } from "../../../../static_data/routes";

// Mock data
const events = [
  {
    title: "Curso inicial",
    room: "Gaspar Campos 111",
    level: "Inicial",
    host: "Mariano López",
    date: "18/02/2021",
    type: 0,
  },
  {
    title: "Curso inicial",
    room: "Gaspar Campos 111",
    level: "Inicial",
    host: "Mariano López",
    date: "18/02/2021",
    type: 0,
  },
  {
    title: "Curso inicial",
    room: "Gaspar Campos 111",
    level: "Inicial",
    host: "Mariano López",
    date: "18/02/2021",
    type: 1,
  },
  {
    title: "Curso inicial",
    room: "Gaspar Campos 111",
    level: "Inicial",
    host: "Mariano López",
    date: "18/02/2021",
    type: 1,
  },
  {
    title: "Curso inicial",
    room: "Gaspar Campos 111",
    level: "Inicial",
    host: "Mariano López",
    date: "18/02/2021",
    type: 2,
  },
];

export default function Events() {
  const breadcrumbItems = [
    {
      text: "MediaBroker®",
      route: routes.mediaBroker.about,
    },
    {
      text: "Eventos",
      route: routes.mediaBroker.events,
    },
  ];
  return (
    <Wrapper_2
      title="Eventos"
      breadcrumbItems={breadcrumbItems}
      rightLink={{
        route: routes.mediaBroker.createEvent,
        text: "Nuevo evento",
        icon: AddIcon,
      }}
    >
      <div className="container2-content">
        <div className="mbroker-input-grid mb-2r">
          <div className="input-search-period hover-border-blue-1">
            <input
              type="text"
              placeholder="Palabra clave"
              className="focus-outline-none"
            />
            <img src={SearchIcon} alt="buscar periodo" width="15px" />
          </div>

          <select className="common-input " onChange={() => {}}>
            <option value="value1">Por Sala</option>
          </select>
          <select className="common-input " onChange={() => {}}>
            <option value="value1">Por Nivel</option>
          </select>
          <select className="common-input " onChange={() => {}}>
            <option value="value1">Por Referente</option>
          </select>
        </div>

        <div className="tables-wrapper">
          <EventsTable
            events={events.filter((event) => event.type === 0)}
            status="Hoy"
          />
        </div>
        <div className="tables-wrapper">
          <EventsTable
            events={events.filter((event) => event.type === 1)}
            status="Próximos Eventos"
          />
        </div>
        <div className="tables-wrapper">
          <EventsTable
            events={events.filter((event) => event.type === 2)}
            status="Finalizados"
          />
        </div>
      </div>
    </Wrapper_2>
  );
}

function EventsTable({ events, status }) {
  return (
    <Table
      TitleButton={
        <>
          {status} <span className="text-gray-4">( {events.length} )</span>
        </>
      }
      hasPreHeader={true}
      TableHeader={
        <tr>
          <th className="width-100">Evento</th>
          <th>Sala</th>
          <th>Nivel</th>
          <th>Referente</th>
          <th>Fecha</th>
          <th>Acciones</th>
        </tr>
      }
      TableRows={events.map((event, i) => (
        <tr key={i} className="text-nowrap">
          <td>{event.title}</td>
          <td>{event.room}</td>
          <td>{event.level}</td>
          <td>
            <img
              src={Avatar}
              alt="creador de la novedad"
              className="me-2"
              width="35px"
            />
            {event.host}
          </td>
          <td>{event.date}</td>
          <td>
            <button className="button-no-styled ">
              <img src={EditIcon} alt="editar novedad" className="me-3" />
              <img src={DeleteIcon} alt="editar novedad" />
            </button>
          </td>
        </tr>
      ))}
    />
  );
}
