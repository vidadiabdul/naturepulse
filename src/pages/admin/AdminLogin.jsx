import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminLogin = () => {
  const [cred, setCred] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCred((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://naturepulse.xyz/api/admin",
        cred
      );
      const data = response.data;

      if (data.status === "success") {
        // Store credentials in localStorage
        localStorage.setItem("isAdminAuthenticated", "true");
        navigate("/admin/home"); // Navigate to the admin manager page
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("There was an error logging in!", error);
      alert("An error occurred while logging in. Please try again.");
    }
  };

  return (
    <section className="reg">
      <div className="container py-5">
        <h2 className="text-center my-5">Admin Login</h2>
        <div className="col-lg-4 mx-auto text-center">
          <input
            className="form-control"
            type="email"
            name="email"
            placeholder="Email"
            value={cred.email}
            onChange={handleChange}
          />
          <input
            className="form-control my-2"
            type="password"
            name="password"
            placeholder="Password"
            value={cred.password}
            onChange={handleChange}
          />
          <button className="btn btn-dark w-100" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </section>
  );
};

export default AdminLogin;
