import React, { useContext } from "react";
import ReactDom from "react-dom";
import { Link, NavLink } from "react-router-dom";
import "./mobilemenu.css";
import { CiUser, CiSearch } from "react-icons/ci";
import { RiMenuFold2Fill } from "react-icons/ri";
import { UserContext } from "../../context/UserContext";
import { PulseLoader } from "react-spinners";
import { useTranslation } from "react-i18next";

const MobileMenu = ({ isOpen, toggleMenu }) => {
  const { user, logout, loading } = useContext(UserContext);
  const { i18n } = useTranslation();

  const getFirstName = (fullname) => {
    return fullname.split(" ")[0];
  };
  const logoutHandler = () => {
    logout();
    toggleMenu();
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    toggleMenu();
  };
  const { t } = useTranslation();
  
  if (!isOpen) return null;

  return ReactDom.createPortal(
    <>
      <div className="underlay" onClick={toggleMenu}></div>

      <div className="sidemenu">
        <div className="menu-cont">
          <div>
            <div className="d-flex justify-content-between align-content-center">
              {loading ? (
                <PulseLoader color="#c9dbd0" />
              ) : user ? (
                <Link
                  to="/account/profile"
                  className="d-flex justify-content-between align-items-center"
                  onClick={toggleMenu}
                >
                  <div className="avatar-circle">{user.fullname.charAt(0)}</div>
                  <p className="mb-0 ms-2">{getFirstName(user.fullname)}</p>
                </Link>
              ) : (
                <NavLink
                  to="/login"
                  onClick={toggleMenu}
                  className="d-flex align-content-center"
                >
                  <CiUser className="me-2" />
                  <div>Login</div>
                </NavLink>
              )}
              <div className="d-flex justify-content-between align-content-center">
                <Link to="/search" onClick={toggleMenu}>
                  <CiSearch className="me-3" />
                </Link>
                <RiMenuFold2Fill onClick={toggleMenu} />
              </div>
            </div>
            <div className="d-flex flex-column my-5">
              <NavLink to="/" className="mb-4 text-end" onClick={toggleMenu}>
              {t("navhome")}
              </NavLink>
              <NavLink
                to="/destinations"
                className="mb-4 text-end"
                onClick={toggleMenu}
              >
                {t("navdest")}
              </NavLink>
              <NavLink
                to="/activities"
                className="mb-4 text-end"
                onClick={toggleMenu}
              >
                {t("navact")}
              </NavLink>
              <NavLink
                to="/contact"
                className="mb-4 text-end"
                onClick={toggleMenu}
              >
                {t("navcont")}
              </NavLink>
            </div>
          </div>
          <div>
            {user && (
              <Link
                onClick={logoutHandler}
                className="d-flex justify-content-end"
              >
                {t("navlogout")}
              </Link>
            )}
            <hr />
            <div className="text-center">
              <Link
                className={`mx-2 ${
                  i18n.language === "az" ? "fw-semibold" : "text-muted"
                }`}
                onClick={() => changeLanguage("az")}
                style={{ cursor: "pointer" }}
              >
                AZ
              </Link>
              <Link
                className={`mx-2 ${
                  i18n.language === "en" ? "fw-semibold" : "text-muted"
                }`}
                onClick={() => changeLanguage("en")}
                style={{ cursor: "pointer" }}
              >
                EN
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default MobileMenu;
