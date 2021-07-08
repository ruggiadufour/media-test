import React from "react";
import AddIcon from "../../../../assets/svgs/add-icon.svg";
import EditIcon from "../../../../assets/svgs/edit-icon.svg";
import DeleteIcon from "../../../../assets/svgs/delete-icon.svg";
import Avatar from "../../../../assets/images/avatar.png";
import Wrapper_2 from "../../Wrapper_2";

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
  const breadcrumbItems = [
    {
      text: "MediaBlog®",
    },
    {
      text: "Filtros",
    },
  ];
  return (
    <Wrapper_2
      breadcrumbItems={breadcrumbItems}
      title="Filtros"
      rightLink={{
        text: "Nuevo Filtro",
        icon: AddIcon,
        route: "/media-blog/filtros/crear-filtro",
      }}
    >
      <div className="content-mobile-padding w-100">
        <div className="tables-wrapper">
          <FiltersTable filters={filters} />
        </div>
      </div>
    </Wrapper_2>
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
