import React from 'react';

const Content = () => {
    return (
        <div className="content py-4 px-5">
            <ol className="breadcrumb text-gray">
                <li className="breadcrumb-item"><a href="#">MediaHost®</a></li>
                <li className="breadcrumb-item active" aria-current="page">Acerca de MediaHost®</li>
            </ol>
            <h1>Acerca de MediaHost®</h1>
            <hr />
            <ul>
                <li>MediaHost® es nuestro servicio de Hosting, Seguridad, Soporte Técnico y SEO, que permite mantener activa y segura la presencia digital de tu empresa. Con tecnologías 100% Cloud de alto rendimiento y administrado por nuestro equipo de profesionales especializados, este servicio garantiza que nuestra plataforma se encuentre accesibles, segura e integrada correctamente. </li>
            </ul>
            <h2>Hosting</h2>
            <ul>
                <li>- Alta y configuración de presencia web en Server CloudOS.</li>
                <li>- 30 GB de almacenamiento SSD.</li>
                <li>- Velocidad de transferencia de datos PRO 1Gbps (1000Mbps).</li>
                <li>- 99.9% de Uptime. - Bases de datos MySQL.</li>
            </ul>

            <h2>Seguridad</h2>
            <ul>
                <li>- Protección de la infraestructura a través de diagnósticos y análisis de riesgo. </li>
                <li>- Procesos de auditoría de sistemas y seguridad, en cumplimiento con los estándares del mercado. </li>
                <li>- Alta y configuración de conexión segura SSL (HTTPS). </li>
                <li>- Actualización y mantenimiento de conexión segura SSL. </li>
                <li>- Seguridad adicional vía backups de información performance periódicos. </li>
                <li>- Filtros activos avanzados Anti-SPAM + Anti-Virus. </li>
            </ul>

            <h2>Soporte Técnico</h2>
            <ul>
                <li>- Atención 24/7/365 </li>
                <li>- Relevamiento y mantenimiento técnico periódico del Sitio Web.</li>
                <li>- Relevamiento y mantenimiento técnico periódico de integración a plataforma TokkoBroker® vía API MediaHaus®. </li>
                <li>- HelpDesk para generar tickets de consultas. </li>
            </ul>

            <h2>SEO</h2>
            <ul>
                <li>- Incluye código amigable SEO ( para motores de búsqueda). </li>
                <li>- Para mayor customizacion SEO, consulte el módulo Modulo MediaSEO® <a href="#">aquí.</a></li>
            </ul>
        </div>
    );
}

export default Content;
