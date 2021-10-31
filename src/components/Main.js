
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
import Img6 from "../assets/img/6.jpg";
import Img10 from "../assets/img/10.jpg";
import Img19 from "../assets/img/19.jpg";

import React from 'react'

const Main = () => {
    return (
        <>
            <div>

        
            <div className="contain"> 
                    <div className="content-container">
                        <div className="featured-content">

                           <div className="slider-frame">  
                                <div className="slide-images">

                                    <div className="img-container">
                                        <img className="featured-title" src={Ft1} alt=""/>
                                        <p className="featured-desk"> 
                                    
                                        With the help of a German bounty-hunter, a freed slave sets out to rescue his wife from a brutal plantation-owner in Mississippi.
                                                
                                        </p>

                                        <button  className="featured-button" onClick="https://www.npmjs.com/package/uuid">Trailer</button>
                                 </div>

                                        <div className="img-container">
                                                 <img className="featured-title" src={Img6} alt=""/>
                                                         <p className="featured-desk"> 
                                                
                                                         When three different animals become infected with a dangerous pathogen, a primatologist 
                                                         and a geneticist team up to stop them from destroying Chicago.
                                                        </p>

                                                            <button className="featured-button">WATCH</button>
                                        </div>

                                                <div className="img-container">
                                                    <img className="featured-title" src={Img10} alt=""/>
                                                         <p className="featured-desk"> 
                                        
                                                                lorem Please read the full license text (OFL.txt) to 
                                                                understand the permissions,
                                                            restrictions and requirements for usage, redistribution,
                                                            and modificati You can use them freely in your products &
                                                                projects - print or digital,
                                                            commercial or otherwise.
                                                        
                                                        </p>

                                                    <button className="featured-button">WATCH</button>


                                                </div>

                                                {/* <div className="img-container">
                                                    <img className="featured-title" src={Ft1} alt=""/>
                                                        <p className="featured-desk"> 
                                    
                                                            lorem Please read the full license text (OFL.txt) to 
                                                            understand the permissions,
                                                        restrictions and requirements for usage, redistribution,
                                                        and modificati You can use them freely in your products &
                                                            projects - print or digital,
                                                        commercial or otherwise.
                                                        
                                                    </p>

                                                        <button className="featured-button">WATCH</button>


                                                </div> */}


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
