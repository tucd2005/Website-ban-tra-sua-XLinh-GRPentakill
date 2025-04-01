import React from "react";
import Header from "./layout/header";
import { Outlet } from "react-router-dom";
import Footer from "./layout/footer";

const Layout = () => {
  return (
    <div>
      <Header />
      <main className="pt-40">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
