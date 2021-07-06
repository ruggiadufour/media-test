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
const news = [
  {
    title: "Media Haus 1",
    important: false,
    creator: "Hernán Obarrio",
    date: "18/02/2021",
    finished: false,
  },
  {
    title: "Media Haus 2",
    important: true,
    creator: "Hernán Obarrio",
    date: "18/02/2021",
    finished: false,
  },
  {
    title: "Media Haus 3",
    important: true,
    creator: "Hernán Obarrio",
    date: "18/02/2021",
    finished: false,
  },
  {
    title: "Media Haus 4",
    important: false,
    creator: "Hernán Obarrio",
    date: "18/02/2021",
    finished: false,
  },
  {
    title: "Media Haus 5",
    important: false,
    creator: "Hernán Obarrio",
    date: "18/02/2021",
    finished: false,
  },
  {
    title: "Media Haus 6",
    important: false,
    creator: "Hernán Obarrio",
    date: "18/02/2021",
    finished: false,
  },
  {
    title: "Media Haus 7",
    important: false,
    creator: "Hernán Obarrio",
    date: "18/02/2021",
    finished: true,
  },
];

export default function News() {
  const breadcrumb_items = [
    {
      text: "MediaBlog®",
    },
    {
      text: "Novedades",
    },
  ];
  return (
    <div className="content">
      <div>
        <Breadcrumb items={breadcrumb_items} />

        <div className="d-flex flex-wrap justify-content-between">
          <h1 className="title-1 font-2 m-0">Novedades</h1>

          <Link
            to="/clientes/mediacore/contenido/media-blog/novedades/crear-novedad"
            className="text-decoration-none text-gray-9 d-flex justify-content-center align-items-center gap-2"
          >
            <img src={AddIcon} alt="abrir nuevo ticket" />
            <p className="font-1 p-0 m-0">Nueva Novedad</p>
          </Link>
        </div>
      </div>

      <div className="account-state">
        <div className="input-search-period">
          <input type="text" placeholder="Palabra clave" />
          <img src={SearchIcon} alt="buscar periodo" width="15px" />
        </div>

        <div className="tables-wrapper">
          <NewsTable news={news.filter((new_) => new_.finished === false)} />
        </div>
        <div className="tables-wrapper">
          <NewsTable
            news={news.filter((new_) => new_.finished === true)}
            isFinished={true}
          />
        </div>
      </div>
    </div>
  );
}

function NewsTable({ news, isFinished = false }) {
  const [open, setOpen] = useState(true);
  function handleOpen() {
    setOpen((o) => !o);
  }

  return (
    <table className="common-table">
      <thead>
        {isFinished ? (
          <tr onClick={handleOpen}>
            <th>
              <button className="arrow-icon-button">
                <img
                  className={`${open ? "" : "rotate-icon-180"}`}
                  src={ArrowUpIcon}
                  alt="abrir tabla"
                />
              </button>
              Finalizadas
            </th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        ) : (
          <tr onClick={handleOpen}>
            <th>
              <button className="arrow-icon-button">
                <img
                  className={`${open ? "" : "rotate-icon-180"}`}
                  src={ArrowUpIcon}
                  alt="abrir tabla"
                />
              </button>
              Actuales
            </th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        )}
      </thead>

      <tbody
        hidden={!open}
        className={`${open ? "open-table-content" : "close-table-content"}`}
      >
        <tr className="text-nowrap">
          <td>Título de la Nota</td>
          <td>Nota Destacada</td>
          <td>Creador</td>
          <td>Fecha</td>
          <td>Acciones</td>
        </tr>
        {news.map((new_, i) => (
          <tr key={i} className="text-nowrap">
            <td>{new_.title}</td>
            <td>
              <input type="checkbox" className="checkbox" checked={new_.important} onChange={()=>{}} />
            </td>
            <td>
                <img src={Avatar} alt="creador de la novedad" className="me-2" width="35px" />
                {new_.creator}
            </td>
            <td>{new_.date}</td>
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
