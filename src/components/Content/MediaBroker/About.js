import React from "react";
import PlayIcon from "../../../assets/svgs/play-icon.svg";
import BlueScreen from "../../../assets/images/temporal/blue-screen.svg";
import Wrapper_2 from "../Wrapper_2";

export default function About() {
  const breadcrumbItems = [
    {
      text: "MediaBroker®",
    },
    {
      text: "Servicio MediaBroker®",
    },
  ];
  return (
    <Wrapper_2 title="Servicio MediaBroker®" breadcrumbItems={breadcrumbItems}>
      <div className="container2-content">
        <hr className="mt-0 mb-2r" />

        <div className="about-page-grid ">
          <div className="about-page-video">
            <img src={BlueScreen} alt="play" width="100%" />
            <img src={PlayIcon} alt="play" width="100px" />
          </div>

          <div className="about-page-description">
            <h2 className="title-3 font-0 text-gray-2 fw-bold">
              Acerca de <span className="text-blue-1">MediaBroker®</span>
            </h2>
            <p className="text-gray-2 small-font">
              Lorem ipsum dolor sit amet consectetur adipiscing elit diam nibh,
              feugiat curae in euismod auctor neque lacus ornare, sapien fusce
              morbi nec sociosqu arcu ultricies suspendisse. Phasellus nullam ac
              tortor sociis dapibus metus commodo feugiat, luctus ornare
              lobortis habitasse curae mattis.
            </p>
            <h2 className="title-3 font-0 text-gray-2 fw-bold">Alcance</h2>
            <p className="text-gray-2 small-font">
              Lorem ipsum dolor sit amet consectetur adipiscing elit diam nibh,
              feugiat curae in euismod auctor neque lacus ornare, sapien fusce
              morbi nec sociosqu arcu ultricies suspendisse. Phasellus nullam ac
              tortor sociis dapibus metus commodo feugiat, luctus ornare
              lobortis habitasse curae mattis.
            </p>
          </div>
        </div>
        <button className="blue-button mt-2r">Contratar ahora</button>
      </div>
    </Wrapper_2>
  );
}
