import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "../admin/admin.css";
import { BiCategoryAlt } from "react-icons/bi";
import { MdOutlineMoveToInbox } from "react-icons/md";
import { PiUsersFourLight } from "react-icons/pi";
import { AiOutlineThunderbolt } from "react-icons/ai";
import {
  IoTicketOutline,
  IoSettingsOutline,
  IoExitOutline,
} from "react-icons/io5";
import { FiUsers } from "react-icons/fi";
import { TbMoneybag } from "react-icons/tb";

const Sidebar = () => {
  const signoutHandler = () => {
    localStorage.removeItem("isAdminAuthenticated");
    window.location.reload();
  };

  return (
    <div className="sidebar d-flex flex-column flex-shrink-0 p-3 text-white side">
      <div className="my-3">
        <h6 className="ms-3 mb-0 text-white">Welcome Back!</h6>
      </div>
      <hr />
      <ul className="nav flex-column mb-auto gap-2">
        <li className="nav-item">
          <NavLink
            to="/admin/home"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            end
          >
            <BiCategoryAlt className="me-2" />
            Oveview
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/admin/bookings"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <IoTicketOutline className="me-2" />
            Bookings
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/admin/inbox"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <MdOutlineMoveToInbox className="me-2" />
            Inbox
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/admin/users"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <FiUsers className="me-2" />
            Users
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/admin/suppliers"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <PiUsersFourLight className="me-2" />
            Suppliers
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/admin/events"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <AiOutlineThunderbolt className="me-2" />
            Events
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to="/admin/revenue"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <TbMoneybag className="me-2" />
            Revenue
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/admin/settings"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <IoSettingsOutline className="me-2" />
            Settings
          </NavLink>
        </li>
      </ul>
      <hr />
      <div className="px-3">
        <Link onClick={signoutHandler} className="dropdown-item" to="#">
          <IoExitOutline className="me-2" />
          Sign out
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
