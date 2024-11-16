import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FavContext } from "../../context/FavContext";
import { TiLocation } from "react-icons/ti";
import "./card.css";
import { ReactComponent as FavActive } from "../../assets/icons/faved.svg";

const FavCard = ({ id, title, image, location, category, date, price }) => {
  const { fav, removeFav } = useContext(FavContext);

  return (
    <div key={id} className="fav-card gy-3">
      <Link id="favicon" onClick={() => removeFav(id)}>
        <FavActive />
      </Link>
      <div className="fav-img col-lg-4 col-md-4 col-sm-12">
        <img src={image} className="fav-img img-fluid" alt={title} />
      </div>
      <div className="col-lg-8 col-md-8 fav-body">
        <div className="row">
          <div className="col-lg-9 col-md-9 col-sm-12">
            <div className="d-flex align-content-center justify-content-between mb-2">
              <div style={{ color: "#2c815d" }}>
                <TiLocation />
                <span style={{ padding: "0 0 0 5px" }}>{location}</span>
              </div>
            </div>
            <h5 className="fw-medium mb-2">{title}</h5>
            <p className="text-muted">{category}</p>
          </div>
          <div className="col-lg-3 col-md-3  col-sm-12 text-lg-end text-md-end">
            <p className="price">{price} $</p>
            <p className="text-muted mb-0">{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavCard;
