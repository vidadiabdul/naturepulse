import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { useTranslation } from "react-i18next";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { login } = useContext(UserContext);

  const onSubmit = async (data) => {
    try {
      await login(data);
    } catch (error) {
      console.error(error.message);
    }
  };
  const { t } = useTranslation();

  return (
    <section className="container my-auto">
      <h2 className="text-center my-5">{t("btn-login")}</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="mx-auto col-lg-4">
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
          {t("btn-login")}
        </button>
      </form>
      <p className="mt-3 text-center text-muted">
        {t("noaccount")}{" "}
        <Link className="fw-semibold" to="/register">
          {t("btn-signup")}
        </Link>{" "}
      </p>
    </section>
  );
}
