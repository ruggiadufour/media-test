import React, { useRef } from "react";
import DateFnsUtils from "@date-io/date-fns"; // choose your lib
import DateIcon from "../../assets/svgs/calendar-icon.svg";
import DateIconGray from "../../assets/svgs/calendar-gray-icon.svg";

import {
  DateTimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";

export default function DateTimeInput({dateTime, setDateTime}) {
  const [open, setOpen] = React.useState(false);

  function handleChange(value) {
    setDateTime(value);
    console.log(value);
  }
  function handleOpen() {
    setOpen(!open);
  }

  return (
    <>
      <button onClick={handleOpen} className="text-start common-input position-relative">
        {dateTime.toLocaleDateString() + " - " + dateTime.toLocaleTimeString()}
        <img src={DateIcon} className="position-absolute end-0 me-2"></img>
      </button>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DateTimePicker
          onClose={handleOpen}
          open={open}
          value={dateTime}
          onChange={handleChange}
          dateRangeIcon={<img src={DateIconGray} width="20px" alt="icono de calendario"/>}
          className="d-none"
          cancelLabel="Cancelar"
          okLabel="Aceptar"
        />
      </MuiPickersUtilsProvider>
    </>
  );
}
