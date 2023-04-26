import React from 'react'
import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">

        <div className="fpItem">
       <img src="r1.jpg" alt="" className="fpImg" /> 
       <span className="fpName">Wizzy</span>
       <span className="fpCity">Chandigarh</span>
       <span className="fpPrice">$150</span>
       <div className="fpRating">
       <button>8</button>
       <span>Great</span>
       </div>
       </div>

       <div className="fpItem">
       <img src="r1.jpg" alt="" className="fpImg" /> 
       <span className="fpName">Wizzy</span>
       <span className="fpCity">Chandigarh</span>
       <span className="fpPrice">$150</span>
       <div className="fpRating">
       <button>8</button>
       <span>Great</span>
       </div>
       </div>

       <div className="fpItem">
       <img src="r1.jpg" alt="" className="fpImg" /> 
       <span className="fpName">Wizzy</span>
       <span className="fpCity">Chandigarh</span>
       <span className="fpPrice">$150</span>
       <div className="fpRating">
       <button>8</button>
       <span>Great</span>
       </div>
       </div>


    </div>
  )
}

export default FeaturedProperties