import React from 'react'

import Profile from "../assets/img/mybio.jpg";
import {FaCaretDown} from 'react-icons/fa';
import {FaMoon} from 'react-icons/fa';
import {FaSun} from 'react-icons/fa';
import {FaHouseUser} from 'react-icons/fa'
import {FaSearchengin} from 'react-icons/fa';
import {FaUsers} from 'react-icons/fa';
import {FaBookmark} from 'react-icons/fa';
import {FaTv} from 'react-icons/fa';
import {FaHourglassStart} from 'react-icons/fa';
import {FaCartArrowDown} from 'react-icons/fa';
import {FaChevronRight} from 'react-icons/fa';
import Ft1 from "../assets/img/f-t-1.png";
import Ft2 from "../assets/img/f-t-2.png";
import Img1 from "../assets/img/1.jpeg";

const Movielistwrapper = () => {
    return (
        <div>

<div className="movie-list-container" >
                       

                           <div className="movie-list-wrapper">

                               <div className="movie-list">
                                 
                               <div className="movie-list-item">
                                        <img className="movie-list-item-img" src={Img1} alt=""/>
                                          <span className="movie-list-item-title"> Her</span>
                                        <p className="movie-list-item-desk">lorem Please read the full license text (OFL.txt) to understand the permissions,
                                            restrictions and requirements for usage,</p>
                                            <button className="movie-list-item-button">WATCH</button>  
                                   </div>

                                   <div className="movie-list-item">
                                        <img className="movie-list-item-img" src={Img1} alt=""/>
                                          <span className="movie-list-item-title"> Her</span>
                                        <p className="movie-list-item-desk">lorem Please read the full license text (OFL.txt) to understand the permissions,
                                            restrictions and requirements for usage,</p>
                                            <button className="movie-list-item-button">WATCH</button>  
                                   </div>

                                   <div className="movie-list-item">
                                        <img className="movie-list-item-img" src={Img1} alt=""/>
                                          <span className="movie-list-item-title"> Her</span>
                                        <p className="movie-list-item-desk">lorem Please read the full license text (OFL.txt) to understand the permissions,
                                            restrictions and requirements for usage,</p>
                                            <button className="movie-list-item-button">WATCH</button> 
                                   </div>

                                   <div className="movie-list-item">
                                        <img className="movie-list-item-img" src={Img1} alt=""/>
                                          <span className="movie-list-item-title"> Her</span>
                                        <p className="movie-list-item-desk">lorem Please read the full license text (OFL.txt) to understand the permissions,
                                            restrictions and requirements for usage,</p>
                                            <button className="movie-list-item-button">WATCH</button>  
                                   </div>

                                   <div className="movie-list-item">
                                        <img className="movie-list-item-img" src={Img1} alt=""/>
                                          <span className="movie-list-item-title"> Her</span>
                                        <p className="movie-list-item-desk">lorem Please read the full license text (OFL.txt) to understand the permissions,
                                            restrictions and requirements for usage,</p>
                                            <button className="movie-list-item-button">WATCH</button> 
                                   </div>

                                   <div className="movie-list-item">
                                        <img className="movie-list-item-img" src={Img1} alt=""/>
                                          <span className="movie-list-item-title"> Her</span>
                                        <p className="movie-list-item-desk">lorem Please read the full license text (OFL.txt) to understand the permissions,
                                            restrictions and requirements for usage,</p>
                                            <button className="movie-list-item-button">WATCH</button> 
                                   </div>

                               </div>

                               <FaChevronRight onClick={()=>{
                                   console.log("test")
                                    
                               }} className="arrow" />
                           </div>

                       </div>
            
        </div>
    )
}

export default Movielistwrapper
