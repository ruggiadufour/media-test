import React, { useState } from "react";
import { Link } from "react-router-dom";
import EditIcon from "../../../../assets/svgs/edit-icon.svg";
import DeleteIcon from "../../../../assets/svgs/delete-icon.svg";
import AddIcon from "../../../../assets/svgs/add-icon.svg";
import Avatar from "../../../../assets/images/avatar.png";
import Wrapper_2 from "../../Wrapper_2";
import SearchInput from "../../../Globals/SearchInput";
import Table from "../../Table";

import { routes } from "../../../../static_data/routes";

// Mock data
const entrepreneurships = [
  {
    name: "MediaHaus 1",
    creator: "Hernán Obarrio",
    date: "01/01/2021",
  },
  {
    name: "MediaHaus 1",
    creator: "Hernán Obarrio",
    date: "01/01/2021",
  },
  {
    name: "MediaHaus 1",
    creator: "Hernán Obarrio",
    date: "01/01/2021",
  },
  {
    name: "MediaHaus 1",
    creator: "Hernán Obarrio",
    date: "01/01/2021",
  },
  {
    name: "MediaHaus 1",
    creator: "Hernán Obarrio",
    date: "01/01/2021",
  },
];

export default function Entrepreneurship() {
  const breadcrumbItems = [
    {
      text: "MediaInvestor®",
      route: routes.mediaInvestor.about,
    },
    {
      text: "Emprendimientos",
      route: routes.mediaInvestor.entrepreneurships,
    },
  ];
  return (
    <Wrapper_2
      title="Emprendimientos"
      breadcrumbItems={breadcrumbItems}
      rightLink={{
        route: routes.mediaInvestor.createEntrepreneurship,
        text: "Nuevo Emprendimiento",
        icon: AddIcon,
      }}
    >
      <div className="content-mobile-padding w-100p">
        <SearchInput placeholder="Buscar" className="w-50p mb-2r" />

        <div className="tables-wrapper">
          <EntrepreneurshipTable entrepreneurships={entrepreneurships} />
        </div>
      </div>
    </Wrapper_2>
  );
}

function EntrepreneurshipTable({ entrepreneurships }) {
  return (
    <Table
      TitleButton={``}
      TableHeader={
        <tr className="text-nowrap">
          <th className="width-300">Nombre del Emprendimiento</th>
          <th>Creador</th>
          <th>Fecha</th>
          <th>Acciones</th>
        </tr>
      }
      TableRows={entrepreneurships.map((etp, i) => (
        <tr key={i}>
          <td>{etp.name}</td>
          <td>
            <img
              src={Avatar}
              alt="creador de la novedad"
              className="me-2"
              width="35px"
            />
            {etp.creator}
          </td>
          <td>{etp.date}</td>
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
