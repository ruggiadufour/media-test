import React from "react";
import AddIcon from "../../../../assets/svgs/add-icon.svg";
import EditIcon from "../../../../assets/svgs/edit-icon.svg";
import DeleteIcon from "../../../../assets/svgs/delete-icon.svg";
import Wrapper_2 from "../../Wrapper_2";
import Table from '../../Table'

import { routes } from "../../../../static_data/routes";

// Mock data
const rooms = [
  {
    id: "1",
    name: "Gaspar Campos",
    type: "Virtual",
    active: "Si",
  },
  {
    id: "2",
    name: "Gaspar Campos",
    type: "Presencial",
    active: "Si",
  },
  {
    id: "3",
    name: "Gaspar Campos",
    type: "Virtual",
    active: "Si",
  },
  {
    id: "4",
    name: "Gaspar Campos",
    type: "Virtual",
    active: "Si",
  },
];

export default function Rooms() {
  const breadcrumbItems = [
    {
      text: "MediaBroker®",
      route: routes.mediaBroker.about,
    },
    {
      text: "Salas",
      route: routes.mediaBroker.rooms,
    },
  ];
  return (
    <Wrapper_2
      breadcrumbItems={breadcrumbItems}
      title="Salas"
      rightLink={{
        text: "Nueva Sala",
        icon: AddIcon,
        route: routes.mediaBroker.createRoom,
      }}
    >
      <div className="content-mobile-padding w-100">
        <div className="tables-wrapper">
          <RoomsTable rooms={rooms} />
        </div>
      </div>
    </Wrapper_2>
  );
}

function RoomsTable({ rooms }) {
  return (
    <Table
      TableHeader={
        <tr>
          <th className="width-100">ID</th>
          <th>Nombre</th>
          <th>Tipo</th>
          <th>Activo</th>
          <th>Acciones</th>
        </tr>
      }
      TableRows={rooms.map((room, i) => (
        <tr key={i} className="text-nowrap">
          <td>{room.id}</td>
          <td>{room.name}</td>
          <td>{room.type}</td>
          <td>{room.active}</td>
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
