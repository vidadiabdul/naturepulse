import React from "react";
import { Routes, Route } from "react-router-dom";
import AccountLayout from "../layout/AccountLayout";
import Bookings from "../pages/Profile/Bookings";
import Favorites from "../pages/Profile/Favorites";
import Profile from "../pages/Profile/Profile";

const AccountRoutes = () => {
  return (
    <div className="bg-light py-5">
    <div className="container">
      <Routes>
        <Route path="/" element={<AccountLayout />}>
          <Route path="bookings" element={<Bookings />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
    </div>
  );
};

export default AccountRoutes;
