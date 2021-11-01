
import '../assets/css/Login.css'
import '../assets/css/App.css';
import '../assets/css/Forms.css';
import '../assets/css/Footer.css';
import '../assets/css/ListofMovies.css';
import Main from "../components/Main";
import Movielistcontainer from './Movielistcontainer';
import Movielistwrapper from './Movielistwrapper';
import MoviesbyHorror from './MoviesbyHorror';
import AddMovieForm  from '../pages/AddMovieForm';
import Home from '../pages/Home'
import Header  from './Header';
import Loginpage from '../pages/Loginpage';
import Footer from './Footer'
import Listofallmovies from '../pages/Listofallmovies';
import Dashboard from '../pages/Dashboard';
import AddUserForm from '../pages/AddUserForm';
import AllUsers from '../pages/AllUsers';
import Listofalltvshows from '../pages/Listofalltvshows';

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
  const[users, setUsers] = useState([]) 

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


 
          <Router> 
            <Switch>

              <Route exact path="/">
                <Home/>
             </Route>

             <Route exact path="/Addform">
                <AddMovieForm onAddMovie={addMovie}/>
                </Route>

                <Route exact path="/AddUserForm">
                <AddUserForm/>
                </Route>

                <Route exact path="/Dashboard">
                <Dashboard/>

             </Route>

             <Route exact path="/Login">
                <Loginpage/>
                
             </Route>

             <Route exact path="/Movies">
                <Listofallmovies/>

                    
             </Route>

             <Route exact path="/TVSHOWS">
                <Listofalltvshows/>

                    
             </Route>

                <Route exact path="/Sign-Up">
                <AddUserForm/>
                
             </Route>

             <Route exact path="/ALLUsers">
                <AllUsers/>
                
             </Route>

          </Switch>
      </Router>    
    </div>
    
  )
}

export default App
