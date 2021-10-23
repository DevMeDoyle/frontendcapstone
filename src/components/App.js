
import '../assets/css/Login.css'
import '../assets/css/App.css';
import '../assets/css/Forms.css';
import '../assets/css/Footer.css';
import Main from "../components/Main";
import Movielistcontainer from './Movielistcontainer';
import Movielistwrapper from './Movielistwrapper';
import MoviesbyHorror from './MoviesbyHorror';
import AddMovieForm  from '../pages/AddMovieForm';
import Home from '../pages/Home'
import Header  from './Header';
import Loginpage from './Loginpage';
import Footer from './Footer'

import {useState,useEffect} from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  
} from "react-router-dom";


import React from 'react'

const App = () => {

  
  const[movies, setMovies] = useState([]) ;


  useEffect(()=>{
    
    
    fetch("http://localhost:5000/movies")
    
    .then((res)=>res.json())
    .then(json=>{

     setMovies(json.data)

    })
},[]);

const addMovie =(newMovie)=>
{
    setMovies([...movies,newMovie]);
}


 

  
  return (
    <div>
           {/* <Loginpage/> */}
              <Home/>
              <Footer/>
{/* 
          <Router> 
            <Switch>

              <Route exact path="/">
                <Home/>
             </Route>

             <Route exact path="/Addform">
                <AddMovieForm onAddMovie={addMovie}/>
                
             </Route>

          </Switch>
      </Router>  */}
    </div>
    
  )
}

export default App
