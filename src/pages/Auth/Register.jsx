import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../services/auth";
import { useTranslation } from "react-i18next";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const result = await registerUser(data);
    if (result.data.status === "success") {
      navigate("/login");
    } else {
      console.error(result.data.message);
    }
  };
  const { t } = useTranslation();

  return (
    <section className="container">
      <h2 className="text-center my-5">{t("btn-signup")}</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="mx-auto col-lg-4">
        <div className="mb-3">
          <input
            {...register("fullname", { required: t("Required")})}
            type="text"
            className="form-control py-2"
            placeholder="Fullname"
          />
          {errors.fullname && (
            <span className="reqmessage">{errors.fullname.message}</span>
          )}
        </div>

        <div className="mb-3">
          <input
            {...register("email", {
              required: t("Required"),
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
            type="email"
            className="form-control py-2"
            placeholder="Email"
          />
          {errors.email && (
            <span className="reqmessage">{errors.email.message}</span>
          )}
        </div>

        <div className="mb-3">
          <input
            {...register("password", { required: t("Required") })}
            type="password"
            className="form-control py-2"
            placeholder="Password"
          />
          {errors.password && (
            <span className="reqmessage">{errors.password.message}</span>
          )}
        </div>

        <button type="submit" className="btn btn-dark w-100 py-2">
          Sign Up
        </button>
      </form>
      <p className="mt-3 text-center text-muted">
        {t("hasaccount")}{" "}
        <Link className="fw-semibold" to="/login">
          {t("btn-login")}
        </Link>{" "}
      </p>
    </section>
  );
}
