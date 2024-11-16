import React, { useEffect, useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  CiUser,
  CiSearch,
  CiHeart,
  CiLogout,
  CiShoppingCart,
} from "react-icons/ci";
import { PuffLoader } from "react-spinners";
import { RiMenuFoldFill } from "react-icons/ri";
import logo from "../../assets/logos/np.svg";
import "./header.css";
import MobileMenu from "../MobileMenu/MobileMenu";
import { UserContext } from "../../context/UserContext";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { user, logout, loading } = useContext(UserContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const changeLanguage = () => {
    const newLanguage = i18n.language === "az" ? "en" : "az";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <header>
      <nav className="container my-3 d-flex justify-content-between align-items-center">
        <Link to="/" className="navbar-brand">
          <img src={logo} style={{ width: "35px", height: "100%" }} alt="" />
        </Link>

        <div className="w-100 d-flex justify-content-between align-items-center desk-menu">
          <div className="d-flex ms-4">
            <NavLink to="/" className="me-3">
            {t("navhome")}
            </NavLink>
            <NavLink to="/destinations" className="me-3">
            {t("navdest")}
            </NavLink>
            <NavLink to="/activities" className="me-3">
            {t("navact")}
            </NavLink>
            <NavLink to="/contact" className="me-3">
            {t("navcont")}
            </NavLink>
          </div>

          <div className="d-flex align-items-center">
            <Link to="/search">
              <CiSearch className="search" />
            </Link>
            <Link
              className="ms-3"
              onClick={changeLanguage}
              style={{ cursor: "pointer" }}
            >
              {i18n.language.toUpperCase()}
            </Link>

            <Link className="ms-2">
              {loading ? (
                <div className="avatar-circle">
                  <CiUser />
                </div>
              ) : user ? (
                <div className="dropdown mx-2 ">
                  <Link
                    to="#"
                    className="dropdown-toggle d-flex align-items-center"
                    id="navbarDropdownMenuAvatar"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <div className="avatar-circle">
                      {user.fullname.charAt(0)}
                    </div>
                  </Link>
                  <div className="dropdown-menu dropdown-menu-end px-2 py-3">
                    <ul>
                      <li className="py-1">
                        <Link to="/account/bookings" className="dropdown-item">
                          <CiShoppingCart className="me-2" />
                          {t("navbook")}
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link to="/account/favorites" className="dropdown-item">
                          <CiHeart className="me-2" />
                          {t("navfav")}
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link to="/account/profile" className="dropdown-item">
                          <CiUser className="me-2" />
                          {t("navprofile")}
                        </Link>
                      </li>
                      <hr />
                      <li>
                        <Link onClick={logout} className="dropdown-item">
                          <CiLogout className="me-2" />
                          {t("navlogout")}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <NavLink to="/login" className="nav-link">
                  <CiUser />
                </NavLink>
              )}
            </Link>
          </div>
        </div>

        <div className="hamburger">
          <RiMenuFoldFill onClick={toggleMenu} />
        </div>
      </nav>
      <MobileMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </header>
  );
};

export default Header;
