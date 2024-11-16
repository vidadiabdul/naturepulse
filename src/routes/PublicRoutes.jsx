import React from "react";
import Layout from "../layout/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Destinations from "../pages/Destinations/Destinations";
import City from "../pages/City/City";
import Place from "../pages/Place/Place";
import Activities from "../pages/Activities/Activities";
import SingleActivity from "../pages/SingleActivity/SingleActivity";
import Notfound from "../components/Notfound";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import UserProvider from "../context/UserContext";
import FavProvider from "../context/FavContext";
import Contact from "../pages/Contact/Contact";
import Search from "../pages/Search/Search";
import PrivateRoute from "../context/PrivateRoute";
import AccountRoutes from "../routes/AccountRoutes";
import BookProvider from "../context/BookContext";

const PublicRoutes = () => {
  return (
    <div>
      <FavProvider>
        <BookProvider>
          <UserProvider>
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/account/*"element={<PrivateRoute><AccountRoutes /></PrivateRoute>}/>
                <Route path="/destinations" element={<Destinations />} />
                <Route path="/destinations/:slug" element={<City />} />
                <Route path="/destinations/place" element={<Place />} />
                <Route path="/activities" element={<Activities />} />
                <Route path="/activities/:slug" element={<SingleActivity />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<Notfound />} />
              </Routes>
            </Layout>
          </UserProvider>
        </BookProvider>
      </FavProvider>
    </div>
  );
};

export default PublicRoutes;
