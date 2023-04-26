import React from "react";
import "./hotel.css";
import websitelogo from '../../.././imagesvid/websitelogo.png'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'

import { Link } from "react-router-dom";
// import Navbar from "../../components/navbar/Navbar";
// import Header from "../../components/header/Header";
// import MailList from "../../components/mailList/MailList";
import Footer from "../../../Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { AuthContext } from "../../components/context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Reserve from "../../components/reserve/Reserve";
import axios from "axios"
import { Button } from 'react-bootstrap';


import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faYoutube, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'





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
   navigate("/payment")
    axios.post("http://localhost:9000/login", user)
      .then(res =>{
        alert(res.data.message)
        setLoginUser(res.data.user)
        // setModalShow(false)
        window.location.reload(); 
        navigate("/contact")
       
       
        
      } )
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
            <h1 style={{marginBottom:"40px"}}>LOGIN</h1>
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
        <div className="d-none d-xl-block">
        <div className="biggyy ">
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
   
    </div>


      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}





const Hotel = ({item}) => {

  const [modalShow, setModalShow] = React.useState(false);

  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const { data, loading, error } = useFetch(`/hotels/find/${id}`)
  const{user}=useContext(AuthContext)
  console.log(user);
  const navigate=useNavigate()
  const photos = [
    {
      src:
        "https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg",
    },

    {
      src:
        "https://images.rosewoodhotels.com/is/image/rwhg/seascape-ocean-view-twin-room",
    },
    {
      src:
        "https://media.istockphoto.com/photos/hotel-corridor-picture-id184618876?k=20&m=184618876&s=612x612&w=0&h=Gx3h4RkKLZ5w7bMDY0vYx6WtFwuc_4ptjHqAaHmZxwA=",
    },
    {
      src:
        "https://i.pinimg.com/originals/b7/9a/a2/b79aa2a79689c139cda069fe643632d8.jpg",
    },
    {
      src:
        "https://media.architecturaldigest.com/photos/5fa96ad2ef4a8be843bc1412/master/pass/lounge02.jpg",
    },

    {
      src:
        "https://www.falstaff-travel.com/wp-content/uploads/2021/12/neue-hotels-2022-aman-new-york.png",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  const handleClick = () =>{
    if(user){setOpenModal(true);

    }else{
      navigate("/login");
      console.log(user);
    }
  }

  return (
    <div>

 
<Navbar className="hell p-0 m-0" bg="black"  fixed="top" expand="lg" variant="dark">
        <Container>
                 <Navbar.Brand ><img src={websitelogo} alt="img" height={60}></img></Navbar.Brand>
          {/* <Navbar.Brand className=" p-3 log text-white" href="#home">PARADISE INN</Navbar.Brand> */}
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className=" ">
              <Nav.Link className="helll  " as={Link} to="/">Home</Nav.Link>

              <NavDropdown className=" helll" title="Locations" id="basic-nav-dropdown">
                <NavDropdown.Item  as={Link} to="/mumbai">Mumbai</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/chennai">Chennai</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/delhi">Delhi</NavDropdown.Item>
                <NavDropdown.Item  as={Link} to="/kolkata">Kolkata</NavDropdown.Item>
                <NavDropdown.Item  as={Link} to="/Goa">Goa</NavDropdown.Item>
                {/* <NavDropdown.Dvider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}

              </NavDropdown>
              <Nav.Link className="helll active" as={Link} to="/rooms">Rooms</Nav.Link>
              <Nav.Link className="helll " as={Link} to="/services">Restaurant</Nav.Link>
              <Nav.Link className="helll " as={Link} to="/explore">Explore</Nav.Link>
              <Nav.Link className="helll " as={Link} to="/blogs">Blogs</Nav.Link>
              <Nav.Link className="helll" as={Link} to="/contact">Contact Us</Nav.Link>
            
            </Nav>
          </Navbar.Collapse>
 
          <div className="text-center tobut">
            <button style={{paddingLeft:"12px",fontSize:"20px",paddingRight:"12px",paddingTop:"6px",paddingBottom:"6px",marginBottom:"10px"}} className='btn56' >Book Now !</button>
            </div>
        </Container>
       
      </Navbar>

      <div className="outer_div22">
        <img src="https://wallpaperaccess.com/full/8183894.jpg" />

        <div className="content d-flex align-items-center">
          <div className="container text-center ">
            {/* <h1>Welcome to Paradise Inn </h1>
            <h2 className="text-center">CHENNAI</h2> */}
            <h3 style={{opacity:0.8,fontSize:60}}>Rooms</h3>

          </div>
        </div>
      </div>
      <div className="stay" >
                            <h1 className='text-center mb-5 mt-5'> ROOM VIEW</h1>
                            
                          
                        </div>

      {/* <Navbar />
      <Header type="room" /> */}
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          {/* <button className="bookNow">Reserve or Book Now !!</button> */}
          <h1 className="hotelTitle">{data.name}</h1>
          <div className="hotelAddress">
            {/* <FontAwesomeIcon icon={faLocationDot} /> */}
            {/* <span>FGHK HJKKL</span> */}
          </div>

          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper">
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails ">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle ">Room Features :</h1>
              <p className="hotelDesc">
                <p className="text-left">1.All our guestrooms are elegantly furnished with handmade
                furniture include luxury en-suite facilities with complimentary
                amenities pack, flat screen LCD TV, tea/coffee making
                facilities, fan, hairdryer and the finest pure white linen and
                towels.
                </p>
                <p className="text-left">
                2. It has accommodations with air conditioning and free
                WiFi. The units come with hardwood floors and feature a fully
                equipped kitchenette with a microwave, a flat-screen TV, and a
                private bathroom with shower and a hairdryer.
                </p>
                <p className="text-left">
                3. A fridge is also offered, as well as an electric tea pot and a coffee machine.
                Popular points of interest near the apartment include Cloth
                Hall, Main Market Square and Town Hall Tower.
                </p>
                <p className="text-left">
                4. The nearest airport is John Paul II International Kraków–Balice, 16.1 km
                from Tower Street Apartments, and the property offers a paid
                airport shuttle service.
                </p>
              </p>
              <div  className="hotelDetailsPrice text-center">
              <h1 style={{color:'black',fontSize:'20px'}}>Perfect for stay!</h1>
              <span>
                If you want to enjoy your day with comfort then you can choose
                Marvellous Rooms
              </span>
              <h2>
                <b>$650</b>
              </h2>
              {/* <button onClick={handleClick}>Reserve or Book Now !!</button> */}

              <div className="text-center">
          <button style={{paddingLeft:"4px",fontSize:"20px",color:"white",paddingRight:"4px",paddingTop:"6px",paddingBottom:"6px",marginTop:"0px",marginLeft:"10px",backgroundColor:"black"}} className="btn56" variant="primary" onClick={() => setModalShow(true)}>
           Book Now !!
      </button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
            {/* <button className='btn btn-dark  helll' >Register</button> */}
            </div>


            </div>
            </div>
           
          </div>
        </div>
        {/* <MailList/> */}
        {/* <Footer /> */}
      </div>
      {/* <Reserve setOpen={setOpenModal} hotelId={id}/> */}
    
      <Footer/>
    </div>
  );
};

export default Hotel;
