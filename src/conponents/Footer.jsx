import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
function Footer() {
  return (
   
    <div className="icons">
   <span style={{color: "#4267B2"}}>

<FaFacebook />
   </span>
   <span style={{color: "#C13584"}}> <FaInstagramSquare />
   </span>
   <span style={{color: "#1DA1F2"}}>  <FaTwitter />
   </span>
   <p>All rights reserved Design Hy Vijey Thapa</p>

       
    </div>
  )
}

export default Footer