import React from "react";
import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import PropertyList from "../../components/PropertyList/PropertyList";

import "./home.css"

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">PARADISE TYPE</h1>
        <PropertyList/>
        <h1 className="homeTitle">Lovely-Rooms</h1>
        <FeaturedProperties/>
        <MailList/>
        <Footer/>
    </div>
    </div>

  )
}

export default Home