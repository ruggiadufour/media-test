import React from "react";
import { Link } from "react-router-dom";

export default function Breadcrumb({ items }) {
  return (
    <>
      <ul className="text-gray-1 d-flex">
        {items.map((item, i) => (
          <li className="link-1 font-1" key={i}>
            <Link
              to={item.route}
              className={`text-decoration-none ${
                i !== items.length - 1 ? "text-blue-1" : "text-gray-1"
              }`}
            >
              {item.text}
            </Link>
            {i !== items.length - 1 && <span className="px-2">{">"}</span>}
          </li>
        ))}
      </ul>
    </>
  );
}
