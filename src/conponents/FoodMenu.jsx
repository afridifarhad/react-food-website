import React from 'react'
import Card1 from '../assets/card1.jpg'
import Card2 from '../assets/card2.jpg'
import Card3 from '../assets/card3.jpg'
import Card4 from '../assets/card4.jpg'
import Card5 from '../assets/card5.jpg'
import Card6 from '../assets/card6.jpg'


function FoodMenu() {
    return (
        <>



            <div className="food-menu">
                <h1>Food Menu</h1>
                <div className="cards">
                   
                    <div className="menu-img">
                        <img src={Card1} alt="" />

                        <div className="desc">
                            <h2>Food Title</h2>
                            <h3>$2.3</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

                        </div>
                        <button>Order Now</button>
                    </div>




                    {/* card  2 */}

                    
                    <div className="menu-img">
                        <img src={Card2} alt="" />

                        <div className="desc">
                            <h2>Food Title</h2>
                            <h3>$3.5</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

                        </div>
                        <button>Order Now</button>
                    </div>



                    {/* card 3 */}

                    
                    <div className="menu-img">
                        <img src={Card3} alt="" />

                        <div className="desc">
                            <h2>Food Title</h2>
                            <h3>$1.5</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

                        </div>
                        <button>Order Now</button>
                    </div>

                    {/* card 4 */}

                  
                    <div className="menu-img">
                        <img src={Card4} alt="" />

                        <div className="desc">
                            <h2>Food Title</h2>
                            <h3>$4.0</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

                        </div>
                        <button>Order Now</button>
                    </div>
                    {/* card 5 */}

                   
                    <div className="menu-img">
                        <img src={Card5} alt="" />

                        <div className="desc">
                            <h2>Food Title</h2>
                            <h3>$5.5</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

                        </div>
                        <button>Order Now</button>
                    </div>
                    
                    {/* card 6 */}
                  
                    <div className="menu-img">
                        <img src={Card6} alt="" />

                        <div className="desc">
                            <h2>Food Title</h2>
                            <h3>$2.5</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

                        </div>
                        <button>Order Now</button>
                    </div>

                </div>
                <h4>See All Foods</h4>
            </div>

        </>
    )
}

export default FoodMenu