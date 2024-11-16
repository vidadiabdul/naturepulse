import React from "react";
import "./card.css";
import { Link } from "react-router-dom";

const MsCard = ({ title, image, city }) => {
  return (
    <div to="" className="mscard">
      <div className="msimg">
        <img src={image}></img>
      </div>
      <div>
        <p className="pt-2 fw-medium my-0 ms-city">{city}</p>
        <h5 className="fw-medium">{title}</h5>
      </div>
    </div>
  );
};

export default MsCard;
