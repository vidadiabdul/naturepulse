import React, { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { PuffLoader } from "react-spinners";
import { updateUserById } from "../../services/user";
import { useTranslation } from "react-i18next";

import "./account.css";

const Profile = () => {
  const { user, loading } = useContext(UserContext);
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    fullname: user.fullname,
    phone: user.phone,
  });
  console.log("formData", formData);

  if (loading) {
    return <PuffLoader color="#355d5f" className="loader" />;
  }

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await updateUserById(user.id, formData);
      console.log("sent resp", response);
    } catch (error) {
      console.error("Update failed: ", error);
    }
  };

  return (
    <>
      <div className="bg-white p-4 mb-4 rounded-3">
        <h5>{t("ap-pinfo")}</h5>
        <form onSubmit={handleSubmit}>
          <div className="row gy-3 my-4">
            <div className="col-lg-4 col-sm-12 col-md-12">
              <div className="form-group">
                <label htmlFor="fullname" className="mb-2 fw-semibold">
                  {t("ap-fullnm")}
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fullname"
                  defaultValue={formData.fullname}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 col-md-12">
              <div className="form-group">
                <label htmlFor="phone" className="mb-2 fw-semibold">
                  {t("ap-phone")}
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  defaultValue={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 col-md-12">
              <div className="form-group">
                <label htmlFor="email" className="mb-2 fw-semibold">
                  {t("ap-email")}
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  defaultValue={user.email}
                  disabled
                />
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-dark">
            {t("btn-save")}{" "}
          </button>
        </form>
      </div>
      <div className="container bg-white p-4 rounded-3">
        <h5>{t("ap-chpw")}</h5>
        <form>
          <div className="row gy-3 my-4">
            <div className="col-lg-4 col-sm-12 col-md-12">
              <div class="form-group">
                <label for="fullname" className="mb-2 fw-semibold">
                  {t("ap-curpw")}
                </label>
                <input type="password" class="form-control" id="fullname" />
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 col-md-12">
              <div class="form-group">
                <label for="phone" className="mb-2 fw-semibold">
                  {t("ap-newpw")}
                </label>
                <input type="password" class="form-control" id="phone" />
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 col-md-12">
              <div class="form-group">
                <label for="email" className="mb-2 fw-semibold">
                  {t("ap-rnewpw")}
                </label>
                <input type="password" class="form-control" id="email" />
              </div>
            </div>
          </div>
          <button type="submit" class="btn btn-dark">
            {t("btn-chpass")}
          </button>
        </form>
      </div>
    </>
  );
};

export default Profile;
