import React from 'react'
import "./room.css"
// import Navbar from "../../components/navbar/Navbar";
// import Header from "../../components/header/Header";
import Searchitem from "../../components/searchitem/Searchitem";
// import useFetch from "../../hooks/useFetch";



const Room = () => {

  

  // const { data, loading, error, reFetch } = useFetch(
  //   `/hotels?city=room`
  // );

  return (
    <div>
      {/* <Navbar /> */}
      {/* <Header type="room" /> */}
      <div className="roomResult">
      
                  <Searchitem/>
            
          </div>
      </div>
  )
}

export default Room