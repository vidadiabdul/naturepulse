import React from "react";
import './card.css'

const CityCard = ({title, image}) => {
  return (
    <div className="dest-card">
      <img
        src={image} alt=""
      />
      <div className="shd"></div>
      <h4>{title}</h4>
    </div>
  );
};

export default CityCard;
