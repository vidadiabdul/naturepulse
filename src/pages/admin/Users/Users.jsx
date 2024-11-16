import React, { useEffect, useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import Head from "../component/Head";
import { getAllUsers } from "../../../services/user";
import { Link } from "react-router-dom";
import { PuffLoader } from "react-spinners";

const Users = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [users, setUsers] = useState([]);

  const showAllUsers = async () => {
    const resp = await getAllUsers();
    setUsers(resp.data);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const year = String(date.getFullYear()).slice(2); // Get last two digits of the year
    // const hours = String(date.getHours()).padStart(2, "0");
    // const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${day}.${month}.${year}`;
  };

  useEffect(() => {
    showAllUsers();
  }, []);

  return (
    <div className="container">
      <Head
        title="Users"
        startDate={startDate}
        ediDate={(date) => setStartDate(date)}
      />
      <div className="mt-3">
        {users && users.length > 0 ? (
          <table class="table table-hover">
            <thead>
              <tr>
                <th>Id</th>
                <th>Signed up</th>
                <th>Fullname</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{formatDate(user.created_at)}</td>
                  <td>{user.fullname}</td>
                  <td>${user.email}</td>
                  <td>{user.phone}</td>
                  <td>
                    <Link target="_blank" rel="noopener noreferrer">
                      <IoEyeOutline />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="loader">
            <PuffLoader color="#355d5f" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Users;
