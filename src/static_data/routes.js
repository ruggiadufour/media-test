import { base_url } from "./base_url";

const content = base_url + "/contenido";

export const routes = {
  content: content,
  base: base_url,
  session: {
    login: content + "/login",
  },
  myProfile: {
    myData: content + "/mi-perfil/mis-datos",
  },
  billing: {
    billingData: content + "/facturacion/datos-de-facturacion",
    accountState: content + "/facturacion/estado-de-cuenta",
  },
  mediaHost: {
    support: content + "/media-host/soporte",
    createTicket: content + "/media-host/soporte/crear-ticket",
    about: content + "/media-host/acerca",
  },
  mediaAcademy: {
    news: content + "/media-academy/novedades",
    new: content + "/media-academy/novedades/titulo-novedad",
    about: content + "/media-academy/acerca",
  },
  mediaBlog: {
    news: content + "/media-blog/novedades",
    createNew: content + "/media-blog/novedades/crear-novedad",
    filters: content + "/media-blog/filtros",
    createFilter: content + "/media-blog/filtros/crear-filtro",
  },
  mediaBroker: {
    events: content + "/media-broker/eventos",
    createEvent: content + "/media-broker/eventos/crear-evento",
    rooms: content + "/media-broker/salas",
    createRoom: content + "/media-broker/salas/crear-sala",
    users: content + "/media-broker/usuarios",
    createUser: content + "/media-broker/usuarios/crear-usuario",
    about: content + "/media-broker/acerca",
  },
  mediaInvestor: {
    entrepreneurships: content + "/media-investor/emprendimientos",
    createEntrepreneurship: content + "/media-investor/emprendimientos/crear-emprendimiento",
    investors: content + "/media-investor/inversores",
    createInvestor: content + "/media-investor/inversores/nuevo-inversor",
    news: content + "/media-investor/novedades",
    createNew: content + "/media-investor/novedades/crear-novedad",
    about: content + "/media-investor/acerca",
  },
};
