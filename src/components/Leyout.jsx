import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Fotter from "./Fotter";

const Leyout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Fotter />
    </>
  );
};

export default Leyout;
