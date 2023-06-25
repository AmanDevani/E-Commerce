import React from 'react'
import './footer.css'
import playstore from "../../images/playstore.jpg"
import appstore from "../../images/appstore.jpg"
import {Link} from "react-router-dom"
const Footer = () => {
  return (
    <div className='footer'>
      <div className="leftfooter">
        <h4>Download Our App</h4>
        <p>Download App for Android and IOS Mobile Devices.</p>
        <img src={playstore} alt="playstore" />
        <img src={appstore} alt="appstore" />
      </div>
      <div className="midfooter">
        <h1>LOGO</h1>
        <p>Best Quality is our First Priority.</p>
        <p>Copyrights2023 &copy; Aman Devani.</p>
      </div>
      <div className="rightfooter">
        <h4>Follow Us</h4>
         <Link to="https://www.instagram.com/devani_aman/">Instagram</Link> 
      </div>
    </div>
  )
}

export default Footer
