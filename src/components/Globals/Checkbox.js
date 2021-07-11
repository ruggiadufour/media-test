import { useState } from "react";

export default function Checkbox({ is = false, text }) {
  const [checked, setChecked] = useState(is);

  return (
    <div className="d-flex">
      <input
        type="checkbox"
        defaultChecked={checked}
        onChange={() => setChecked(!checked)}
        className="checkbox me-1"
      />
      <label className={`small-font  ${checked ? "font-0" : "font-1"}`}>
        {text}
      </label>
    </div>
  );
}
