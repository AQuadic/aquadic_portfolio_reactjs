import React from "react";
import { Outlet } from "react-router";
import Header from "@/components/general/Header.jsx";
import Footer from "@/components/general/Footer.jsx";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
