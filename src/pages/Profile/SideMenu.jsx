import React, { useContext } from "react";
import { CiUser, CiHeart, CiShoppingCart } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { useTranslation } from "react-i18next";

const SideMenu = () => {
  const { user } = useContext(UserContext);
  const { t } = useTranslation();

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="col-lg-3">
      <div className="bg-white">
        <div className="side-head">
          <h5>{user.fullname}</h5>
        </div>
        <ul className="nav flex-column mb-auto p-3 side-menu">
          <li className="nav-item  py-2">
            <NavLink to="/account/bookings" className="nav-link">
              <CiShoppingCart className="me-2" />
              {t("navbook")}
            </NavLink>
          </li>
          <li className="nav-item  py-2">
            <NavLink to="/account/favorites" className="nav-link">
              <CiHeart className="me-2" />
              {t("navfav")}
            </NavLink>
          </li>
          <li className="nav-item  py-2">
            <NavLink to="/account/profile" className="nav-link">
              <CiUser className="me-2" />
              {t("navprofile")}
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
