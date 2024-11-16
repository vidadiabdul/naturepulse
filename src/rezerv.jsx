// Price included list

<div className="mb-5">
  <h4 className="mb-3">Price inluded</h4>
  <div className="row row-cols-2 gy-3">
    <div className="col">
      <div className="dflex">
        <MdDone className="text-success" /> All transportation in destination
        location
      </div>
    </div>
    <div className="col">
      <div className="dflex">
        <MdDone className="text-success" /> Tour Guide
      </div>
    </div>
    <div className="col">
      <div className="dflex">
        <MdDone className="text-success" /> 3 times Meal
      </div>
    </div>
    <div className="col">
      <div className="dflex">
        <MdDone className="text-success" /> Entrance Fees
      </div>
    </div>
  </div>
</div>;

// Event card

import React, { useContext } from "react";
import { FavContext } from "../../context/FavContext";
import { TiLocation } from "react-icons/ti";
import "./card.css";
import { ReactComponent as FavInactive } from "../../assets/icons/nofav.svg";
import { ReactComponent as FavActive } from "../../assets/icons/faved.svg";

const EventCard = ({
  title,
  image,
  location,
  category,
  date,
  price,
  event,
}) => {
  const { fav, addFav, removeFav } = useContext(FavContext);

  if (!event || !event.id) {
    return null; // or a fallback UI
  }

  const isFavorite = fav.some((favItem) => favItem.id === event.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFav(event);
    } else {
      addFav(event);
    }
  };

  return (
    <div className="card">
      <div id="fav" onClick={toggleFavorite}>
        {isFavorite ? <FavActive /> : <FavInactive />}
      </div>

      <div className="primg">
        <img src={image} className="card-img img-fluid"></img>
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
          <div className="d-flex justify-content-between  align-items-center mt-3">
            <p className="text-muted">{category}</p>
            <p className="price">{price} $</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;

// form
<form className="p-4">
  <h4 className="text-center mb-4">Equity form</h4>
  <label htmlFor="fullname">Fullname*</label>
  <input
    type="text"
    className="form-control py-2 mt-2 mb-3"
    placeholder="John Doe"
    name="fullname"
  />
  <label htmlFor="email">Email*</label>
  <input
    type="email"
    className="form-control py-2 mt-2 mb-3"
    placeholder="example@mail.com"
    name="email"
  />
  <label htmlFor="phone">Phone*</label>
  <input
    type="phone"
    className="form-control py-2 mt-2 mb-3"
    placeholder="+994"
    name="phone"
  />
  <label htmlFor="guests">Guests*</label>
  <input
    type="number"
    defaultValue="1"
    min={1}
    max={100}
    className="form-control py-2 mt-2 mb-3"
    placeholder="Guest"
    name="fullname"
  />
  <button className="btn w-100 py-2 my-3">Submit</button>
</form>;

// single act top

<div className="row g-2 saimg mb-5">
  <div className="col-lg-8 h-100">
    <div className="asimg">
      <img src={`http://wildx.mooo.com/${act.thumbnail}`} alt="" />
    </div>
  </div>
  <div className="col-lg-4">
    <div className="row g-2 saimg">
      <div className="col-6">
        <div className="asimg">
          {" "}
          <img
            src="https://demo.ovatheme.com/vedhak/wp-content/uploads/2023/04/product-07.jpg"
            alt=""
          />{" "}
        </div>
      </div>
      <div className="col-6">
        <div className="asimg">
          {" "}
          <img
            src="https://demo.ovatheme.com/vedhak/wp-content/uploads/2023/04/product-08.jpg"
            alt=""
          />{" "}
        </div>
      </div>
      <div className="col-6">
        <div className="asimg">
          {" "}
          <img
            src="https://demo.ovatheme.com/vedhak/wp-content/uploads/2023/04/product-09.jpg"
            alt=""
          />{" "}
        </div>
      </div>
      <div className="col-6">
        <div className="asimg">
          {" "}
          <img
            src="https://demo.ovatheme.com/vedhak/wp-content/uploads/2023/04/product-06.jpg"
            alt=""
          />{" "}
        </div>
      </div>
    </div>
  </div>
</div>;


