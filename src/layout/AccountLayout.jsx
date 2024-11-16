import React from "react";
import { Outlet } from "react-router-dom";
import SideMenu from "../pages/Profile/SideMenu";
import "../pages/Profile/account.css";

const AccountLayout = () => {
  return (
    <div className="wrapper">
      <div className="row gy-3">
        <SideMenu />
        <main className="col-lg-9">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AccountLayout;
