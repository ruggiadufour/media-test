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
import Wrapper_2 from "../../Wrapper_2";
import Table from "../../Table";

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
  const breadcrumbItems = [
    {
      text: "Mi Perfil",
      route: "/mi-perfil/mis-datos",
    },
    {
      text: "Estado de cuenta",
    },
  ];

  return (
    <Wrapper_2
      breadcrumbItems={breadcrumbItems}
      title="Estado de cuenta"
      rightMessage={{
        text: "¡Estás al día con tus Pagos!",
        icon: CheckedIcon,
      }}
    >
      <div className="content-mobile-padding">
        <div className="input-search-period w-50p mb-2r">
          <input type="text" placeholder="Buscar" />
          <img src={SearchIcon} alt="buscar periodo" width="15px" />
        </div>

        <div className="tables-wrapper">
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
    </Wrapper_2>
  );
};

function PeriodTable({ period }) {
  const [open, setOpen] = useState(true);
  function handleOpen() {
    setOpen((o) => !o);
    console.log("ss");
  }

  return (
    <Table
      TitleButton={``}
      TableHeader={
        <tr className="text-nowrap">
          <th>
            Período <span className="text-gray-4">( {period.length} )</span>
          </th>
          <th>Monto Final</th>
          <th>Estado</th>
          <th>Fecha de envio FC</th>
          <th>Vencimiento FC</th>
          <th>Fecha Imputación</th>
          <th>Acciones</th>
        </tr>
      }
      TableRows={period.map((data, i) => (
        <tr key={i}>
          <td className={`${data.state ? "" : "text-blue-1 fw-bold"}`}>
            {data.period}
          </td>
          <td>{data.price}</td>
          <td>
            <div className={`state-${data.state}`}>
              {data.state ? "PAGADA" : "PENDIENTE"}
            </div>
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
    />
  );
}

export default AccountState;
