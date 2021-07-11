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
const investors = [
  {
    username: "Leo Dìaz",
    email: "leo.diaz@gmail.com",
    register: "01/01/2021",
  },
  {
    username: "Leo Dìaz",
    email: "leo.diaz@gmail.com",
    register: "01/01/2021",
  },
  {
    username: "Leo Dìaz",
    email: "leo.diaz@gmail.com",
    register: "01/01/2021",
  },
  {
    username: "Leo Dìaz",
    email: "leo.diaz@gmail.com",
    register: "01/01/2021",
  },
  {
    username: "Leo Dìaz",
    email: "leo.diaz@gmail.com",
    register: "01/01/2021",
  },
];

export default function Investors() {
  const breadcrumbItems = [
    {
      text: "MediaInvestor®",
      route: routes.mediaInvestor.about,
    },
    {
      text: "Inversores",
      route: routes.mediaInvestor.investors,
    },
  ];
  return (
    <Wrapper_2
      title="Inversores"
      breadcrumbItems={breadcrumbItems}
      rightLink={{
        route: routes.mediaInvestor.createInvestor,
        text: "Nuevo Inversor",
        icon: AddIcon,
      }}
    >
      <div className="content-mobile-padding w-100p">
        <SearchInput placeholder="Buscar" className="w-50p mb-2r" />

        <div className="tables-wrapper">
          <InvestorsTable investors={investors} />
        </div>
      </div>
    </Wrapper_2>
  );
}

function InvestorsTable({ investors }) {
  return (
    <Table
      TitleButton={``}
      TableHeader={
        <tr>
          <th className="width-100">Usuario</th>
          <th>Email</th>
          <th>Registrado</th>
          <th>Acciones</th>
        </tr>
      }
      TableRows={investors.map((investor, i) => (
        <tr key={i}>
          <td>
            <img
              src={Avatar}
              alt="creador de la novedad"
              className="me-2"
              width="35px"
            />
            {investor.username}
          </td>
          <td>{investor.email}</td>
          <td>{investor.register}</td>
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
