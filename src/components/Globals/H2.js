import React from "react";

export default function H2({
  text,
  className = "",
  font = "font-0",
  color = "text-gray-2",
}) {
  return <h2 className={`title-3 ${font} ${color} ${className}`}>{text}</h2>;
}
