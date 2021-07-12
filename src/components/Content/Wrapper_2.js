import React from "react";
import Breadcrumb from "./Breadcrumb";
import { Link } from "react-router-dom";

export default function Wrapper_2({
  title,
  breadcrumbItems,
  rightLink,
  rightMessage,
  children,
}) {
  return (
    <div className="content">
      <div>
        <Breadcrumb items={breadcrumbItems} />

        <div className="d-flex flex-wrap justify-content-between align-items-center">
          <h1 className="title-1 m-0">{title}</h1>

          {rightLink && (
            <Link
              to={rightLink.route}
              className="text-decoration-none text-gray-9 hover-text-blue-1 d-flex justify-content-center align-items-center gap-2"
            >
              <img src={rightLink.icon} alt={rightLink.text} />
              <p className="font-1 p-0 m-0">{rightLink.text}</p>
            </Link>
          )}
          {rightMessage && (
            <span className="font-1">
              <img src={rightMessage.icon} alt={rightMessage.text} />
              <strong> {rightMessage.text}</strong>
            </span>
          )}
        </div>
      </div>

      <div className="container2">{children}</div>
    </div>
  );
}
