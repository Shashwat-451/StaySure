import './App.css';
import HomeUpper from './HomeUpper';
// import Hotel from '../../bookinghotel-main/client/hotel-room/src/pages/hotel/Hotel';
// import Room from '../../bookinghotel-main/client/hotel-room/src/pages/room/Room';
// import HomeLower from './HomeLower';
import Restaurant from './project/Restaurant';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
// import Hotel from './client/hotel-room/src/pages/hotel/Hotel';
import RegisterHome from './RegisterHome'
import Home2Upper from './Home2Upper';
// import Mumbai from './Mumbai';
import Chennai from './Chennai';
import Kolkata from './Kolkata';
import Goa from './Goa';
import Delhi from './Delhi';
import Explore from './Explore';
import Services from './Services';
import Blogs from './Blogs';
import Contact from './Contact';
import Contact2 from './Contact2';
import Rooms from './Rooms';
//import Home2Upper from './Home2Upper';
import Room from './roomsfrontend/pages/room/Room.jsx';
import React,{useState} from 'react'
import Homepage from './Components/homepage/Homepage';
import Login from './Components/login/Login';
import Register from './Components/register/Register';
import Hotel from './roomsfrontend/pages/hotel/Hotel';
import Mumbai from './Mumbai';
import Loginrooms from './roomsfrontend/pages/loginrooms/Loginrooms';
import Payment from './Payment';

// import { PaytmButton } from './paytm-button/Paytmbutton';
function App() {

  const [user,setLoginUser]=useState({})
  return (
  <BrowserRouter>
    <>
    <Routes>

        {/* */}
        <Route path="/" element={<RegisterHome/>}/>
        <Route path="/homee" element={<HomeUpper/>}/> 
        <Route path="/rooms" element={<Rooms/>}/>
        <Route path="/mumbai" element={<Home2Upper/>}/>
        <Route path="/mumbai" element={<Home2Upper/>}/>
        <Route path="/delhi" element={<Delhi/>}/>
        <Route path="/kolkata" element={<Kolkata/>}/>
        <Route path="/chennai" element={<Chennai/>}/>
        <Route path="/Goa" element={<Goa/>}/>
        <Route path="/explore" element={<Explore/>}/>
        <Route path="/services" element={<Restaurant/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/homepage" element={<Homepage/>}/>
        <Route path="/login" element={<Login setLoginUser={setLoginUser}/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/register2" element={<RegisterHome/>}/>
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/contact2" element={<Contact2/>}/>
        {/* 
       <Route path="/hotels/:id" element={<Hotel/>}/>
      <Route path="/login" element={<Login/>}/> */}
        {/* <Route path="/registermodal" element={<Register/>}/> */}
        <Route path="/hotels" element={<Room/>}/>
<Route path="/hotels/:id" element={<Hotel/>}/>
<Route path="/loginrooms" element={<Loginrooms/>}/>
<Route path="/bombay" element={<Mumbai/>}/>
      </Routes>
    </>

    </BrowserRouter>
  );
}

export default App;
