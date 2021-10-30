import React from 'react'

import {useState,useEffect} from "react";
import Profile from "../assets/img/mybio.jpg";
// import "bootstrap/dist/css/bootstrap.css"
// import "slick-carousel-slick/slick-theme.css"



// import React, { Component } from "react";
// import Slider from "react-slick";




import {FaArrowAltCircleDown, FaCaretDown} from 'react-icons/fa';
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



const Movielistwrapper = (props) => {
  

    // const settings={

    //   dots: true,
    //   infinite: true,
    //   speed: 500,
    //   slidesToShow: 4,
    //   slidesToScroll: 1

    // }


  


    return (
        <div>

        <div className="movie-list-container" >
                       


      <div className="movie-list-wrapper">

          <div className="movie-list">
         
          {props.movies.map((movieData)=> (
              <div className="movie-list-item">
                <img className="movie-list-item-img" src={movieData.image} alt=""/> 
                <span className="movie-list-item-title"> {movieData.title}</span>
                   <p className="movie-list-item-desk">{movieData.description}</p>
                      <button className="movie-list-item-button">WATCH</button>  
            </div>
  
          ))}  <FaChevronRight className="arrow" onClick={()=>{  }} /> 
                      
                      

                           </div>
                  </div>
             </div>

        
            
        </div>
    )
}

export default Movielistwrapper
