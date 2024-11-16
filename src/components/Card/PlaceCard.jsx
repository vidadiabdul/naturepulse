import React from 'react'
import { MdTitle } from 'react-icons/md'
import { Link } from "react-router-dom";

const PlaceCard = ({image, city, title}) => {
  return (
    <Link to="" className="dest-list">
    <div className="att-top">
    <img src={image} alt="" />
    </div>
    <div>
      <p className="pt-2 my-0 att-city">{city}</p>
      <h5 className="font-weight-semibold">{title}</h5>
    </div>
  </Link>
  )
}

export default PlaceCard