import React from 'react'
import "./mailList.css";

const MailList = () => {
  return (
    <div className="mail">
        <h1 className="mailTitle">Enter Your Mail</h1>
        <span className="mailDesc">Sign up Here</span>
        <div className="mailInputContainer">
        <input type="text" placeholder="Your Email" />
        
      </div>
    </div>
  )
}

export default MailList