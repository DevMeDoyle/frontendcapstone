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
                 
                           <div className="movie-lists">
                             
                                {movies.map((movieData)=> (
                               <div className="movie-list-item">
                               <img className="movie-list-item-img3" src={movieData.image} alt=""/><br/>
                                 <span className="movie-list-item-titlem"> {movieData.title}</span>
                               <p className="movie-list-item-desks">{movieData.description}</p><br/>
                               <div className="pricing">
                            <div>   <p className="movie-list-item-desks">Rent ${movieData.priceToBuy}.00</p>  <br/></div>&nbsp;&nbsp;&nbsp;
                            <div>   <p className="movie-list-item-desks">Buy ${movieData.priceToRent}.00</p><br/></div>
                               </div>
                                   <button className="movie-list-item-buttons">ADD TO CART</button>  
                             </div>
                 
                             
                 
                           ))}
                        
                 
                                        </div>
                 
                                           
                 
                                            </div>
                 
                                  </div>

                          



        </div>

        <Footer/>
        </>
    )
}

export default Listofallmovies
