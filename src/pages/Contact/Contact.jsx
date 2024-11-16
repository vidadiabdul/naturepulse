import React from "react";
import "./contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { submitContactForm } from "../../services/contact";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();
  const { t } = useTranslation();

  const onSubmit = async (data) => {
    await submitContactForm(data);
    reset();
  };

  return (
    <>
      <div className="cont-ban">
        <div className="shd"></div>
        <div className="container">
          <h1 className="ps-3">{t("navcont")}</h1>
        </div>
      </div>
      <div className="container my-5">
        <div className="row gy-5 justify-content-between">
          <div className="col-lg-6">
            <h4>{t("cptit")}</h4>
            <p className="my-4">{t("cppar")}</p>
            <form className="pt-3" onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("fullname")}
                className="form-control w-100 py-3 mb-3"
                type="text"
                placeholder="Fullname"
                required
              />
              <input
                {...register("email")}
                className="form-control w-100 py-3 mb-3"
                type="email"
                placeholder="Email"
                required
              />
              <input
                {...register("phone")}
                className="form-control w-100 py-3 mb-3"
                type="tel"
                placeholder="Phone"
              />
              <textarea
                {...register("message")}
                className="form-control w-100 mb-3"
                cols="40"
                rows="5"
                maxLength="400"
                placeholder="Message*"
                required
              ></textarea>
              <button className="btn btn-dark py-2 w-100" type="submit">
                {t("btn-send")}
              </button>
            </form>
          </div>
          <div className="col-lg-5">
            <div className="cont-info">
              <h4>{t("cploc")}</h4>
              <p className="my-4">
              Central Park, Baku, Azerbaijan
              </p>
              <p>
                <AiOutlineMail />
                <Link to="mailto:">info@naturepulse.com</Link>
              </p>
              <p>
                <FiPhone />
                <Link to="tel:">+994 12 419 19 19</Link>
              </p>
            </div>
            <div className="cont-map my-5">
              <h4 className="mb-5">{t("cpmap")}</h4>
              <iframe
                width="100%"
                height="300"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2576.4519038604894!2d49.8250082!3d40.375590599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307dc3a542e9e9%3A0x3c0673f26b6a872f!2sCentral%20Park!5e1!3m2!1sen!2sus!4v1723287268343!5m2!1sen!2sus"
              >
                <a href="https://www.gps.ie/">gps trackers</a>
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
