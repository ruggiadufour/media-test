import React, { useState } from "react";
import Breadcrumb from "../../Breadcrumb";

import DownloadIcon from "../../../../assets/svgs/download-black-icon.svg";
import DownloadGrayIcon from "../../../../assets/svgs/download-gray-icon.svg";
import EyeIcon from "../../../../assets/svgs/eye-icon.svg";
import EyeGrayIcon from "../../../../assets/svgs/eye-gray-icon.svg";
import ArrowUpIcon from "../../../../assets/svgs/arrow-up-icon.svg";
import ArrowDownIcon from "../../../../assets/svgs/arrow-down-icon.svg";
import SearchIcon from "../../../../assets/svgs/search-icon.svg";
import CheckedIcon from "../../../../assets/svgs/checked-icon.svg";

// mock data
const periods = [
  [
    {
      period: "Abril 2021",
      price: "$8.470",
      state: false,
      date: "01/04/2021",
      expiration: "15/04/2021",
      imputation: "-",
    },
    {
      period: "Abril 2021",
      price: "$8.470",
      state: true,
      date: "01/04/2021",
      expiration: "15/04/2021",
      imputation: "-",
    },
    {
      period: "Abril 2021",
      price: "$8.470",
      state: true,
      date: "01/04/2021",
      expiration: "15/04/2021",
      imputation: "-",
    },
    {
      period: "Abril 2021",
      price: "$8.470",
      state: true,
      date: "01/04/2021",
      expiration: "15/04/2021",
      imputation: "-",
    },
  ],
  [
    {
      period: "Abril 2021",
      price: "$8.470",
      state: false,
      date: "01/04/2021",
      expiration: "15/04/2021",
      imputation: "-",
    },
    {
      period: "Abril 2021",
      price: "$8.470",
      state: true,
      date: "01/04/2021",
      expiration: "15/04/2021",
      imputation: "-",
    },
    {
      period: "Abril 2021",
      price: "$8.470",
      state: true,
      date: "01/04/2021",
      expiration: "15/04/2021",
      imputation: "-",
    },
    {
      period: "Abril 2021",
      price: "$8.470",
      state: true,
      date: "01/04/2021",
      expiration: "15/04/2021",
      imputation: "-",
    },
  ],
];

const AccountState = () => {
  const breadcrumb_items = [
    {
      text: "Mi Perfil",
    },
    {
      text: "Estado de cuenta",
    },
  ];

  return (
    <div className="content">
      <div>
        <Breadcrumb items={breadcrumb_items} />

        <div className="d-flex flex-wrap justify-content-between">
          <h1 className="title-1 font-2">Estado de cuenta</h1>
          <span className="font-1">
            <img src={CheckedIcon} alt="estás al día con tus pagos" />
            <strong> ¡Estás al día con tus Pagos!</strong>
          </span>
        </div>
      </div>

      <div className="account-state">
        <div className="input-search-period">
          <input type="text" placeholder="Buscar" />
          <img src={SearchIcon} alt="buscar periodo" width="15px" />
        </div>

        <div className="period-tables">
          {periods.map((period, i) => (
            <PeriodTable period={period} key={i} />
          ))}
        </div>

        <hr />
        <div className="text-center mt-4">
          <a href="#" className="text-dark font-1">
            VER MÁS
          </a>
        </div>
      </div>
    </div>
  );
};

function PeriodTable({ period }) {
  const [open, setOpen] = useState(true);
  function handleOpen() {
    setOpen((o) => !o);
    console.log("ss");
  }

  return (
    <table className="period-table">
      <thead>
        <tr onClick={handleOpen} className="period-table-header">
          <th>
            <button className="arrow-icon-button">
              <img
                className={`${open ? "" : "rotate-icon-180"}`}
                src={ArrowUpIcon}
                alt="abrir tabla"
              />
            </button>
            Período <span className="text-gray-4">( 4 )</span>
          </th>
          <th>Monto Final</th>
          <th>Estado</th>
          <th>Fecha de envio FC</th>
          <th>Vencimiento FC</th>
          <th>Fecha Imputación</th>
          <th>Acciones</th>
        </tr>
      </thead>

      <tbody
        hidden={!open}
        className={`${open ? "open-table-content" : "close-table-content"}`}
      >
        {period.map((data, i) => (
          <tr key={i}>
            <td className={`${data.state ? "" : "text-blue-1 fw-bold"}`}>
              {data.period}
            </td>
            <td>{data.price}</td>
            <td>
              <span className={`period-state-${data.state}`}>
                {data.state ? "PAGADA" : "PENDIENTE"}
              </span>
            </td>
            <td>{data.date}</td>
            <td>{data.expiration}</td>
            <td>{data.imputation}</td>
            <td>
              <button
                disabled={!data.state}
                className="arrow-icon-button disabled={data.state} me-2"
              >
                {data.state ? (
                  <img src={EyeIcon} alt="mirar facturacion" />
                ) : (
                  <img src={EyeGrayIcon} alt="mirar facturacion" />
                )}
              </button>
              <button disabled={!data.state} className="arrow-icon-button">
                {data.state ? (
                  <img src={DownloadIcon} alt="mirar facturacion" />
                ) : (
                  <img src={DownloadGrayIcon} alt="mirar facturacion" />
                )}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default AccountState;
