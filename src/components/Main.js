
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
import Ft1 from "../assets/img/f-t-1.png";
import Img1 from "../assets/img/1.jpeg";

import React from 'react'

const Main = () => {
    return (
        <>
            <div>

                <div className="topbar">
                
                    <div className="navbar-container">

                        <div className="logo-container"><h1 className="logo">flakes</h1></div>
                        <div className="menu-container">
                            <ul className="menu-list">
                                <li className="menu-list-item active">Home</li>
                                <li className="menu-list-item">Movies</li>
                                <li className="menu-list-item">Series</li>
                                <li className="menu-list-item">Popular</li>
                                <li className="menu-list-item">Trends</li>
                                
                            </ul>
                        </div>
                        <div className="profile-container">

                        <img className="profile-picture" src={Profile} alt=""/>
                        <div className="profile-text-container">
                            <span className="profile-text">Profile</span>
                            <FaCaretDown/>
                        </div>

                        <div className="toggle"> 
                        
                        <FaMoon className="toggle-icon" />
                        <FaSun className="toggle-icon"/>
                        <div className="toggle-ball"></div>
                        
                        </div>
                        
                        
                        </div>

                        </div>
                    </div>

                <div className="sidebar">
                    <FaSearchengin  className="left-menu-icon" />
                    <FaHouseUser className="left-menu-icon"/>
                    <FaBookmark className="left-menu-icon"/>
                    <FaUsers className="left-menu-icon"/>
                    <FaTv className="left-menu-icon"/>
                    <FaHourglassStart className="left-menu-icon"/>
                    <FaCartArrowDown className="left-menu-icon"/>
                
                </div>  

                
                
                

            </div>
            <div className="contain"> 
                    <div className="content-container"></div>
                        <div className="featured-content">
                        <img className="featured-title" src={Ft1} alt=""/>
                        <p className="featured-desk"> lorem Please read the full license text (OFL.txt) to understand the permissions,
                                            restrictions and requirements for usage, redistribution, and modificati You can use them freely in your products & projects - print or digital,
                                            commercial or otherwise.</p>
                                            <button className="featured-button">WATCH</button>


                                            <h1 className="movie-list-title">NEW RELEASES</h1>
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
                           </div>



                       </div>

                        </div>

                      

                </div>
            
               
              </>  
        
    )
}

export default Main
