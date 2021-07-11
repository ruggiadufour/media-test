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
import Table from '../../Table'

import { routes } from "../../../../static_data/routes";

// Mock data
const users = [
  {
    username: "LeoDix",
    name: "Leo Díaz",
    type: "Coordinador",
    registration: "18/02/2021",
    email: "leo.diaz@mediahaus.com",
  },
  {
    username: "LeoDix",
    name: "Leo Díaz",
    type: "Asesor",
    registration: "18/02/2021",
    email: "leo.diaz@mediahaus.com",
  },
  {
    username: "LeoDix",
    name: "Leo Díaz",
    type: "Asesor",
    registration: "18/02/2021",
    email: "leo.diaz@mediahaus.com",
  },
  {
    username: "LeoDix",
    name: "Leo Díaz",
    type: "Coordinador",
    registration: "18/02/2021",
    email: "leo.diaz@mediahaus.com",
  },
];

export default function News() {
  const breadcrumbItems = [
    {
      text: "MediaBroker®",
      route: routes.mediaBroker.about,
    },
    {
      text: "Usuarios",
      route: routes.mediaBroker.users,
    },
  ];
  return (
    <Wrapper_2
      breadcrumbItems={breadcrumbItems}
      title="Usuarios"
      rightLink={{
        text: "Nuevo Usuario",
        icon: AddIcon,
        route: routes.mediaBroker.createUser,
      }}
    >
      <div className="content-mobile-padding w-100p">
        <div className="d-flex flex-wrap gap-3 mb-2r">
          <div className="input-search-period w-50p">
            <input type="text" placeholder="Palabra clave" />
            <img src={SearchIcon} alt="buscar periodo" width="15px" />
          </div>
          <select
            className="common-input input-search-period w-25p"
            onChange={() => {}}
          >
            <option value="value1">Tipo de Usuario</option>
          </select>
        </div>

        <div className="tables-wrapper">
          <UsersTable users={users} />
        </div>
      </div>
    </Wrapper_2>
  );
}

function UsersTable({ users }) {
  return (
    <Table
      TableHeader={
        <tr>
          <th className="width-200">Usuario</th>
          <th>Nombre</th>
          <th>Tipo de Usuario</th>
          <th>Email</th>
          <th>Registrado</th>
          <th>Acciones</th>
        </tr>
      }
      TableRows={users.map((user, i) => (
        <tr key={i} className="text-nowrap">
          <td>
            <img src={Avatar} alt="usuario" className="me-2" width="35px" />
            {user.username}
          </td>
          <td>{user.name}</td>
          <td>{user.type}</td>
          <td>{user.email}</td>
          <td>{user.registration}</td>
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
