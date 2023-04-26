import React,{useState} from 'react'
import "./register.css"
import axios from "axios"

import websitelogo from '../../imagesvid/websitelogo.png'

import 'aos/dist/aos.css'; 
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import '../../Menu.css'
import { Link } from "react-router-dom";
import Footer from '../../Footer';
import { useNavigate } from 'react-router-dom';

const Register = () => {

  let navigate = useNavigate();

  function handleClicking() {
    navigate('/login');

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
         
            navigate("/login")
          })
        }
        else{
            alert("Invalid Input")
        }
        
    }

  return (
    <>

<Navbar className="hell p-0 m-0" bg="black"  fixed="top" expand="lg" variant="dark">
        <Container>
                 <Navbar.Brand ><img src={websitelogo} alt="img" height={60}></img></Navbar.Brand>
          {/* <Navbar.Brand className=" p-3 log text-white" href="#home">PARADISE INN</Navbar.Brand> */}
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className=" ">
              <Nav.Link className="helll  active" as={Link} to="/">Home</Nav.Link>

              <NavDropdown className=" helll" title="Locations" id="basic-nav-dropdown">
                <NavDropdown.Item  as={Link} to="/mumbai">Mumbai</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/chennai">Chennai</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/delhi">Delhi</NavDropdown.Item>
                <NavDropdown.Item  as={Link} to="/kolkata">Kolkata</NavDropdown.Item>
                <NavDropdown.Item  as={Link} to="/Goa">Goa</NavDropdown.Item>
                {/* <NavDropdown.Dvider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}

              </NavDropdown>
              <Nav.Link className="helll" as={Link} to="/rooms">Rooms</Nav.Link>
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


   <div className="outer_divv2">
    <img src="https://wallpaperaccess.com/full/176600.jpg" alt="img"/>
    <div className="apps contentt">
    <div className='register'>
        
        <h1 >REGISTER</h1>
        <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={handleChange}></input>
        <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={handleChange}></input>
        <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={handleChange}></input>
        <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={handleChange}></input>
        <div className="button" onClick={register}>Register</div>
        <div style={{color:"white"}}>or</div>
        <div className="button" onClick={handleClicking}>Login</div>
    </div>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default Register
