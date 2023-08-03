import React from "react";
import { Outlet } from "react-router";

import Menu from "../components/Menu";
import Footer from './../components/Footer';

const Layout = () => {
  return (
  <>
  <Menu />
  <Outlet />
  <Footer />
  </>
  );
};

export default Layout;
