import { useState } from "react";
import ArrowUpIcon from "../../assets/svgs/arrow-up-icon.svg";

export default function EventsTable({
  TableHeader,
  TableRows,
  TitleButton = "",
  ShowCollapse = true,
  hasPreHeader = false,
}) {
  const [open, setOpen] = useState(true);
  function handleOpen() {
    setOpen((o) => !o);
  }

  return (
    <div className="position-relative">
      {ShowCollapse && (
        <>
          <div
            className={`collapse-table ${
              hasPreHeader ? "" : "collapse-table-not-has-preheader"
            }`}
            onClick={handleOpen}
          >
            <button className="arrow-icon-button">
              <img
                className={`arrow-icon-button ${open ? "" : "rotate-icon-180"}`}
                src={ArrowUpIcon}
                alt="abrir tabla"
              />
            </button>
            <span>{TitleButton}</span>
          </div>
          {/* <table
            className={`common-table ${
              open
                ? "opacity-transition-0 position-absolute"
                : "opacity-transition-100"
            }`}
          >
            <thead className="collapse-table position-relatives" onClick={handleOpen}>
              <button className="arrow-icon-button">
                <img
                  className={`arrow-icon-button ${
                    open ? "" : "rotate-icon-180"
                  }`}
                  src={ArrowUpIcon}
                  alt="abrir tabla"
                />
              </button>
              {TableHeader}
            </thead>
          </table> */}
        </>
      )}

      <div
        className={`tables-wrapper mb-5 ${
          hasPreHeader
            ? open
              ? "h-animation-open"
              : "h-animation-close"
            : open
            ? "table-animation-open"
            : "table-animation-close"
        }`}
      >
        <table className={`common-table`}>
          <thead onClick={handleOpen}>{TableHeader}</thead>
          <tbody>{TableRows}</tbody>
        </table>
      </div>
    </div>
  );
}
