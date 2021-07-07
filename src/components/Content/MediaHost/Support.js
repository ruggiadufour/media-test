import React, { useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../Breadcrumb";
import SearchIcon from "../../../assets/svgs/search-icon.svg";
import ArrowUpIcon from "../../../assets/svgs/arrow-up-icon.svg";
import AddIcon from "../../../assets/svgs/add-icon.svg";

// Mock data
const tables = [
  [
    {
      number: "#12346578",
      matter: "Consulta sobre Plan de Hosting",
      state: false,
      last_update: "01/01/2021 / 12:45hs",
    },
    {
      number: "#12346578",
      matter: "Consulta sobre Plan de Hosting",
      state: true,
      last_update: "01/01/2021 / 12:45hs",
    },
    {
      number: "#12346578",
      matter: "Consulta sobre Plan de Hosting",
      state: false,
      last_update: "01/01/2021 / 12:45hs",
    },
    {
      number: "#12346578",
      matter: "Consulta sobre Plan de Hosting",
      state: false,
      last_update: "01/01/2021 / 12:45hs",
    },
    {
      number: "#12346578",
      matter: "Consulta sobre Plan de Hosting",
      state: false,
      last_update: "01/01/2021 / 12:45hs",
    },
  ],
];

export default function Support() {
  const breadcrumb_items = [
    {
      text: "MediaHost®",
      route:"/media-host/acerca"
    },
    {
      text: "Soporte",
    },
  ];
  return (
    <div className="content">
      <div>
        <Breadcrumb items={breadcrumb_items} />

        <div className="d-flex flex-wrap justify-content-between">
          <h1 className="title-1 m-0">Soporte</h1>

          <Link
            to="/clientes/mediacore/contenido/media-host/soporte/crear-ticket"
            className="text-decoration-none text-gray-9 d-flex justify-content-center align-items-center gap-2"
          >
            <img src={AddIcon} alt="abrir nuevo ticket" />
            <p className="font-1 p-0 m-0">Abrir nuevo Ticket</p>
          </Link>
        </div>
      </div>

      <div className="account-state">
        <div className="input-search-period">
          <input type="text" placeholder="Buscar" />
          <img src={SearchIcon} alt="buscar periodo" width="15px" />
        </div>

        <div className="tables-wrapper">
          {tables.map((tickets, i) => (
            <TicketTable tickets={tickets} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

function TicketTable({ tickets }) {
  const [open, setOpen] = useState(true);
  function handleOpen() {
    setOpen((o) => !o);
  }

  return (
    <table className="common-table">
      <thead>
        <tr onClick={handleOpen}>
          <th className="width-100">
            <button className="arrow-icon-button">
              <img
                className={`${open ? "" : "rotate-icon-180"}`}
                src={ArrowUpIcon}
                alt="abrir tabla"
              />
            </button>
            Número de Ticket 
          </th>
          <th>Asunto</th>
          <th>Estado</th>
          <th>Última actualización</th>
        </tr>
      </thead>

      <tbody
        hidden={!open}
        className={`${open ? "open-table-content" : "close-table-content"}`}
      >
        {tickets.map((ticket, i) => (
          <tr key={i}>
            <td >{ticket.number}</td>
            <td>{ticket.matter}</td>
            <td>
              <div className={`font-1 state-${ticket.state}`}>
                {ticket.state ? "ABIERTO" : "PENDIENTE"}
              </div>
            </td>
            <td>{ticket.last_update}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
