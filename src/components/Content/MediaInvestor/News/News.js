import React, { useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../Breadcrumb";
import SearchIcon from "../../../../assets/svgs/search-icon.svg";
import ArrowUpIcon from "../../../../assets/svgs/arrow-up-icon.svg";
import AddIcon from "../../../../assets/svgs/add-icon.svg";
import EditIcon from "../../../../assets/svgs/edit-icon.svg";
import DeleteIcon from "../../../../assets/svgs/delete-icon.svg";
import Avatar from "../../../../assets/images/avatar.png";
import Wrapper_2 from "../../Wrapper_2";
import Table from "../../Table";

import { routes } from "../../../../static_data/routes";

// Mock data
const news = [
  {
    title: "Media Haus 1",
    creator: "Hernán Obarrio",
    date: "18/02/2021",
    finished: false,
  },
  {
    title: "Media Haus 2",
    creator: "Hernán Obarrio",
    date: "18/02/2021",
    finished: false,
  },
  {
    title: "Media Haus 3",
    creator: "Hernán Obarrio",
    date: "18/02/2021",
    finished: false,
  },
  {
    title: "Media Haus 4",
    creator: "Hernán Obarrio",
    date: "18/02/2021",
    finished: false,
  },
  {
    title: "Media Haus 5",
    creator: "Hernán Obarrio",
    date: "18/02/2021",
    finished: false,
  },
  {
    title: "Media Haus 6",
    creator: "Hernán Obarrio",
    date: "18/02/2021",
    finished: false,
  },
  {
    title: "Media Haus 7",
    creator: "Hernán Obarrio",
    date: "18/02/2021",
    finished: true,
  },
];

export default function News() {
  const breadcrumbItems = [
    {
      text: "MediaInvestor®",
      route: routes.mediaInvestor.about,
    },
    {
      text: "Novedades",
      route: routes.mediaInvestor.news,
    },
  ];
  return (
    <Wrapper_2
      breadcrumbItems={breadcrumbItems}
      title="Novedades"
      rightLink={{
        text: "Nueva Novedad",
        icon: AddIcon,
        route: routes.mediaInvestor.createNew,
      }}
    >
      <div className="content-mobile-padding w-100p">
        <div className="input-search-period w-50p mb-2r">
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
    </Wrapper_2>
  );
}

function NewsTable({ news, isFinished = false }) {
  return (
    <Table
      TitleButton={
        <>
          {isFinished ? "Finalizadas " : "Actuales "}
          <span className="text-gray-4">( {news.length} )</span>
        </>
      }
      hasPreHeader={true}
      TableHeader={
        <tr className="text-nowrap">
          <th className="width-100">Título de la Nota</th>
          <th>Creador</th>
          <th>Fecha</th>
          <th>Acciones</th>
        </tr>
      }
      TableRows={news.map((new_, i) => (
        <tr key={i} className="text-nowrap">
          <td>{new_.title}</td>
          <td>
            <img
              src={Avatar}
              alt="creador de la novedad"
              className="me-2"
              width="35px"
            />
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
    />
  );
}
