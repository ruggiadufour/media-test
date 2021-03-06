import React, { useState } from "react";
import SearchIcon from "../../assets/svgs/search-icon.svg";

export default function SearchInput({
  className = "",
  placeholder = "Palabra clave",
}) {
  const [search, setSearch] = useState("");

  function handleChange(e) {
    setSearch(e.target.value);
  }
  return (
    <div className={`input-search-period hover-border-blue-1 ${className}`}>
      <input
        className="focus-outline-none"
        type="text"
        placeholder={placeholder}
        value={search}
        onChange={handleChange}
      />
      <img src={SearchIcon} alt="buscar periodo" width="15px" />
    </div>
  );
}
