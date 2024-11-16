import React from 'react'
import { Link } from "react-router-dom";
import './card.css'

const CityCard2 = ({ title, image}) => {
  return (
    <div className="dest-list">
    <div className="dest-top">
      <img src={image}></img>
    </div>
    <div>
      <h5 className="font-weight-semibold py-3">{title}</h5>
    </div>
  </div>
  )
}

export default CityCard2