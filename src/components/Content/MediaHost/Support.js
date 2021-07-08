import React, { useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../Breadcrumb";
import SearchIcon from "../../../assets/svgs/search-icon.svg";
import ArrowUpIcon from "../../../assets/svgs/arrow-up-icon.svg";
import AddIcon from "../../../assets/svgs/add-icon.svg";
import Wrapper_2 from "../Wrapper_2";
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
  const breadcrumbItems = [
    {
      text: "MediaHost®",
      route: "/media-host/acerca",
    },
    {
      text: "Soporte",
    },
  ];
  return (
    <Wrapper_2
      title="Soporte"
      breadcrumbItems={breadcrumbItems}
      rightLink={{
        route: "/media-host/soporte/crear-ticket",
        text: "Abrir nuevo Ticket",
        icon: AddIcon,
      }}
    >
      <div className="content-mobile-padding w-100p">
        <div className="input-search-period w-50p mb-2r">
          <input type="text" placeholder="Buscar" />
          <img src={SearchIcon} alt="buscar periodo" width="15px" />
        </div>

        <div className="tables-wrapper">
          {tables.map((tickets, i) => (
            <TicketTable tickets={tickets} key={i} />
          ))}
        </div>
      </div>
    </Wrapper_2>
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
            <td>{ticket.number}</td>
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
