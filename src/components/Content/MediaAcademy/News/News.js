import React from "react";
import CardNew from "./CardNew";
import InstagramImage from "../../../../assets/images/temporal/instagram-post.png";
import BuildingImage from "../../../../assets/images/temporal/build.png";
import MarketingImage from "../../../../assets/images/temporal/marketing.png";
import VideoImage from "../../../../assets/images/temporal/video.png";
import SocialMediaImage from "../../../../assets/images/temporal/socialmedia.png";

// Mock data
const news = [
  {
    title: "Novedades para Instagram.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit diam nibh, feugiat curae in euismod auctor neque lacus ornare, sapien fusce morbi nec sociosqu arcu ultricies suspendisse.",
    date: "5 de Abril 2021",
    image: InstagramImage,
  },
  {
    title: "Ultimas tendencias en Marketing Digital.",
    description:
      "Accumsan condimentum id lacus phasellus curae faucibus, augue libero vitae a urna dignissim metus, ornare vel imperdiet risus quam.",
    date: "07 Ene 2021",
    image: MarketingImage,
  },
  {
    title: "50% del tráfico de internet son videos",
    description:
      "Accumsan condimentum id lacus phasellus curae faucibus, augue libero vitae a urna dignissim metus, ornare vel imperdiet risus quam.",
    date: "24 Feb 2021",
    image: VideoImage,
  },
  {
    title: "Importancia de las Redes Sociales ",
    description:
      "Avanzamos un 60% con los trabajos de revoque exterior del edificio, abarcando todas las paredes de cada nivel, para el mismo utilizamos hormigón…",
    date: "24 Feb 2021",
    image: SocialMediaImage,
  },
  {
    title: "Ultimas novedades para vos.",
    description:
      "Fin de mampostería, Pintura exterior, perfilería, y exteriores.",
    date: "07 Ene 2021",
    image: InstagramImage,
  },
];

export default function News() {
  return (
    <div className="content ma-news-container">
      <div>
        <ol className="breadcrumb text-gray">
          <li className="breadcrumb-item">
            <a href="#"  className="link-1">MediaAcademy®</a>
          </li>
          <li className="breadcrumb-item active paragraph-1" aria-current="page">
            Novedades
          </li> 
        </ol>

        <h1 className="title-1 font-2">Novedades</h1>
      </div>

      <div className="ma-news">
        <div className="ma-news-grid">
          {news.map((new_, i) => (
            <CardNew key={i} {...new_} isFirst={i===0}/>
          ))}
        </div>
      </div>
    </div>
  );
}
