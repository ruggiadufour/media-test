import React, { useRef } from "react";

export default function InputFile({
  file,
  setFile,
  label = "Subir imagen",
  buttonText = "AGREGAR IMAGEN (JPG, PNG 1200x900)",
  containerClassName="",
  className=""
}) {
  const inputRef = useRef(null);

  function getImageFile() {
    inputRef.current.click();
  }
  function handleChange(e) {
    console.log(e.target.value);
  }

  return (
    <div className={`d-flex flex-column ${containerClassName}`}>
      <label className="font-1">{label}</label>
      <button className={`image-picker-button small-font ${className}`} onClick={getImageFile}>
        {buttonText}
      </button>
      <input
        type="file"
        ref={inputRef}
        onChange={handleChange}
        className="d-none"
      />
    </div>
  );
}
