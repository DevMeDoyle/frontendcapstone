import Header from "../components/Header"
import Profile from "../assets/img/mybio.jpg";
import '../assets/css/Dashboard.css'
import { Link } from "react-router-dom";




const DashBoard = () => {




    return (

        <>

            <div>

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
                                    <a href=""><span className="las la-user-circle"></span><span>All Users</span></a>
                                </li>
                                <li>
                                    <a href=""><span className="las la-tv"></span><span>All Movies</span></a>
                                </li>
                                <li>
                                    <a href=""><span className="las la-tv"></span><span>Add Movies</span></a>
                                </li>
                                <li>
                                    <a href=""><span className="las la-clipboard-list"></span><span>Add Users</span></a>
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


                        </main>





                    </div>


            </div>

        </>
    )
}

export default DashBoard
