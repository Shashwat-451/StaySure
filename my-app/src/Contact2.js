import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./contact2.css"
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



import { faYoutube, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
const Contact2 = () => {
  return (
    <div className='app2'>
         <div className="container ">
          <div className="ju" ><h1 className="text-center mt-3 ">Contact Us</h1></div>
           <div className="row">
           <div className="col-12 col-md-6 coll1 text-center">
                <h1 className="text-center mt-3 lets">Let's Connect to Us</h1>
                    <div className="biggyy">
                    <div className="biggy">
                      
                      </div>
                        
                     
								


                    </div>
                    <div className="biggyy">
                    <div className=" m-4 mt-5 biggy2">
                    <a href="#"><i className="fab fa-youtube">  <FontAwesomeIcon icon={faYoutube} className="ico " color="red" /></i></a>
                      </div>
                      <div className=" m-4 mt-5 biggy2">
                      <a href="#"><i className="fab fa-twitter">  <FontAwesomeIcon icon={faTwitter} className="ico " size="60x" color="#1DA1F2" /></i></a>
                      </div>
                      <div className=" m-4 mt-5 biggy2">
                      <a href="#"><i className="fab fa-instagram">  <FontAwesomeIcon icon={faInstagram} className="ico " color="#bc2a8d" /></i></a>
                      </div>
                      <div className=" m-4 mt-5 biggy2">
                      <a href="#"><i className="fab fa-linkedin-in">  <FontAwesomeIcon icon={faLinkedin} className="ico " color="#0072b1" /></i></a>
                      </div>

                      </div>

              </div>
              <div className="col-12 col-md-6 coll2">
              <h1 className="text-center mt-3 mb-5 ju2">Say Something !</h1>
              <div className="biggyy">
           
              <input className="mt-3" placeholder='Enter your Name'/>
          

            
              </div>
              <div className="biggyy">
            
            
              <input  placeholder='Enter your Email'/>
             
              </div>
              <div className="biggyy">
           
              <textarea placeholder='Enter your message here'/>

              </div>
              <div className="biggyy">

             <Button>Submit</Button>
              </div>
           </div>
           </div>
         </div>
    </div>
  )
}

export default Contact2
