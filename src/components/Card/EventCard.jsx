import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FavContext } from "../../context/FavContext";
import { TiLocation } from "react-icons/ti";
import "./card.css";
import { ReactComponent as FavInactive } from "../../assets/icons/nofav.svg";
import { ReactComponent as FavActive } from "../../assets/icons/faved.svg";

const EventCard = ({ id, title, image, location, category, date, price }) => {
  const { fav, addFav, removeFav } = useContext(FavContext);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const isFav = fav.some((item) => item.id === id);
    setIsFavorite(isFav);
  }, [fav, id]);

  const FavToggle = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (isFavorite) {
      removeFav(id);
    } else {
      addFav({ id, title, image, location, category, date, price });
    }
  };

  return (
    <div key={id} className="card">
      <Link id="fav" onClick={FavToggle}>
        {isFavorite ? <FavActive /> : <FavInactive />}
      </Link>
      <div className="primg">
        <img src={image} className="card-img img-fluid" alt={title} />
      </div>
      <div className="card-body">
        <div>
          <div className="d-flex align-content-center justify-content-between mb-2">
            <div style={{ color: "#2c815d" }}>
              <TiLocation />
              <span style={{ padding: "0 0 0 5px" }}>{location}</span>
            </div>
            <p className="text-muted">{date}</p>
          </div>
          <h5 className="fw-medium mb-2">{title}</h5>
          <div className="d-flex justify-content-between align-items-center mt-3">
            <p className="text-muted">{category}</p>
            <p className="price">{price} $</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
