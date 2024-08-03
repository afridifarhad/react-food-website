import React from 'react'
import Card from '../assets/food1.jpg'
function FoodMenu() {
    return (
        <>



            <div className="food-menu">
                <h1>Food Menu</h1>
                <div className="cards">
                   
                    <div className="menu-img">
                        <img src={Card} alt="" />

                        <div className="desc">
                            <h2>Food Title</h2>
                            <h3>$2.5</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

                        </div>
                        <button>Order Now</button>
                    </div>




                    {/* card  2 */}

                    
                    <div className="menu-img">
                        <img src={Card} alt="" />

                        <div className="desc">
                            <h2>Food Title</h2>
                            <h3>$2.5</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

                        </div>
                        <button>Order Now</button>
                    </div>



                    {/* card 3 */}

                    
                    <div className="menu-img">
                        <img src={Card} alt="" />

                        <div className="desc">
                            <h2>Food Title</h2>
                            <h3>$2.5</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

                        </div>
                        <button>Order Now</button>
                    </div>

                    {/* card 4 */}

                  
                    <div className="menu-img">
                        <img src={Card} alt="" />

                        <div className="desc">
                            <h2>Food Title</h2>
                            <h3>$2.5</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

                        </div>
                        <button>Order Now</button>
                    </div>
                    {/* card 5 */}

                   
                    <div className="menu-img">
                        <img src={Card} alt="" />

                        <div className="desc">
                            <h2>Food Title</h2>
                            <h3>$2.5</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

                        </div>
                        <button>Order Now</button>
                    </div>
                    
                    {/* card 6 */}
                  
                    <div className="menu-img">
                        <img src={Card} alt="" />

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