import React from "react";
import Breadcrumb from "../Breadcrumb";
import PlayIcon from "../../../assets/svgs/play-icon.svg";
import BlueScreen from "../../../assets/images/temporal/blue-screen.svg";

export default function About() {
  const breadcrumb_items = [
    {
      text: "MediaAcademy®",
    },
    {
      text: "Servicio MediaAcademy®",
    },
  ];
  return (
    <div className="content">
      <div>
        <Breadcrumb items={breadcrumb_items} />
        <h1 className="title-1">Acerca de MediaAcademy®</h1>
      </div>

      <div className="ma-about">
        <hr />
        <div className="ma-about-grid">
          <div className="video">
            <img src={BlueScreen} alt="play" width="100%" />
            <img src={PlayIcon} alt="play" width="100px" />
          </div>

          <div className="ma-description">
            <h2 className="title-3 font-0 text-gray-2 fw-bold">Acerca de MediaAcademy®</h2>
            <p className="paragraph-1 font-1 text-gray-2 small-font">
              Lorem ipsum dolor sit amet consectetur adipiscing elit diam nibh,
              feugiat curae in euismod auctor neque lacus ornare, sapien fusce
              morbi nec sociosqu arcu ultricies suspendisse. Phasellus nullam ac
              tortor sociis dapibus metus commodo feugiat, luctus ornare
              lobortis habitasse curae mattis.
            </p>
            <h2 className="title-3 font-0 text-gray-2 fw-bold">Alcance</h2>
            <p className="paragraph-1 font-1 text-gray-2 small-font">
              Lorem ipsum dolor sit amet consectetur adipiscing elit diam nibh,
              feugiat curae in euismod auctor neque lacus ornare, sapien fusce
              morbi nec sociosqu arcu ultricies suspendisse. Phasellus nullam ac
              tortor sociis dapibus metus commodo feugiat, luctus ornare
              lobortis habitasse curae mattis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
