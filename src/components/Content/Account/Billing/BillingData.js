import React from "react";
import Breadcrumb from "../../Breadcrumb";
import ThreeDotsIcon from "../../../../assets/svgs/three-dots-icon.svg";
import AmericanEIcon from "../../../../assets/svgs/american-express-icon.svg";
import VisaIcon from "../../../../assets/svgs/visa-icon.svg";

export default function BillingData() {
  const breadcrumb_items = [
    {
      text: "Mi Perfil",
    },
    {
      text: "Datos de facturación",
    },
  ];

  return (
    <div className="content">
      <div>
        <Breadcrumb items={breadcrumb_items} />
      </div>

      <div className="billing-data">
        <h1 className="title-1 font-2">Datos de facturación</h1>

        <div className="billing-input-grid mt-4 mb-5">
          <div className="d-flex flex-column">
            <label>CUIT</label>
            <input type="text" name="cuit" placeholder="CUIT" />
          </div>
          <div className="d-flex flex-column">
            <label>Razón Social</label>
            <input type="text" name="razon_social" placeholder="Razón Social" />
          </div>
          <div className="d-flex flex-column">
            <label>Condición Fiscal</label>
            <select
              name="condicion_fiscal"
              value=""
              placeholder="Condición Fiscal"
              onChange={()=>{}}
            >
              <option value="value1">IVA Responsable Inscripto</option>
            </select>
          </div>
          <div className="d-flex flex-column">
            <label>Régimen de Ingresos Brutos</label>
            <select
              name="regimen_ingresos"
              placeholder="Régimen de Ingresos Brutos"
              onChange={()=>{}}
            >
              <option value="value1">Multilateral</option>
            </select>
          </div>
        </div>

        <div className="billing-subtitle">
          <h2 className="title-2 text-gray-1 font-0">Domicilio Fiscal</h2>
          <hr />
        </div>

        <div className="billing-input-grid mb-5">
          <div className="d-flex flex-column">
            <label>Pais</label>
            <select name="pais" placeholder="Pais" onChange={()=>{}}>
              <option value="value1">Argentina</option>
            </select>
          </div>
          <div className="d-flex flex-column">
            <label>Provincia</label>
            <input type="text" name="provincia" placeholder="Provincia" />
          </div>
          <div className="d-flex flex-column">
            <label>Barrio</label>
            <input type="text" name="barrio" placeholder="Barrio" />
          </div>
          <div className="d-flex flex-column">
            <label>Calle</label>
            <input type="text" name="calle" placeholder="Calle" />
          </div>
          <div className="d-flex flex-column">
            <label>Número</label>
            <input type="text" name="numero" placeholder="Número" />
          </div>
          <div className="d-flex flex-column">
            <label>Depto</label>
            <input type="text" name="depto" placeholder="Depto" />
          </div>
          <div className="d-flex flex-column">
            <label>Código Postal</label>
            <input
              type="text"
              name="codigo_postal"
              placeholder="Código Postal"
            />
          </div>
        </div>

        <div className="billing-subtitle">
          <h2 className="title-2 text-gray-1 font-0">Tarjetas asociadas</h2>
          <hr />
        </div>

        <div>
          <div className="credit-card-container ">
            <CreditCard
              Icon={VisaIcon}
              ending="8762"
              bank="Visa Banco Galicia"
              expiration="04/23"
            />
            <CreditCard
              Icon={AmericanEIcon}
              ending="8762"
              bank="Amex Banco Galicia"
              expiration="04/23"
            />
          </div>
        </div>

        <button className="blue-button mt-4">Guardar</button>
      </div>
    </div>
  );
}

function CreditCard({ Icon, ending, bank, expiration }) {
  return (
    <div className="credit-card">
      <img src={ThreeDotsIcon} alt="tarjeta de crédito" />
      <img src={Icon} alt="tarjeta de crédito" />
      <div className="d-flex flex-column">
        <span>Terminada en {ending}</span>
        <span>{bank}</span>
        <span>Vencimiento {expiration}</span>
      </div>
    </div>
  );
}
