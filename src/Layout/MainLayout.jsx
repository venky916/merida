import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="font-poppins">
      <div>
        <Header />
      </div>
      <div className="">
        <Sidebar />
      </div>
      <div className="pl-20 pt-20 md:pl-52 md:pt-32">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
