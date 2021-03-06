import React from "react";
import Breadcrumb from "../Breadcrumb";
import PlayIcon from "../../../assets/svgs/play-icon.svg";
import BlueScreen from "../../../assets/images/temporal/blue-screen.svg";
import Wrapper_2 from "../../Content/Wrapper_2";

import { routes } from "../../../static_data/routes";

export default function About() {
  const breadcrumbItems = [
    {
      text: "MediaAcademy®",
      route: routes.mediaAcademy.about,
    },
    {
      text: "Servicio MediaAcademy®",
      route: routes.mediaAcademy.about,
    },
  ];
  return (
    <Wrapper_2
      breadcrumbItems={breadcrumbItems}
      title="Acerca de MediaAcademy®"
    >
      <hr className="no-display-tablet mt-0 mb-2r" />
      <div className="content-mobile-padding">
        <div className="ma-about-grid">
          <div className="video">
            <img src={BlueScreen} alt="play" width="100%" />
            <img src={PlayIcon} alt="play" width="100px" />
          </div>

          <div className="ma-description">
            <h2 className="title-3 font-0 text-gray-2 fw-bold">
              Acerca de <span className="text-blue-1">MediaAcademy®</span>
            </h2>
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
    </Wrapper_2>
  );
}
