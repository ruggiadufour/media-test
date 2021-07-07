import React, { useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../Breadcrumb";
import SearchIcon from "../../../../assets/svgs/search-icon.svg";
import ArrowUpIcon from "../../../../assets/svgs/arrow-up-icon.svg";
import AddIcon from "../../../../assets/svgs/add-icon.svg";
import EditIcon from "../../../../assets/svgs/edit-icon.svg";
import DeleteIcon from "../../../../assets/svgs/delete-icon.svg";
import Avatar from "../../../../assets/images/avatar.png";

// Mock data
const filters = [
  {
    title: "Media Haus 1",
    creator: "Hernán Obarrio",
    date: "18/02/2021",
  },
  {
    title: "Media Haus 2",
    creator: "Hernán Obarrio",
    date: "18/02/2021",
  },
  {
    title: "Media Haus 3",
    creator: "Hernán Obarrio",
    date: "18/02/2021",
  },
  {
    title: "Media Haus 4",
    creator: "Hernán Obarrio",
    date: "18/02/2021",
  },
  {
    title: "Media Haus 5",
    creator: "Hernán Obarrio",
    date: "18/02/2021",
  },
  {
    title: "Media Haus 6",
    creator: "Hernán Obarrio",
    date: "18/02/2021",
  },
  {
    title: "Media Haus 7",
    creator: "Hernán Obarrio",
    date: "18/02/2021",
  },
];

export default function News() {
  const breadcrumb_items = [
    {
      text: "MediaBlog®",
    },
    {
      text: "Filtros",
    },
  ];
  return (
    <div className="content">
      <div>
        <Breadcrumb items={breadcrumb_items} />

        <div className="d-flex flex-wrap justify-content-between">
          <h1 className="title-1 m-0">Filtros</h1>

          <Link
            to="/clientes/mediacore/contenido/media-blog/filtros/crear-filtro"
            className="text-decoration-none text-gray-9 d-flex justify-content-center align-items-center gap-2"
          >
            <img src={AddIcon} alt="abrir nuevo ticket" />
            <p className="font-1 p-0 m-0">Nuevo Filtro</p>
          </Link>
        </div>
      </div>

      <div className="account-state">
        <div className="tables-wrapper">
          <FiltersTable filters={filters} />
        </div>
      </div>
    </div>
  );
}

function FiltersTable({ filters }) {
  return (
    <table className="common-table">
      <thead>
        <tr>
          <th className="width-100">Filtros</th>
          <th>Creador</th>
          <th>Fecha</th>
          <th>Acciones</th>
        </tr>
      </thead>

      <tbody>
        {filters.map((filter, i) => (
          <tr key={i} className="text-nowrap">
            <td>{filter.title}</td>
            <td>
              <img
                src={Avatar}
                alt="creador de la novedad"
                className="me-2"
                width="35px"
              />
              {filter.creator}
            </td>
            <td>{filter.date}</td>
            <td>
              <button className="button-no-styled ">
                <img src={EditIcon} alt="editar novedad" className="me-3" />
                <img src={DeleteIcon} alt="editar novedad" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
