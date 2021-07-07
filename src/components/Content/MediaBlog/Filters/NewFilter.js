import React, { useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../Breadcrumb";
import SearchIcon from "../../../../assets/svgs/search-icon.svg";
import ArrowUpIcon from "../../../../assets/svgs/arrow-up-icon.svg";
import AddIcon from "../../../../assets/svgs/add-icon.svg";
import EditIcon from "../../../../assets/svgs/edit-icon.svg";
import DeleteIcon from "../../../../assets/svgs/delete-icon.svg";
import Avatar from "../../../../assets/images/avatar.png";

export default function News() {
  const breadcrumb_items = [
    {
      text: "MediaBlog®",
    },
    {
      text: "Filtros",
      route: "/media-blog/filtros",
    },
    {
      text: "Nuevo filtro",
    },
  ];
  return (
    <div className="content">
      <div>
        <Breadcrumb items={breadcrumb_items} />
      </div>

      <div className="my-data container1">
        <h1 className="title-1 m-0">Nuevo filtro</h1>

        <div className="container1-content">
          <label>Nombre</label>
          <input type="text" className="common-input w-100 mxw-500 mb-2" />

          <button className="blue-button mt-4">Guardar</button>
        </div>
      </div>
    </div>
  );
}
