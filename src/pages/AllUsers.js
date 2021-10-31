import React from 'react'
import {useState,useEffect} from "react";
import "../assets/css/Users.css";
import Header from "../components/Header"
import Profile from "../assets/img/mybio.jpg";
// import '../assets/css/Dashboard.css';
import '../assets/css/Userlist.css';
import { Link } from "react-router-dom"

const AllUsers = () => {

    
    const[users, setUsers] = useState([]) 


  useEffect(()=>{

    fetch("http://localhost:5000/user")
    .then((res)=>res.json())
    .then(json=>{

     setUsers(json.data)

    })
},[]);

  console.log(users)



    return (


        <div className="">
            

            <div className="side_bar">

        <div className="sidebar-brand">

            <Link to="/">   <h1><span className="logo"></span>  JDmovies      </h1> </Link>


</div>

<div className="side_bar_menu">
    <ul>
        <li>
            <a href="" className="active"><span className="las la-igloo"></span>
            <span>Dashboard</span></a>
        </li>
        <li>
        <Link to="AllUsers">   <span className="las la-user-circle"></span><span>All Users</span></Link>
        </li>
        <li>
            <Link to="/"> <span className="las la-tv"></span><span>All Movies</span> </Link>
        </li>
        <li>
           <Link to="Addform"> <span className="las la-tv"></span><span>Add Movies</span></Link>
        </li>
        <li>
        <Link to="AddUserForm">   <span className="las la-clipboard-list"></span><span>Add Users</span></Link>
        </li>

    </ul>


</div>

</div>

<div class="main-content">

<header className="header">
    
    <div className="header-title">

        <h1>

            <label for="">

                <span className="las la-bar"></span>
            </label> Dashboard 
            </h1>

            
            <div className="search_input">
                <span className="las la-search"></span>
                <input type="search" placeholder="Search Here"/>

                </div>
                

                <div className="user-wrapper">
                    <img src={Profile} width="40px" height="40px" alt=""/>
                    <div>
                        <h4>Jimmel Doyle</h4>
                        <small>Administrator</small>
                    </div>

                    </div>

    </div>




</header>

<main>

    <div className="cards">
        <div className="card-single">
            <div> 
                <h1>1</h1>
                <span>Total Number Of Users</span>
            </div>
            <div>

                <span class="las la-users"></span>
            </div>
            </div>

            <div className="card-single">
            <div> 
                <h1>4</h1>
                <span>Total Number Of Movies</span>
            </div>
            <div>

                <span class="las la-tv"></span>
            </div>
            </div>

            <div className="card-single">
            <div> 
                <h1>0</h1>
                <span> Created Users</span>
            </div>
            <div>

                <span class="las la-users"></span>
            </div>
            </div>

            <div className="card-single">
            <div> 
                <h1>0</h1>
                <span>Added Movies</span>
            </div>
            <div>

                <span class="las la-tv"></span>
            </div>
            </div>
    </div>

    {users.map((userData)=> (
                               <div className="user-list-item">
                              
                                
                              
                               <div className="user_info">
                            <div>   <p className="movie-list-item-desks">First Name: {userData.firstName}</p>  </div>
                            <div>   <p className="movie-list-item-desks">Last Name:{userData.lastName}</p></div>
                            <div>   <p className="movie-list-item-desks">Email:{userData.email}</p></div>
                            <div>   <p className="movie-list-item-desks">ID:{userData.id}</p></div>
                            <div>   <p className="movie-list-item-desks">Registered Date:{userData.dateCreated}</p></div>
                               </div>
                               
                             </div>
                 
                             
                 
                           ))}

</main>




</div>



                     
            


                           
                   
        </div>
    )
}

export default AllUsers
