import React from 'react'
import '../HomeUpper.css'
const Locations = () => {

  const mystyle={
    boxShadow: "0px 10px 10px 0px rgba(0, 0, 0, 0.8)",
    marginBottom:"20px"

  }
  return (
    <>
    <div className="stay pb-5 mt-0">
          <h1 className="text-center mt-0"> Locations</h1>
        </div>
    <div className="row ht mt-0">



        <div className="col-6 col-sm-3 col-md-2 text-center ">
            <a href="/mumbai"><img style={mystyle} className="mystyle" src="https://www.swantour.com/sites/default/files/rambagh-palace-jaipur-small_7.jpg"/></a>
            <h3>Mumbai</h3>
        </div>
        <div className="col-6 col-sm-3 col-md-3 col-lg-2 text-center">
        <a href="/chennai"><img style={mystyle} className="mystyle"  src="https://wallpaperaccess.com/full/2690577.jpg"/></a>
          <h3>Chennai</h3>
          </div>
          <div className="col-6 col-sm-3 col-md-3 col-lg-2 text-center">
          <a href="/kolkata"><img style={mystyle} className="mystyle" src="https://wallpapercave.com/wp/wp9914189.jpg"/></a>
          <h3>Kolkata</h3>
          </div>
          <div className="col-6 col-sm-6 col-md-3 col-lg-2 text-center">
          <a href="/delhi"><img style={mystyle} className="mystyle" src="https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg"/></a>
          <h3>Delhi</h3>
          </div>
          <div className="col-6 col-sm-3 col-md-3 col-lg-2 text-center ">
          <a href="/Goa"><img style={mystyle} className="mystyle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7aI36NspMg4pl7js-cHC3zgkp9CVTfrJVaA&usqp=CAU"/></a>
          <h3>Goa</h3>
          </div>
    </div>
    </>
      
  )
}

export default Locations
