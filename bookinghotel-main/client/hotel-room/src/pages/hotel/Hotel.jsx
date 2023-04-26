import React from "react";
import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
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

import Reserve from "../../components/reserve/Reserve";

const Hotel = ({item}) => {
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
      <Navbar />
      <Header type="room" />
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
          <button className="bookNow">Reserve or Book Now !!</button>
          <h1 className="hotelTitle">{data.name}</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>FGHK HJKKL</span>
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
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Marvellous Rooms</h1>
              <p className="hotelDesc">
                <p>1.All our guestrooms are elegantly furnished with handmade
                furniture include luxury en-suite facilities with complimentary
                amenities pack, flat screen LCD TV, tea/coffee making
                facilities, fan, hairdryer and the finest pure white linen and
                towels.
                </p>
                <p>
                2. It has accommodations with air conditioning and free
                WiFi. The units come with hardwood floors and feature a fully
                equipped kitchenette with a microwave, a flat-screen TV, and a
                private bathroom with shower and a hairdryer.
                </p>
                <p>
                3. A fridge is also offered, as well as an electric tea pot and a coffee machine.
                Popular points of interest near the apartment include Cloth
                Hall, Main Market Square and Town Hall Tower.
                </p>
                <p>
                4. The nearest airport is John Paul II International Kraków–Balice, 16.1 km
                from Tower Street Apartments, and the property offers a paid
                airport shuttle service.
                </p>
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for stay!</h1>
              <span>
                If you want to enjoy your day with comfort then you can choose
                Marvellous Rooms
              </span>
              <h2>
                <b>$1000</b>
              </h2>
              <button onClick={handleClick}>Reserve or Book Now !!</button>
            </div>
          </div>
        </div>
        <MailList/>
        <Footer />
      </div>
      <Reserve setOpen={setOpenModal} hotelId={id}/>
    </div>
  );
};

export default Hotel;
