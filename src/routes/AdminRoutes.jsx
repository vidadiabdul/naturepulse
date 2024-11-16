import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "../layout/AdminLayout";
import Overview from "../pages/admin/Home/Overview";
import Users from "../pages/admin/Users/Users";
import Notfound from "../components/Notfound";
import AdminLogin from "../pages/admin/AdminLogin";
import ProtectedRoute from "./ProtectedRoute";
import Events from "../pages/admin/Events/Events";
import Inbox from "../pages/admin/Inbox/Inbox";
import Suppliers from "../pages/admin/Suppliers/Suppliers";
import Settings from "../pages/admin/Settings/Settings";
import Revenue from "../pages/admin/Revenue/Revenue";
import Booking from "../pages/admin/Bookings/Booking";

const AdminRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<AdminLogin />} />
        <Route path="/" element={<Navigate to="/admin/login" />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <Overview />
              </AdminLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/events"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <Events />
              </AdminLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/users"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <Users />
              </AdminLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/inbox"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <Inbox />
              </AdminLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/suppliers"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <Suppliers />
              </AdminLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <Settings />
              </AdminLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/revenue"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <Revenue />
              </AdminLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/bookings"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <Booking />
              </AdminLayout>
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
};

export default AdminRoutes;
