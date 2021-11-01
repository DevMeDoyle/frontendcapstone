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
import { Link } from "react-router-dom";





export const Header = () => {

    const ball = document.querySelector(".toggle-ball");
    const items = document.querySelectorAll(".container,.movie-list-item-title,.navbar-container,.sidebar.left-menu-icon,.toggle")
    // ball.addEventListener("click",()=>{
    //     items.forEach(item=>{
    //         item.classList.toggle("active")
    //     })
    // })

    return (

        <div>
            
            <div className="topbar">
                
                <div className="navbar-container">

                    <div className="logo-container"><h1 className="logo">Jdmoves</h1></div>
                        <div className="menu-container">
                            <ul className="menu-list">
                            <li className="menu-list-item active"><a  href="/"> Home </a></li>
                            <li className="menu-list-item">        <a href="/Movies" >Movies</a> </li>
                            <li className="menu-list-item"> <a href="/TVSHOWS" >TV Shows</a> </li>
                            <li className="menu-list-item"><a href="/Sign-Up" >Sign Up</a> </li>
                                                    
                        </ul>
                    </div>
                <div className="profile-container">

                        <a href="/Dashboard"> <img className="profile-picture" src={Profile} alt=""/> </a>
                    
                      <Link to="/Login">  <div className="profile-text-container">
                        <span > login </span>
                       
                        <FaCaretDown/>
                            </div> </Link>

                    <div className="toggle"> 
                    
                        <FaMoon className="toggle-icon" />
                        <FaSun className="toggle-icon"/>
                        <div className="toggle-ball" onClick={()=>{items.forEach(item=>{item.classList.toggle(".active")})


                        }}></div>
                    
                    </div>
                    
                    
                </div>

                   
                    </div>

                    < div className="search-box">
                    <input className="search-txt" type="text" name="" placeholder="Type To Search"/>
                        <a className="search-btn" href="#">
               
                         <FaSearchengin className=" sicon"/>
                </a>

                </div>
            </div>


           
   {/* <FaSearchengin  className="left-menu-icon" /> */} 

   



            <div className="sidebar">

           


               <br/><br/>
                <FaHouseUser className="left-menu-icon"/>
                <FaBookmark className="left-menu-icon"/>
                <FaUsers className="left-menu-icon"/>
                <FaTv className="left-menu-icon"/>
                <FaHourglassStart className="left-menu-icon"/>
                <FaCartArrowDown className="left-menu-icon"/>
              
            
            </div>  

            
        </div>

       

       
    )
}

export default Header