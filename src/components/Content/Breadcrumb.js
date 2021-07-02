import React from "react";

export default function Breadcrumb({ items }) {
  return (
    <>
      <ul className="text-gray-1 d-flex">
        {items.map((item, i) => (
          <li className="link-1 font-2" key={i}>
            <span
            //   className={`${i !== items.length - 1 ? "text-blue-1" : "text-gray-1"}`}
              className="text-gray-1"
            >
              {item.text}
            </span>
            {i !== items.length - 1 && <span className="px-2">{">"}</span>}
          </li>
        ))}
      </ul>
    </>
  );
}
