import React from 'react'
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div className='notfound'>
      <div className='nfcont'>
        <h1>404</h1>
        <h4>Seems You Are Lost</h4>
        <Link className='btn btn-outline-light mt-5 px-4'>Back to home</Link>
      </div>
      <img style={{width: '100%'}} src="https://naturepulse.xyz/assets/images/banner_pages/404.jpg" alt="" />
    </div>
  )
}

export default Notfound