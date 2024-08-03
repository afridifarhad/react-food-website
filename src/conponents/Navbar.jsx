import React from 'react'
import Logo from '../assets/logo.jpg'
import BackImg from './BackImg'
import FoodMenu from './FoodMenu'
import Footer from './Footer'


function Navbar() {
  return (
    <div> 
        <nav>
            <img src={Logo} alt="notshowing" /> <span>wowFood</span>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Foods</li>
                <li>Contact</li>

            
            </ul>
        </nav>
       
        <BackImg /> 
        <FoodMenu />
        <Footer />
       
        
           </div>
         

         
  )
}

export default Navbar