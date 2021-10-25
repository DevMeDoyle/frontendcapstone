import React from 'react'
import {useState,useEffect} from "react";
import Img1 from "../assets/img/4.jpg";
import Header from '../components/Header';
import FT2 from '../assets/img/f-t-2.png';
import Footer from '../components/Footer'



const Listofallmovies = () => {


    const[movies, setMovies] = useState([]) 


  useEffect(()=>{

    fetch("http://localhost:5000/movies")
    .then((res)=>res.json())
    .then(json=>{

     setMovies(json.data)

    })
},[]);

  console.log(movies)





    return (

        <>
        <Header/>

        <div>
            
            {<h1 className="head">List Of All Movies</h1>}
            
        <div className="movie-list-c" >
                    
                    <div className="movie-list-wrapper">
                 
                           <div className="movie-list">
                             
                                {movies.map((movieData)=> (
                               <div className="movie-list-item">
                               <img className="movie-list-item-img2" src={Img1} alt=""/>
                                 <span className="movie-list-item-title"> {movieData.title}</span>
                               <p className="movie-list-item-desk">{movieData.description}</p>
                                   <button className="movie-list-item-button">WATCH</button>  
                             </div>
                 
                             
                 
                           ))}
                        
                 
                                        </div>
                 
                                           
                 
                                            </div>
                 
                                  </div>

                                <div className="contain"> 
                                      <div className="content-container">
                                          <div className="featured-content2">
                                              <img className="featured-title1" src={FT2} alt=""/>
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
              </div>

                       

                    </div>




        </div>

        <Footer/>
        </>
    )
}

export default Listofallmovies
