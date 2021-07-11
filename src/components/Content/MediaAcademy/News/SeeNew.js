import React from "react";
import Breadcrumb from "../../Breadcrumb";
import { Link } from "react-router-dom";
import CardNew from "./CardNew";
import ImageInstagram from "../../../../assets/images/temporal/instagram-post.png";
import ImageVideo from "../../../../assets/images/temporal/video.png";
import ImageBuilding from "../../../../assets/images/temporal/build.png";
import Logo from "../../../../assets/svgs/brand-logo.svg";
import DownloadIcon from "../../../../assets/svgs/download-icon.svg";

import { routes } from "../../../../static_data/routes";

export default function SeeNew() {
  const breadcrumb_items = [
    {
      text: "MediaAcademy®",
      route: routes.mediaAcademy.about,
    },
    {
      text: "Novedades",
      route: routes.mediaAcademy.news,
    },
    {
      text: "Ultimas tendencias",
      route: routes.mediaAcademy.new,
    },
  ];

  return (
    <div className="content">
      <div>
        <Breadcrumb items={breadcrumb_items} />
      </div>

      <div className="ma-see-news">
        <div className="position-relative">
          <span id="fake-title" className="title-1">
            Novedades
          </span>
          <div className="ma-see-container-left mt-2 ">
            <div className="position-relative">
              <img
                className="brand-logo-in-banner"
                height="50px"
                src={Logo}
                alt="mediahaus logo"
              />
              <img
                className="new-image-banner"
                src={ImageInstagram}
                alt={`banner`}
              />
            </div>
            <div className="content-new position-relative">
              <h1 className="title-2 font-1">
                Ultimas tendencias en Marketing inmobiliario.
              </h1>
              <span className="text-blue-1 font-1">5 de Abril 2021</span>
              <br />
              <br />
              <p className="paragraph-1 font-1">
                Accumsan condimentum id lacus phasellus curae faucibus, augue
                libero vitae a urna dignissim metus, ornare vel imperdiet risus
                quam. Scelerisque habitant nec curabitur nam bibendum facilisi
                inceptos etiam non malesuada mus nunc, sodales mollis ac eget
                netus cursus fusce duis molestie ad felis. Ornare sem mi
                pellentesque porta mattis velit facilisi aenean urna, fermentum
                ante sollicitudin dignissim dis non a lacinia vitae bibendum,
                laoreet quis donec libero nec nibh aliquet auctor. Curabitur nam
                bibendum facilisi inceptos etiam non malesuada mus nunc, sodales
                mollis ac eget netus cursus fusce duis molestie ad felis. Ornare
                sem mi pellentesque porta mattis velit facilisi aenean urna,
                fermentum ante sollicitudin dignissim dis non a lacinia vitae
                bibendum, laoreet quis donec libero nec nibh aliquet auctor.
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipiscing elit diam
                nibh, feugiat curae in euismod auctor neque lacus ornare, sapien
                fusce morbi nec sociosqu arcu ultricies suspendisse. Phasellus
                nullam ac tortor sociis dapibus metus commodo feugiat, luctus
                ornare lobortis habitasse curae mattis vivamus quam, class
                egestas pretium tristique cum rutrum nam. Egestas porta bibendum
                mus in nisl et arcu, eleifend congue hac sem sollicitudin velit
                morbi, etiam taciti convallis netus felis aliquet.
              </p>
              <br />
              <h2 className="title-3 font-1">
                Descarga el estado de tu cuenta desde el botón a continuación:
              </h2>
              <hr />
              <button className="blue-button">
                Descargar{" "}
                <img
                  className="ms-4"
                  src={DownloadIcon}
                  alt="download"
                  width="18px"
                />
              </button>

              <Link
                className="text-decoration-none text-gray-1 position-absolute go-back-link "
                to={routes.mediaAcademy.news}
              >
                {"< Volver"}
              </Link>
            </div>
          </div>
        </div>

        <div className="d-flex flex-column">
          <h2 className="title-1 mb-3">Novedades Destacadas</h2>
          <div className="right-cards">
            <CardNew
              title="Ultimas tendencias"
              description="orem ipsum dolor sit amet consectetur adipiscing elit diam nibh, feugiat curae in euismod auctor neque lacus ornare, sapien fusce morbi nec sociosqu arcu ultricies suspendisse. Phasellus nullam ac tortor sociis dapibus metus commodo feugiat, luctus ornare lobortis habitasse curae mattis vivamus quam, class egestas pretium tristique cum rutrum nam."
              date="5 de Abril 2021"
              image={ImageVideo}
            />
            <CardNew
              title="Ultimas tendencias"
              description="orem ipsum dolor sit amet consectetur adipiscing elit diam nibh, feugiat curae in euismod auctor neque lacus ornare, sapien fusce morbi nec sociosqu arcu ultricies suspendisse. Phasellus nullam ac tortor sociis dapibus metus commodo feugiat, luctus ornare lobortis habitasse curae mattis vivamus quam, class egestas pretium tristique cum rutrum nam."
              date="5 de Abril 2021"
              image={ImageBuilding}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
