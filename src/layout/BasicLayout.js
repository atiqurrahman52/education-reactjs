import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/navigation/Footer";
import Navbar from "../components/navigation/Navbar";

const BasicLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default BasicLayout;
