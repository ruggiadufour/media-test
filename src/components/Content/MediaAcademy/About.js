import React from "react";
import PlayIcon from "../../../assets/svgs/play-icon.svg";
import BlueScreen from "../../../assets/images/temporal/blue-screen.svg";

export default function About() {
  return (
    <div className="content">
      <div>
        <ol className="breadcrumb text-gray">
          <li className="breadcrumb-item">
            <a href="#" className="link-1">MediaAcademy®</a>
          </li>
          <li className="breadcrumb-item active paragraph-1" aria-current="page">
            Servicio MediaAcademy®
          </li>
        </ol>

        <h1 className="title-1 font-2">Acerca de MediaAcademy®</h1>
      </div>

      <div className="ma-about">
        <hr />
        <div className="ma-about-grid">
          <div className="video">
            <img src={BlueScreen} alt="play" width="100%" />
            <img src={PlayIcon} alt="play" width="100px" />
          </div>

          <div className="description">
            <h2 className="title-2 font-2">Acerca de MediaAcademy®</h2>
            <p className="paragraph-1">
              Lorem ipsum dolor sit amet consectetur adipiscing elit diam nibh,
              feugiat curae in euismod auctor neque lacus ornare, sapien fusce
              morbi nec sociosqu arcu ultricies suspendisse. Phasellus nullam ac
              tortor sociis dapibus metus commodo feugiat, luctus ornare
              lobortis habitasse curae mattis.
            </p>
            <h2  className="title-2 font-2">Alcance</h2>
            <p className="paragraph-1">
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
