import React from "react";
import "./etc.css";
import { useTranslation } from "react-i18next";

const Masonry = () => {
  const { t } = useTranslation();

  return (
    <div className="grid-wrapper">
      <div className="big mas-card">
        <div className="mas-title">
          <h4>{t("cat-camp")}</h4>
          <span className="shd"></span>
        </div>
        <img
          src="https://naturepulse.xyz/assets/images/category_photos/camping.jpg"
          alt=""
        />
      </div>
      <div className="mas-card tall">
        <div className="mas-title">
          <h4>{t("cat-sight")}</h4>
          <span className="shd"></span>
        </div>
        <img
          src="https://naturepulse.xyz/assets/images/category_photos/sight.jpeg"
          alt=""
        />
      </div>
      <div className="mas-card">
        <div className="mas-title">
          <h4>{t("cat-air")}</h4>
          <span className="shd"></span>
        </div>
        <img
          src="https://naturepulse.xyz/assets/images/category_photos/air.jpeg"
          alt=""
        />
      </div>
      <div className="tall mas-card">
        <div className="mas-title">
          <h4>{t("cat-bike")}</h4>
          <span className="shd"></span>
        </div>
        <img
          src="https://naturepulse.xyz/assets/images/category_photos/biking.jpeg"
          alt=""
        />
      </div>
      <div className="tall mas-card">
        <div className="mas-title">
          <h4>{t("cat-clim")}</h4>
          <span className="shd"></span>
        </div>
        <img
          src="https://naturepulse.xyz/assets/images/category_photos/climb.jpg"
          alt=""
        />
      </div>
      <div className="wide mas-card">
        <div className="mas-title">
          <h4>{t("cat-hike")}</h4>
          <span className="shd"></span>
        </div>
        <img
          src="https://naturepulse.xyz/assets/images/category_photos/hiking.jpeg"
          alt=""
        />
      </div>
      <div className="mas-card">
        <div className="mas-title">
          <h4>{t("cat-well")}</h4>
          <span className="shd"></span>
        </div>
        <img
          src="https://naturepulse.xyz/assets/images/category_photos/wellness.jpg"
          alt=""
        />
      </div>
      <div className="wide mas-card">
        <div className="mas-title">
          <h4>{t("cat-fest")}</h4>
          <span className="shd"></span>
        </div>
        <img
          src="https://naturepulse.xyz/assets/images/category_photos/festival.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Masonry;
