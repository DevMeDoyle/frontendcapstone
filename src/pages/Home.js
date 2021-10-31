import {useState,useEffect} from 'react'
import Main from '../components/Main';
import Movielistwrapper from '../components/Movielistwrapper';
import Header from '../components/Header';
import Movielistcontainer from '../components/Movielistcontainer';
import Footer from '../components/Footer';

export const  Home = () => {




    const[featuredMovies, setFeaturedMovies] = useState([
        {
            
        
                title : "",
                description : "",
                genre: "",
                ratings: "",
                releasedate: "",
                priceToRent : "",
                priceToBuy: "",
                image: "",
                type:"",
                poster: ""
                                 
            
        }
    ]) ;

    const[featuredTVShows, setFeaturedTVShows] = useState([ {
            
        
        title : "",
        description : "",
        genre: "",
        ratings: "",
        releasedate: "",
        priceToRent : "",
        priceToBuy: "",
        image: "",
        type:"",
        poster: ""
                         
    
}]) ;

    const[actionMovies, setActionMovies] = useState([ {
            
        
        title : "",
        description : "",
        genre: "",
        ratings: "",
        releasedate: "",
        priceToRent : "",
        priceToBuy: "",
        image: "",
        type:"",
        poster: ""
                         
    
}]) ;

const[tvShows, setTvShows] = useState([
  {
      
  
          title : "",
          description : "",
          genre: "",
          ratings: "",
          releasedate: "",
          priceToRent : "",
          priceToBuy: "",
          image: "",
          type:"",
          poster: ""
                           
      
  }
]) ;


    useEffect(()=>{
      
      
      fetch("http://localhost:5000/movies?featured=true")
      
      .then((res)=>res.json())
      .then(json=>{
  
        setFeaturedMovies(json.data)

        console.log("k")
        console.log(json.data)
  
      })


      fetch("http://localhost:5000/movies?featured=false")
      
      .then((res)=>res.json())
      .then(json=>{
  
        setFeaturedTVShows(json.data)

        console.log("z")
        console.log(json.data)
  
      })

       fetch("http://localhost:5000/movies?genre=Action")
      
      .then((res)=>res.json())
      .then(json=>{
  
        setActionMovies(json.data)

        console.log("k")
        console.log(json.data)
  
      })

      fetch("http://localhost:5000/movies?type=tv-shows&featured=true")
      
      .then((res)=>res.json())
      .then(json=>{
  
        setTvShows(json.data)

        console.log("k")
        console.log(json.data)
  
      })




  },[]);

  

    return (
        <div>
            

            <Header/>

                  <Main/>
          
                      <Movielistcontainer title="Featured"/>

                      <Movielistwrapper   movies={featuredMovies}/>

                      <Movielistcontainer  title="Featured Movies"/>

                      <Movielistwrapper   movies={featuredTVShows}/>

                      <Movielistcontainer title="TV-Shows"/>
                      <Movielistwrapper   movies={tvShows}/>

                      


            
           <Footer/>

        </div>
    )
}

export default Home