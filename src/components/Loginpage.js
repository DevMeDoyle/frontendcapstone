import Header from "./Header"



const Loginpage = () => {
    return (

        <>

            
        <div className="loginform">

                <div id="myform">
                    <form>

                        <h1 className="L1">Login Form</h1>

                        <div className="input-container">

                            <input type="text" placeholder="EMAIL"/>

                        </div>

                        <div className="input-container">

                            <input type="password" placeholder="PASSWORD"/>

                        </div>     

                        <div className="login-btn">

                            <input type="submit" value="LOG IN"/>
                            
                            </div>  

                            <div className="footer">

                                <div> 

                                    <input type="checkbox"/> Remember Me
                                </div>
                                <a href="#">Forget Password ?</a>
                                
                                </div>           

                    </form>


                </div>

            
        </div>

        </>
    )
}

export default Loginpage
