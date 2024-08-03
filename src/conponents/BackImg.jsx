import React from 'react'
import Background from '../assets/bg.jpg'
import One from '../assets/food1.jpg'
import Two from '../assets/food2.jpg'
import Three from '../assets/food3.jpg'


function BackImg() {
  return (
    <div>
    <div className="backImg">
        <img src={Background} alt="" />
        <input type="text" placeholder='Search for Food' />
        <button>Search</button>

    </div>

    <div className="food">
    <h1>Explore Food </h1>
   </div>
   <div className="food-imges">
   <div className="explore-food">
        <img src={One} alt="" />
        <span>Haleem</span>
    </div> <div className="explore-food">
        <img src={Two} alt="" />
        <span>Pasta</span>
    </div> <div className="explore-food">
        <img src={Three} alt="" />
        <span>Pizza</span>
    </div>
       </div>

    </div>
  )
}

export default BackImg