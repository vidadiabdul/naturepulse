import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BookContext } from "../../context/BookContext";
import { TiLocation } from "react-icons/ti";
import "./card.css";
import { PiUsersFourLight } from "react-icons/pi";
import { MdDelete } from "react-icons/md";

const BookCard = ({ id, title, image, location, participant, date, price }) => {
  const { removeBook } = useContext(BookContext);

  return (
    <div key={id} className="book-card gy-3">
      <Link id="deleteicon" onClick={() => removeBook(id)}>
        <MdDelete />
      </Link>
      <div className="book-img col-lg-4 col-md-4 col-sm-12">
        <img src={image} className="book-img img-fluid" alt={title} />
      </div>
      <div className="col-lg-8 col-md-8 book-body">
        <h5 className="fw-medium mb-3">{title}</h5>
        <p className="mb-1">
          Location: <span className="text-muted">{location}</span>
        </p>
        <p className="mb-1">
          Date: <span className="text-muted">{date}</span>
        </p>
        <p className="">
          Participant: <span className="text-muted">{participant}</span>
        </p>
        <p className="price">{price} $</p>
      </div>
    </div>
  );
};

export default BookCard;
