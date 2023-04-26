
import React, {useState} from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faHotel} from '@fortawesome/free-solid-svg-icons';
import { faBed } from '@fortawesome/free-solid-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faBlog } from '@fortawesome/free-solid-svg-icons';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { DateRange } from 'react-date-range';
import {format} from "date-fns"






import "./header.css"


const Header = ({type}) => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  
  
  return (
    <div className="header">
      <div className={type === "room" ? "headerContainer listMode" : "headerContainer"}>
        <div className="headerList">
            <div className="headerListItem">
            <FontAwesomeIcon icon={faHotel} />
            <span>Home</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Room</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faCoffee} />
            <span>Services</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faBlog} />
            <span>Blogs</span>
            </div>
        </div>
        { type!=="room" &&
          <>
        <h1 className="headerTitle">Welcome To Hotel Wiz5ard</h1>
        <div className="headerSearch">
          {/* <div className="headerSearchItem">
          <FontAwesomeIcon icon={faBed}  className="headerIcon"/>
          <input type="text" placeholder="Place" className="headerSearchInput"/>
          </div> */}
          <div className="headerSearchItem">
          <FontAwesomeIcon icon={faCalendarDays}  className="headerIcon"/>
          <span onClick={()=>setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
          {openDate && <DateRange
  editableDateInputs={true}
  onChange={item => setDate([item.selection])}
  moveRangeOnFirstSelection={false}
  ranges={date}
  className="date"
/>}
          
          </div>
          <div className="headerSearchItem">
          <button className="headerBtn">Search</button>
          </div>
          
          
          
        </div></>}
    </div>
    </div>

  )
}

export default Header