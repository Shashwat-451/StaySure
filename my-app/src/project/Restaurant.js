import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import homeimg from './images/homeimg.png';
import s1 from './images/s1.png';
import s2 from './images/s2.png';
import s3 from './images/s3.png';
import s4 from './images/s4.png';
import s5 from './images/s5.png';
import s6 from './images/s6.png';
import Dropdown from 'react-bootstrap/Dropdown';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import websitelogo from '../imagesvid/websitelogo.png'
import { Link } from "react-router-dom";
import './restaurant.css';
import Footer from '../Footer';
import { useNavigate } from 'react-router-dom';
const Restaurant = () => {
    let navigate = useNavigate();

  return (
    <>
        <Navbar className="hell p-0 m-0" bg="black"  fixed="top" expand="lg" variant="dark">
        <Container>
                 <Navbar.Brand ><img src={websitelogo} alt="img" height={60}></img></Navbar.Brand>
          {/* <Navbar.Brand className=" p-3 log text-white" href="#home">PARADISE INN</Navbar.Brand> */}
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className=" ">
              <Nav.Link className="helll " as={Link} to="/">Home</Nav.Link>

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
              <Nav.Link className="helll  active" as={Link} to="/services">Restaurant</Nav.Link>
              <Nav.Link className="helll " as={Link} to="/explore">Explore</Nav.Link>
              <Nav.Link className="helll " as={Link} to="/blogs">Blogs</Nav.Link>
              <Nav.Link className="helll" as={Link} to="/contact">Contact Us</Nav.Link>
            
            </Nav>
          </Navbar.Collapse>
 
          <div className="text-center tobut">
          <button style={{paddingLeft:"12px",fontSize:"20px",paddingRight:"12px",paddingTop:"6px",paddingBottom:"6px",marginBottom:"10px"}} className="btn56" variant="primary" onClick={() => navigate("/hotels/:id")}>
        Book Now !
      </button>
      </div>
        </Container>
       
      </Navbar>

      <div className="outer_div22">
        <img src="https://img.freepik.com/free-vector/happy-people-cooking-sweet-fast-food_74855-5861.jpg?w=2000"/>

        <div className="content d-flex align-items-center">
          <div className="container text-center ">
            {/* <h1>Welcome to Paradise Inn </h1>
            <h2 className="text-center">CHENNAI</h2> */}
             <h3 style={{opacity:1,fontSize:60}}> Restaurant</h3>
            
          </div>
        </div>
      </div>

{/* <!-- home section starts  --> */}

{/* <!-- home section starts  --> */}
<div className="alll">
<section class="home" id="home">

    <div class="content56">
        <h3>Delicious and best quality food</h3>
        <p>“Food for us comes from our relatives, whether they have wings or fins or roots. That is how we consider food. Food has a culture. It has a history. It has a story. It has relationships.”

             Winona LaDuke</p>
        <a href="#" style={{fontSize:"30px"}} className="btn56 ">Order Now</a>
  

        {/* <div class="btn-group">
            <button type="button" class="btn btn-primary dropdown-toggle text-white btn-lg " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="border:none ;">
             Menu
            </button>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#punjabi"><h4>Punjabi Food</h4></a>
              <a class="dropdown-item" href="#south"><h4>South Food</h4></a>
              <a class="dropdown-item" href="#fastf"><h4>Fast Food</h4></a>
              <a class="dropdown-item" href="#desserts"><h4>Desserts and Drinks</h4></a>
            </div>
          </div> */}
<div class="btn-group">
<Dropdown>
       
      <Dropdown.Toggle className="my-dropdown2" variant="success" id="dropdown-basic" >
        Menu
      </Dropdown.Toggle>

      <Dropdown.Menu className="my-dropdown">
        <Dropdown.Item href="#punjabi">Punjabi Food</Dropdown.Item>
        <Dropdown.Item href="#south">South Inidan Food</Dropdown.Item>
        <Dropdown.Item href="#fastf">Fast Food</Dropdown.Item>
        <Dropdown.Item href="#desserts">Desserts and Drinks</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>
    </div>

    <div class="image">
        <img src={homeimg} alt=""/>
    </div>

</section>

{/* <!-- home section ends -->

<!-- speciality section starts  --> */}

<section class="speciality" id="speciality">

    <h1 style={{marginTop:120,marginBottom:100}} class="heading"> our <span>speciality</span> </h1>

    <div class="box-container">

        <div class="box">
            <img class="image" src="https://media.istockphoto.com/photos/falafel-burger-with-avocado-in-a-brioche-bun-picture-id1318627825?k=20&m=1318627825&s=612x612&w=0&h=RG-nmS1J82qt2MFogz7QKIkqr-rJnpVo8xMibLDRX4E=" alt=""/>
            <div class="content56">
                <img src={s1} alt=""/>
                <h3>tasty burger</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa tenetur voluptates aperiam tempore libero labore aut.</p>
            </div>
        </div>
        <div class="box">
            <img class="image" src="https://media.istockphoto.com/photos/butter-chicken-pizza-picture-id1043604390?k=20&m=1043604390&s=612x612&w=0&h=BjxexUD8tUOcDT8mcyvcbpHZGtBroaxweIPRCP8MgzU=" alt=""/>
            <div class="content56">
                <img src={s2} alt=""/>
                <h3>tasty pizza</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa tenetur voluptates aperiam tempore libero labore aut.</p>
            </div>
        </div>
        <div class="box">
            <img class="image" src="https://media.istockphoto.com/photos/different-flavours-ice-cream-balls-picture-id1257875459?k=20&m=1257875459&s=612x612&w=0&h=7bZwg3KYNRI3jiuvA782JNCOcOETi4yWuLcvva7S7Ec=" alt=""/>
            <div class="content56">
                <img src={s3} alt=""/>
                <h3>cold ice-cream</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa tenetur voluptates aperiam tempore libero labore aut.</p>
            </div>
        </div>
        <div class="box">
            <img class="image" src="https://media.istockphoto.com/photos/soft-drink-on-wooden-table-and-men-sitting-picture-id698051792?k=20&m=698051792&s=612x612&w=0&h=Qz5rncuyCN4ZNslhMBQt3kkvhlDTiue5CVRNCli0K_c=" alt=""/>
            <div class="content56">
                <img src={s4} alt=""/>
                <h3>cold drinks</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa tenetur voluptates aperiam tempore libero labore aut.</p>
            </div>
        </div>
        <div class="box">
            <img class="image" src="https://media.istockphoto.com/photos/indian-sweets-picture-id523041362?k=20&m=523041362&s=612x612&w=0&h=BWHz79SBzTF2sZMd_tMoSbKvyZfDUEL9CyXhvSlgwbc=" alt=""/>
            <div class="content56">
                <img src={s5} alt=""/>
                <h3>tasty sweets</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa tenetur voluptates aperiam tempore libero labore aut.</p>
            </div>
        </div>
        <div class="box">
            <img class="image" src="https://media.istockphoto.com/photos/idly-sambar-or-idli-with-sambhar-and-green-red-chutney-popular-south-picture-id1024549286?k=20&m=1024549286&s=612x612&w=0&h=44nLYMnP99IdDWUL2wr0yTuGcfSyZpp3BHp7EdfWxCA=" alt=""/>
            <div class="content56">
                <img src={s6} alt=""/>
                <h3>healty breakfast</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa tenetur voluptates aperiam tempore libero labore aut.</p>
            </div>
        </div>

    </div>

</section>

{/* <!-- speciality section ends -->

<!-- Food starts  --> */}

<section class="popular" id="popular">

    
    <h1 style={{marginTop:120,marginBottom:100}} class="heading"> Special<span> Punjabi</span> Food </h1>

    <div class="box-container" id="punjabi">

        <div class="box">
            <span class="price"> $5 - $20 </span>
            <img src="https://media.istockphoto.com/photos/chhole-curry-with-bhature-picture-id1406305506?k=20&m=1406305506&s=612x612&w=0&h=D99xdMfPk5nrKxkjFHj8rrw204PtkOSdg_vj2S8CRZc=" alt=""/>
            <h3>Chola Bhatura</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
            </div>
            <a href="#" class="btn56">order now</a>
        </div>
        <div class="box">
            <span class="price"> $5 - $20 </span>
            <img src="https://media.istockphoto.com/photos/image-of-kadhaistyle-serving-bowl-of-homemade-dal-makhani-curry-of-picture-id1338247303?k=20&m=1338247303&s=612x612&w=0&h=oT3VKh6Y9qSSQ-hXpW_l2e1AJ1JefRAjxHogvppDvAc=" alt=""/>
            <h3>Dal Makhani</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
            </div>
            <a href="#" class="btn56">order now</a>
        </div>
        <div class="box">
            <span class="price"> $5 - $20 </span>
            <img src="https://media.istockphoto.com/photos/indian-thali-selection-of-various-dishes-served-on-round-wooden-picture-id1287118616?k=20&m=1287118616&s=612x612&w=0&h=UB-9Q7vNYJd32jVGuiKPmyrv04FWFgp-bm0jbckTNWc=" alt=""/>
            <h3>Punjabi Thali</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
            </div>
            <a href="#" class="btn56">order now</a>
        </div>

        <div class="box">
            <span class="price"> $5 - $20 </span>
            <img src="https://media.istockphoto.com/photos/image-of-metal-tray-with-aloo-paratha-pile-topped-with-red-onion-and-picture-id1279134709?k=20&m=1279134709&s=612x612&w=0&h=1uIn4B_peY5QKrsl-tOIVLUXpiKEeyYnwu9QAJZfoJM=" alt=""/>
            <h3>Aloo Parantha</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
            </div>
            <a href="#" class="btn56">order now</a>
        </div>
        <div class="box">
            <span class="price"> $5 - $20 </span>
            <img src="https://media.istockphoto.com/photos/butter-chicken-served-with-homemade-indian-naan-bread-picture-id618457124?k=20&m=618457124&s=612x612&w=0&h=TjiqBwJQqr3xy-_8AGGwmbyOgbDCOEQp0exKK92gSBo=" alt=""/>
            <h3>Butter chicken</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
            </div>
            <a href="#" class="btn56">order now</a>
        </div>
        <div class="box">
            <span class="price"> $5 - $20 </span>
            <img src="https://media.istockphoto.com/photos/sarson-ka-saag-makki-ki-roti-popular-north-indian-main-course-menu-picture-id894140788?k=20&m=894140788&s=612x612&w=0&h=ZZ4RXr_LgXYDoPcSR1alDoFaGVnzYi09zvaYCgx2nLQ=" alt=""/>
            <h3>Makka di roti</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
            </div>
            <a href="#" class="btn56">order now</a>
        </div>

    </div>
    
    <h1 style={{marginTop:120,marginBottom:100}} class="heading"> Special<span> South</span> Indian </h1>

    <div class="box-container" id="south">

        <div class="box">
            <span class="price"> $5 - $20 </span>
            <img src="https://media.istockphoto.com/photos/masala-dosa-on-banana-leaf-with-both-sambar-and-coconut-chutney-south-picture-id1205482290?k=20&m=1205482290&s=612x612&w=0&h=zXOEuo-Capu4KxFgqJgxp09jYR81uaj6ndaAC7YspjM=" alt=""/>
            <h3>Masala Dosa</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
            </div>
            <a href="#" class="btn56">order now</a>
        </div>
        <div class="box">
            <span class="price"> $5 - $20 </span>
            <img src="https://media.istockphoto.com/photos/assorted-south-indian-breakfast-foods-on-wooden-background-ghee-dosa-picture-id1292563627?k=20&m=1292563627&s=612x612&w=0&h=W_LImbTzwz4DxoOrxwc9m7dVmGWO_9hawXKkYq6ZI6Y=" alt=""/>
            <h3>Special South Thali</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
            </div>
            <a href="#" class="btn56">order now</a>
        </div>
        <div class="box">
            <span class="price"> $5 - $20 </span>
            <img src="https://media.istockphoto.com/photos/idli-sambhar-and-chutney-south-indian-dish-on-banana-leaf-picture-id182491284?k=20&m=182491284&s=612x612&w=0&h=tzj8BBd1CEGchYMkskacq3kHILlMQCxcEKqYn3Qw0lo=" alt=""/>
            <h3>Idli Sambhar</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
            </div>
            <a href="#" class="btn56">order now</a>
        </div>
        <div class="box">
            <span class="price"> $5 - $20 </span>
            <img src="https://media.istockphoto.com/photos/crispy-pancake-made-of-fermented-whole-grain-kodo-millet-batter-with-picture-id1321356515?k=20&m=1321356515&s=612x612&w=0&h=T_mt3ibD5ZMexN7avpVm6vH0qtuy07nRGOE8ImqAsV0=" alt=""/>
            <h3>Masala Dosa</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
            </div>
            <a href="#" class="btn56">order now</a>
        </div>
        <div class="box">
            <span class="price"> $5 - $20 </span>
            <img src="https://media.istockphoto.com/photos/group-of-south-indian-food-like-masala-dosa-uttapam-idliidly-wadavada-picture-id1024558380?k=20&m=1024558380&s=612x612&w=0&h=cgkSW1aukxs9wBKXmsqBtCgjZF5lWQbjSr-rhhzz3bs=" alt=""/>
            <h3> Uttapam</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
            </div>
            <a href="#" class="btn56">order now</a>
        </div>
        <div class="box">
            <span class="price"> $5 - $20 </span>
            <img src="https://media.istockphoto.com/photos/pilaf-rice-with-meat-and-vegetables-picture-id855894476?k=20&m=855894476&s=612x612&w=0&h=l0ZSGMXQ8iTMBojKWqnQI_UxYAgj7SFAx_bJ4zrbuuc=" alt=""/>
            <h3>Hyderbadi Biryani</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
            </div>
            <a href="#" class="btn56">order now</a>
        </div>

    </div>




    <h1 style={{marginTop:120,marginBottom:100}} class="heading"> Tasty <span>Fast</span> foods </h1>

    <div class="box-container" id="fastf">

        <div class="box">
            <span class="price"> $5 - $20 </span>
            <img src="https://media.istockphoto.com/photos/falafel-burger-with-avocado-in-a-brioche-bun-picture-id1318627825?k=20&m=1318627825&s=612x612&w=0&h=RG-nmS1J82qt2MFogz7QKIkqr-rJnpVo8xMibLDRX4E=" alt=""/>
            <h3>tasty burger</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
            </div>
            <a href="#" class="btn56">order now</a>
        </div>
        <div class="box">
            <span class="price"> $5 - $20 </span>
            <img src="https://media.istockphoto.com/photos/confectioner-decorating-chocolate-cake-closeup-picture-id1187830875?k=20&m=1187830875&s=612x612&w=0&h=LoRXyD8Jw9N-CfkKtXe23uHctZUetcH5zZFMwIzXapU=" alt=""/>
            <h3>tasty cakes</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
            </div>
            <a href="#" class="btn56">order now</a>
        </div>
        <div class="box">
            <span class="price"> $5 - $20 </span>
            <img src="https://media.istockphoto.com/photos/indian-sweets-in-a-plate-includes-gulab-jamun-rasgulla-kaju-katli-picture-id1054228718?k=20&m=1054228718&s=612x612&w=0&h=OFcioOdcbacinr2F7M0hULoAr3egWnU_BIt5XLmznf0=" alt=""/>
            <h3>tasty sweets</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
            </div>
            <a href="#" class="btn56">order now</a>
        </div>

        <div class="box">
            <span class="price"> $5 - $20 </span>
            <img src="https://media.istockphoto.com/photos/image-of-golden-brown-fresh-crunchy-french-fries-chunky-chips-cooked-picture-id1286476510?k=20&m=1286476510&s=612x612&w=0&h=YfOmgLvEseOTZfU9Eq9mDmiWRUZxP-baBDJ4hMh1lfc=" alt=""/>
            <h3>French Fries</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
            </div>
            <a href="#" class="btn56">order now</a>
        </div>
        <div class="box">
            <span class="price"> $5 - $20 </span>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR39RWzw7zIq6RcSkCmDfRZdrE4j4xK8NptTw&usqp=CAU" alt=""/>
            <h3>Special Chinese</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
            </div>
            <a href="#" class="btn56">order now</a>
        </div>
        <div class="box">
            <span class="price"> $5 - $20 </span>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgEpSGZgo2DJe5bKbgNHBcSH5qKa-SATVr0w&usqp=CAU" alt=""/>
            <h3>Sandwich</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
            </div>
            <a href="#" class="btn56">order now</a>
        </div>
    </div>

   
    <h1 style={{marginTop:120,marginBottom:100}} class="heading"> Desserts<span> Drinks</span> Food </h1>

    <div class="box-container">

        <div class="box" id="desserts">
            <span class="price"> $5 - $20 </span>
            <img src="https://www.carveyourcraving.com/wp-content/uploads/2021/11/saffron-cardamom-rose-eggless-cupcakes-1024x1024.jpg" alt=""/>
            <h3>tasty cupcakes</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
            </div>
            <a href="#" class="btn56">order now</a>
        </div>
        <div class="box">
            <span class="price"> $5 - $20 </span>
            <img src="https://thumbs.dreamstime.com/z/colorful-cold-drinks-plastic-cups-beach-ice-fresh-fruits-86654557.jpg" alt=""/>
            <h3>cold drinks</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
            </div>
            <a href="#" class="btn56">order now</a>
        </div>
        <div class="box">
            <span class="price"> $5 - $20 </span>
            <img src="https://img.etimg.com/thumb/msid-84939728,width-1200,height-900,imgsize-381352,resizemode-8,quality-100/magazines/panache/from-the-us-russia-to-india-an-ice-cream-bowl-has-a-long-political-history.jpg" alt=""/>
            <h3>cold ice-cream</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
            </div>
            <a href="#" class="btn56">order now</a>
        </div>

        <div class="box">
            <span class="price"> $5 - $20 </span>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOTB94Ws9GDkjIF7mRMxos0PMve20JPuPu4g&usqp=CAU" alt=""/>
            <h3>Cocktails</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
            </div>
            <a href="#" class="btn56">order now</a>
        </div>
        <div class="box">
            <span class="price"> $5 - $20 </span>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVU6X6BQ3PnXcCsPlvQ-wC54NgVcUvk-hs1A&usqp=CAU" alt=""/>
            <h3>Shakes</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
            </div>
            <a href="#" class="btn56">order now</a>
        </div>
        <div class="box">
            <span class="price"> $5 - $20 </span>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0xXUQDVzJPNlH2n5kAcxV4KGBZ6IJONKI1A&usqp=CAU" alt=""/>
            <h3>Choclate Drink</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
            </div>
            <a href="#" class="btn56">order now</a>
        </div>

    </div>


  
</section>

{/* <!-- popular section ends -->

<!-- steps section starts  --> */}



{/* <!-- steps section ends -->

<!-- gallery section starts  --> */}

{/* <section class="gallery" id="gallery">

    <h1 class="heading"> our food <span> gallery </span> </h1>

    <div class="box-container">

        <div class="box">
            <img src="https://media.istockphoto.com/photos/vada-pav-picture-id1329213718?k=20&m=1329213718&s=612x612&w=0&h=uuOkJXL7tCv1mH9GbQ2PV5WKKQmd9evSR7wcQRyAwzo=" alt=""/>
            <div class="content56">
                <h3>tasty food</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p>
                <a href="#" class="btn56">ordern now</a>
            </div>
        </div>
        <div class="box">
            <img src="https://media.istockphoto.com/photos/fast-food-and-drink-on-table-picture-id1031354828?k=20&m=1031354828&s=612x612&w=0&h=KjqFBJMqQ6ScdxaIPYwU9FNSMJMeTCBg5t0XmMJo8WA=" alt=""/>
            <div class="content56">
                <h3>tasty food</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p>
                <a href="#" class="btn56">ordern now</a>
            </div>
        </div>
        <div class="box">
            <img src="https://media.istockphoto.com/photos/veg-grilled-sandwich-picture-id1328011797?k=20&m=1328011797&s=612x612&w=0&h=WWXP9ZWUEz7xxy8jiIK5GiOXi_LaU61WpH2FHYY10to=" alt=""/>
            <div class="content56">
                <h3>tasty food</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p>
                <a href="#" class="btn56">ordern now</a>
            </div>
        </div>
        <div class="box">
            <img src="https://media.istockphoto.com/photos/close-up-of-fast-food-snacks-and-drink-on-table-picture-id1045891638?k=20&m=1045891638&s=612x612&w=0&h=ECVk3YUfAzpS3Od84BafX-09aPD11iNcse4LK73JFKM=" alt=""/>
            <div class="content56">
                <h3>tasty food</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p>
                <a href="#" class="btn56">ordern now</a>
            </div>
        </div>
        <div class="box">
            <img src="https://media.istockphoto.com/photos/deluxe-pizza-with-pepperoni-sausage-mushrooms-and-peppers-picture-id1198079266?k=20&m=1198079266&s=612x612&w=0&h=jMBXLu64hbuZh2YK9RNj3gIMjoIgSO4FEBC4HplbZAw=" alt=""/>
            <div class="content56">
                <h3>tasty food</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p>
                <a href="#" class="btn56">ordern now</a>
            </div>
        </div>
        <div class="box">
            <img src="https://media.istockphoto.com/photos/gujiya-an-indian-holi-special-snacks-picture-id1309104980?k=20&m=1309104980&s=612x612&w=0&h=IxyUzdqZ-0rVDxZcLKJyA6kwm1bbfxfkhZgkn-iN1ik=" alt=""/>
            <div class="content56">
                <h3>tasty food</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p>
                <a href="#" class="btn56">ordern now</a>
            </div>
        </div>
        <div class="box">
            <img src="https://media.istockphoto.com/photos/chole-kulche-picture-id1335023693?k=20&m=1335023693&s=612x612&w=0&h=ppBEmXuvBLGDJIc75SFSd7X4UVVuefQtC99XL6staCs=" alt=""/>
            <div class="content56">
                <h3>tasty food</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p>
                <a href="#" class="btn56">ordern now</a>
            </div>
        </div>
        <div class="box">
            <img src="https://media.istockphoto.com/photos/veg-grilled-sandwich-picture-id1328011725?k=20&m=1328011725&s=612x612&w=0&h=UwuhfTdF5zfwPZ0xTlkI6adoynOUlzq3sdDf0QJP-7o=" alt=""/>
            <div class="content56">
                <h3>tasty food</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p>
                <a href="#" class="btn56">ordern now</a>
            </div>
        </div>
        <div class="box">
            <img src="https://media.istockphoto.com/photos/spaghetti-bolognese-picture-id936610098?k=20&m=936610098&s=612x612&w=0&h=QzkMgGXjj3AQ9PG0spsn7INoKd5GxBu0-TH7tXVtZsk=" alt=""/>
            <div class="content56">
                <h3>tasty food</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p>
                <a href="#" class="btn56">ordern now</a>
            </div>
        </div>

    </div>

</section> */}

{/* <!-- gallery section ends -->

<!-- review section starts  --> */}

<section class="review" id="review">

    <h1 style={{marginTop:80,marginBottom:80}} class="heading"> our customers <span>reviews</span> </h1>

    <div class="box-container">

        <div class="box">
            <img src="https://media.istockphoto.com/photos/young-men-portrait-picture-id452418961?k=20&m=452418961&s=612x612&w=0&h=GhoLMuL1efJJj1awIrxGqQXHfZaWtaMwXKzklDxury0=" alt=""/>
            <h3>john deo</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti delectus, ducimus facere quod ratione vel laboriosam? Est, maxime rem. Itaque.</p>
        </div>
        <div class="box">
            <img src="https://media.istockphoto.com/photos/portrait-of-a-cheerful-young-man-picture-id640021202?k=20&m=640021202&s=612x612&w=0&h=JP8tXLJSimBqv1wLME42IPMOic7Se2DWU3Zx1INMppM=" alt=""/>
            <h3>john deo</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti delectus, ducimus facere quod ratione vel laboriosam? Est, maxime rem. Itaque.</p>
        </div>
        <div class="box">
            <img src="https://media.istockphoto.com/photos/closeup-image-of-indian-man-with-buzz-cut-hairstyle-to-disguise-picture-id1338289824?k=20&m=1338289824&s=612x612&w=0&h=jbqHXAzQfkHqVfble834tHN7dLhQcliP2g3BixQbhwc=" alt=""/>
            <h3>john deo</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti delectus, ducimus facere quod ratione vel laboriosam? Est, maxime rem. Itaque.</p>
        </div>

    </div>
    <h1 style={{marginTop:180}} class="heading"> How it <span>works!!</span> </h1>
</section>

<div style={{marginTop:140,marginBottom:180}} class="box-container">

   
    

    <section class="steps">

        <div class="box">
            <img src="https://media.istockphoto.com/vectors/hamburger-flat-design-usa-icon-with-side-shadow-vector-id925155356?k=20&m=925155356&s=612x612&w=0&h=uioDlh-idWadtlrn2768t7vv7uKz7oP7uOEEkxyY3ew=" alt=""  height="170" width="170"/>
            <h3>choose your favorite food</h3>
        </div>
        <div class="box">
            <img  src="https://img.freepik.com/premium-vector/hand-drawn-food-delivery-man_23-2147678391.jpg?w=740" alt="" height="170" width="170"/>
            <h3>free and fast delivery</h3>
        </div>
        <div class="box">
            <img src="https://thefinancialexpress.com.bd/uploads/1594787358.jpg" alt=""  height="170" width="170"/>
            <h3>easy payments methods</h3>
        </div>
        <div class="box">
            <img src="https://img.freepik.com/premium-vector/eat-healthy-sport-health-children-poster-design-series_7096-208.jpg?w=740" alt=""  height="170" width="170"/>
            <h3>and finally, enjoy your food</h3>
        </div>
    
    </section>

</div>

</div>
<Footer/>
    </>
  )
}

export default Restaurant;
