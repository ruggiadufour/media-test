import React from "react";
import { Route, Switch } from "react-router-dom";
import "./Content.scss";
import AboutMediaHost from "./MediaHost/About";
const Content = () => {
  return (
    <>
        <AboutMediaHost />
    </>
  );
};

export default Content;
