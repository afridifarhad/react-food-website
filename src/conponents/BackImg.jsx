import React from 'react'
import Background from '../assets/bg.jpg'

function BackImg() {
  return (
    <div className="backImg">
        <img src={Background} alt="" />
        <input type="text" placeholder='Search for Food' />
        <button>Search</button>

    </div>
  )
}

export default BackImg