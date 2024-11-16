import React from 'react'
import { MdTitle } from 'react-icons/md'
import { Link } from "react-router-dom";
import './card.css'

const PortraitCard = ({image, title, description}) => {
  return (
    <div className="port-card">
      <img
        src={image} alt=""
      />
      <div className="shd"></div>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  )
}

export default PortraitCard