import React from 'react'
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Mumbai.css';
const Mumbai = () => {
  return (
    <div>
<div className='container-fluid m-0 ft' >
                    {/* <div className="row">
                        <div className="col-sm-12">

                        </div>
                    </div> */}
                    <div className="row ft">
                        <div className="col-12">
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                    
                                        className="d-block ft w-100"
                                        src="https://wallpaperaccess.com/full/1850928.jpg"
                                        alt="First slide"
                                        height={700} width={1600}
                                    />


                                  
                                    <Carousel.Caption className="carouselcaption" >
                                        <h3 style={{marginTop:"-350px",marginLeft:"100px",fontSize:"50px"}}>PARADISE INN</h3>
                                        <p>HOTELS</p>
                                        <p>Experience the paradise on earth with Paradise Inn.</p>
                                    </Carousel.Caption>
                                    
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block ft w-100 "
                                        src="https://wallpaperaccess.com/full/160214.jpg"
                                        alt="Third slide"
                                        height={700} width={1600}
                                    />




                                    {/* <Carousel.Caption>
                                    <div  className="content  d-flex align-items-center">
 <div  className="container  text-center">
          <h1 style={{marginTop:"-350px",marginLeft:"50px",fontSize:"50px"}} >PARADISE INN</h1>
          <h2 className="text-center mb-4 mt-3 ">MUMBAI</h2>
          <h3>Experience the city of dreams like never before</h3>
        
 </div>
</div>
                                        </Carousel.Caption> */}
                                        <Carousel.Caption className="carouselcaption" >
                                        <h3 style={{marginTop:"-350px",marginLeft:"100px",fontSize:"50px"}}>PARADISE INN</h3>
                                        <p>MUMBAI</p>
                                        <p>Experience the city of dreams like never before</p>
                                    </Carousel.Caption>
                                </Carousel.Item>


                                <Carousel.Item>
                                    <img
                                        className="d-block ft  w-100"
                                        src="https://wallpaperaccess.com/full/118078.jpg"
                                        alt="Second slide"
                                        height={700} width={1600}
                                    />

                                   
 <Carousel.Caption className="carouselcaption" >
                                        <h3 style={{marginTop:"-350px",marginLeft:"100px",fontSize:"50px"}}>PARADISE INN</h3>
                                        <p>DELHI</p>
                                        <p>Experience the capital city like never before</p>
                                    </Carousel.Caption>

 
                                </Carousel.Item>


                                <Carousel.Item>
                                    <img
                                    
                                        className="d-block ft w-100"
                                        src="https://wallpaperaccess.com/full/375928.jpg"
                                        alt="First slide"
                                        height={700} width={1600}
                                    />



                                    

<Carousel.Caption className="carouselcaption" >
                                        <h3 style={{marginTop:"-350px",marginLeft:"100px",fontSize:"50px"}}>PARADISE INN</h3>
                                        <p>CHENNAI</p>
                                        <p>Experience the city of temples like never before</p>
                                    </Carousel.Caption>

                                </Carousel.Item>




                                <Carousel.Item>
                                    <img
                                    
                                        className="d-block ft w-100"
                                        src="https://wallpaperaccess.com/full/117974.jpg"
                                        alt="First slide"
                                        height={700} width={1600}
                                    />



                                   

<Carousel.Caption className="" >
                                        <h3 className="carouselcaption" style={{marginTop:"-350px",marginLeft:"100px",fontSize:"50px"}}>PARADISE INN</h3>
                                        <p className="carouselcaption">KOLKATA</p>
                                        <p className="carouselcaption">Experience the CITY OF JOY like never before</p>
                                    </Carousel.Caption>


                                </Carousel.Item>




                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
    
  )
}

export default Mumbai
