import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import websitelogo from './imagesvid/websitelogo.png'
// import HomeLower from './HomeLower'
import './HomeUpper.css'
import Menu from './Menu'
import BootstrapCarouselComponent from './BootstrapCarouselComponent'
import RecentBlogs from './RecentBlogs';
// import vid2 from './imagesvid/vid2.mp4'
// import TextOnHover from './TextOnHover';
import Footer from './Footer';
import Locations from './Components/Locations';
import Menu2 from './Menu2';
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap'
import './Menu.css'
import { Link } from "react-router-dom";
import BookingForm from './BookingForm';
import Modal from "react-bootstrap/Modal";
import { Redirect } from 'react-router-dom'
import "./Components/login/login.css"
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faYoutube, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import "./RegisterHome.css"

// ******************************************Modal Function**********************************************



function MyVerticallyCenteredModal(props,setLoginUser) {



 
  let navigate = useNavigate();

  function handleClicking() {
    navigate('/login');

  }
 
  var Loginform= document.getElementById("Loginform")
  var Regform= document.getElementById("Regform")
  var Indicator= document.getElementById("Indicator")
    

  const [regstyle, setregStyle] = useState("");
  const [logstyle, setlogStyle] = useState("");
  const [indstyle, setindStyle] = useState("");
  const [spanstyle, setspanStyle] = useState("spanstyle");
  const [span2style, setspan2Style] = useState("span2style");


  // const [reg2style, setreg2Style] = useState("");
  // const [log2style, setlog2Style] = useState("");


     function login2()
     {
        //  Regform.style.transform="translateX(0px)";
        //  Loginform.style.transform="translateX(20px)";
        //  Indicator.style.transform="translateX(0px)";

        setregStyle("regslide");
        setlogStyle("logslide");
        setindStyle("indstyle");
        setspanStyle("span2style");
        setspan2Style("spanstyle");
     } 

     function register2()
     {
      setregStyle("reg2slide");
      setlogStyle("log2slide");
      setindStyle("ind2style");
      setspanStyle("spanstyle");
      setspan2Style("span2style");
        //  Regform.style.transform="translateX(-480px)";
        //  Loginform.style.transform="translateX(-500px)";
        //  Indicator.style.transform="translateX(100px)";
     }
    function conf()
    {   
        alert("Congratulations! You have been registered successfully");
    }

 
    const [user,setUser]=useState({
        name:"",
        email:"",
        password:"",
        reEnterPassword:""

    })

    const handleChange=e=>{
        const {name,value}=e.target // whatever change takes place after writing in form gets stored in event continuously and then we extract name and value from there in next line.
        // console.log(name,value);
        setUser({
            ...user, //all else value same
            [name]:value  //change the name attribute to value

        })
    }

  

    const register= () => {
     navigate("/hotels/:id")
        const {name,email,password,reEnterPassword}=user
        if(name && email && password && (password===reEnterPassword))
        {
          // alert("posted")
          axios.post("http://localhost:9000/register",user)
          .then(res =>{
            alert(res.data.message)
            
            // navigate("/login")
          })
        }
        else{
            alert("Invalid Input")
        }
        
    }


  const login = () => {
    navigate("/homee")
    axios.post("http://localhost:9000/login", user)
      .then(res =>{
        alert(res.data.message)
        setLoginUser(res.data.user)
        this.setRedirect("/");
       
       

        // setModalShow(false)
        // window.location.reload(); 
        // navigate("/contact")
       
       
        
      }
     
      )
    //   .then(res=>console.log(res))


  }
 const handleModal=()=>
 {
 
 }

  return (
    
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="special_modal"
    >
      {/* <Modal.Header closeButton className="text-center">
        {/* <Modal.Title id="contained-modal-title-vcenter " className="text-center">
         REGISTER
        </Modal.Title> *
      </Modal.Header> */}
      <Modal.Body>
        {/* <h4 className="text-center">Centered Modal</h4> */}
        <div className="outer_divv2">

  <div className="imgcont">
    <img  src="https://cdn.wallpapersafari.com/74/49/F7dPYn.jpg" alt="img"/>

    </div>

    <div  className=" apps contentt form">
    <div className="form-container ">
                     <div className="form-btn">
                     <span className={spanstyle} onClick={register2}>Register</span>
                           <span  className={span2style} id="span2" onClick={login2}>Login</span>
                           
                           {/* <hr className={indstyle} id="Indicator"/> */}
                         </div>


    <div className= {regstyle} >
    <div className='register ' id='Regform'>
        
        <h1 >REGISTER</h1>
        <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={handleChange}></input>
        <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={handleChange}></input>
        <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={handleChange}></input>
        <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={handleChange}></input>
        <div className="button" onClick={register}>Register</div>
        {/* <div style={{color:"white"}}>or</div>
        <div className="button" onClick={handleClicking}>Login</div> */}
        {/* <Button className="button" variant="primary" onClick={() => setModalShow(true)}>
        Login
      </Button> */}
        
    </div>
    </div>
    
    <div className= {logstyle} >

          <div className='login' id='Loginform'>
            {console.log(user)}
            <h1  >LOGIN</h1>
            <input type="text" name="email" value={user.email} placeholder="Enter your Email" onChange={handleChange}></input>
            <input type="password" name="password" value={user.password} placeholder="Enter your password" onChange={handleChange}></input>
            {/* <div className="button" onClick={login}>Login</div> */}
            <div className="button" onClick={()=>{
              login();
              handleModal(()=>{
                props.onHide();
              });
            }}>Login</div>
            {/* <div>or</div>
            <div className="button" onClick={handleClicking}>Register</div> */}
            {/* <div className="button" onClick={() => { handleClicking; ;}}>Register</div> */}
          </div>
        </div>

        </div>
        <div className="biggyy d-none d-md-block">
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
   
    </div>


      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}


const HomeUpper = () => {
 
  let navigate = useNavigate();


  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
    <Navbar className="hell p-0 m-0" bg="black"  fixed="top" expand="lg" variant="dark">
        <Container>
                 <Navbar.Brand ><img src={websitelogo} alt="img" height={60}></img></Navbar.Brand>
          {/* <Navbar.Brand className=" p-3 log text-white" href="#home">PARADISE INN</Navbar.Brand> */}
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className=" ">
              <Nav.Link className="helll active " as={Link} to="/">Home</Nav.Link>
              

              <NavDropdown className=" helll" title="Locations" id="basic-nav-dropdown">
                <NavDropdown.Item  as={Link} to="/mumbai">Mumbai</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/chennai">Chennai</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/delhi">Delhi</NavDropdown.Item>
                <NavDropdown.Item  as={Link} to="/kolkata">Kolkata</NavDropdown.Item>
                <NavDropdown.Item  as={Link} to="/Goa">Goa</NavDropdown.Item>
                {/* <NavDropdown.Dvider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}

              </NavDropdown>
              <Nav.Link className="helll " as={Link} to="/rooms">Rooms</Nav.Link>
              <Nav.Link className="helll " as={Link} to="/services">Restaurant</Nav.Link>
              <Nav.Link className="helll " as={Link} to="/explore">Explore</Nav.Link>
              <Nav.Link className="helll " as={Link} to="/blogs">Blogs</Nav.Link>
              <Nav.Link className="helll" as={Link} to="/contact">Contact Us</Nav.Link>
            
            </Nav>
          </Navbar.Collapse>
 
          <div className="text-center tobut">
          <button style={{paddingLeft:"12px",fontSize:"20px",paddingRight:"12px",paddingTop:"6px",paddingBottom:"6px",marginBottom:"10px"}} className="btn56" variant="primary" onClick={() => navigate("/hotels/:id")}>
        Book Now !
      </button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
            {/* <button className='btn btn-dark  helll' >Register</button> */}
            </div>
        </Container>
       
      </Navbar>
  
     {/* <div className="outer_div2">
     <video loop muted autoPlay controls = ''>
        <source src={vid2} type="video/mp4"/>
 
      </video>

 <div className="content d-flex align-items-center">
  <div className="container text-center">
           <h1>Welcome to my Website</h1>
           <h3>Never Say Never</h3>
  </div>
 </div>
      </div> */}

<div className="outer_div2">
   <img src="https://wallpaperaccess.com/full/1850928.jpg" alt="img1"/>

   <div className="content d-flex align-items-center">
 <div className="container text-center">
          <h1>PARADISE INN</h1>
          <h2 className="text-center mb-4 mt-3 ">HOTELS <span className="change_content"></span></h2>
          <h3>Experience the paradise on earth with Paradise Inn</h3>
          <BookingForm/>
 </div>
</div>
{/* <BookingForm/> */}
     </div>
      {/* <Menu2/> */}

     




     
      <div className="stay mt-5">
         <h1 className="text-center mt-0">Services</h1>
         </div>
        <div className="row  outt">
          <div className="col-12 col-md-6 col-xl-4  ">
             
             <div className="side1 side">
                <img src="https://media.cntraveler.com/photos/53e2f492c2d3f39d3610bd02/master/w_1024,h_768,c_limit/subsix-7.jpg" alt="Image1" />
               <div className="content"> <h3 className="side11">Restaurant</h3></div>
             </div>
             <div className="side2 side">
             <img src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image1" />
               <div className="content"> <h3 className="side11">Gym</h3></div>
              </div>
          </div>

          <div className="col-12 d-none d-xl-block col-sm-0 col-xl-4">
          <div className="center side">
          <img src="https://images.pexels.com/photos/12075913/pexels-photo-12075913.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image1" />
               <div className="content"> <h3 className="side11">Shopping Center</h3></div>
              </div>
          </div>

          <div className="col-12 col-md-6 col-xl-4 ">
            
          <div className=" side3 side">
          <img src="https://images.pexels.com/photos/3722923/pexels-photo-3722923.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image1" />
               <div className="content"> <h3 className="side11">Sports Complex</h3></div>
           </div>
        <div className="side4 side">
        <img src="https://images.pexels.com/photos/1487010/pexels-photo-1487010.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image1" />
               <div className="content"> <h3 className="side11">Outdoor</h3></div>
         </div>

          </div>
          

          
        </div>

        <section>
  <div class="row d-flex justify-content-center">
    <div class="col-md-10 col-xl-8 text-center">
    <div className="stay ">
         <h1 className="text-center ">Testimonials</h1>
         </div>
      
    </div>
  </div>

  <div class="row text-center m-auto">
    <div class="col-sm-4 mb-5 mb-md-0  dy">
      <div class="d-flex justify-content-center mb-4">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
          class="rounded-circle shadow-1-strong" width="150" height="150" />
      </div>
      <h5 class="mb-3">Maria Smantha</h5>
      <h6 class="text-primary mb-3">Web Developer</h6>
      <p class="px-xl-3">
        <i class="fas fa-quote-left pe-2"></i>Thank you so much to the Paradise Inn Team. I left something behind at the hotel and also wanted them to issue another receipt for tax purposes. They immediately worked on it and the receipt was sent in the hour by email.
      </p>
      <ul class="list-unstyled d-flex justify-content-center mb-0">
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star-half-alt fa-sm text-warning"></i>
        </li>
      </ul>
    </div>
    <div class="col-sm-4 mb-5 mb-md-0 dy ">
      <div class="d-flex justify-content-center mb-4">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQXu4-Scl4Wm6xzN9sYMslJ5ru9EY5gpfvHw&usqp=CAU"
          class="rounded-circle shadow-1-strong" width="150" height="150" />
      </div>
      <h5 class="mb-3">Elon Musk</h5>
      <h6 class="text-primary mb-3">CEO,TESLA</h6>
      <p class="px-xl-3">
        <i class="fas fa-quote-left pe-2"></i>We had our company annual offsite at Paradise Inn in Mumbai. Paradise Inn was the perfect choice for us: there are multiple large event spaces for various activities and the great staff made sure the events went smoothly.
      </p>
      <ul class="list-unstyled d-flex justify-content-center mb-0">
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
      </ul>
    </div>
    <div class="col-sm-4 mb-0  dy">
      <div class="d-flex justify-content-center mb-4">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
          class="rounded-circle shadow-1-strong" width="150" height="150" />
      </div>
      <h5 class="mb-3">John Smith</h5>
      <h6 class="text-primary mb-3">Marketing Specialist</h6>
      <p class="px-xl-3">
        <i class="fas fa-quote-left pe-2"></i>The service here has just been fantastic; whatever we needed was brought to us right away. Our event coordinator was amazing, she has been most helpful. The food was so delicious; the entire experience was really great.
      </p>
      <ul class="list-unstyled d-flex justify-content-center mb-0">
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i class="far fa-star fa-sm text-warning"></i>
        </li>
      </ul>
    </div>
  </div>
</section>


       
        <BootstrapCarouselComponent/>
        {/* <TextOnHover/> */}

        <RecentBlogs/>
        <Locations/>
        <Footer/>
       
    </>
  )
}

export default HomeUpper
