import React from 'react'
import {useState,useEffect} from "react";
import Header from '../components/Header';

const Listofalltvshows = () => {


    const[tvshows, setTvShows] = useState([]) 


  useEffect(()=>{

    fetch("http://localhost:5000/movies?type=tv-shows&featured=true")
    .then((res)=>res.json())
    .then(json=>{

     setTvShows(json.data)

    })
},[]);




    return (
            
        <>
        <Header/>
        
        <div>


        {<h1 className="head">List Of All Movies</h1>}
            
            <div className="movie-list-c" >
            
            <div className="movie-list-wrapper">
         
                   <div className="movie-lists">
                     
                        {tvshows.map((movieData)=> (
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


            </>
            
       

        
    )
}

export default Listofalltvshows
