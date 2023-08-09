import React from "react";
import { Outlet } from "react-router";
import Cart from "../components/FloatingCart/Cart";
import Footer from "../components/shared/Footer";
import NavBar from "../components/shared/NavBar";

const Layout = () => {
  return (
    <div className="main-layout">
      <NavBar />
      <Cart />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
