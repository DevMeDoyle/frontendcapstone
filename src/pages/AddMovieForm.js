import React from 'react'
import {useState,useEffect} from "react";
import Header from '../components/Header';
import {FaX} from 'react-icons/fa';
import {FaStar} from 'react-icons/fa';
import {FaTrash} from 'react-icons/fa';
import {FaFilePen} from 'react-icons/fa';
import {FaPen} from 'react-icons/fa'



const AddMovieForm = (props) => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [genre, setGenre] = useState("");
    const [ratings, setRatings] = useState("");
    const [release, setRelease] = useState("");
    const [pricetorent, setPricetorent] = useState("");
    const [pricetobuy, setPricetobuy] = useState("");
    const [images, setImage] = useState("");
    const [posters, setPosters] = useState("");
    const [type, setType] = useState("");

    const [errorTitle, setErrorTitle] = useState("");
    const [errorDescription, setErrorDescription] = useState("");
    const [errorGenre, setErrorGenre] = useState("");
    const [errorRatings, setErrorRatings] = useState("");
    const [errorRelease, setErrorRelease] = useState("");
    const [errorPricetorent, setErrorPricetorent] = useState("");
    const [errorPricetobuy, setErrorPricetobuy] = useState("");
    const [errorImages, setErrorImage] = useState("");
    const [errorPosters, setErrorPosters] = useState("");
    const [errorType, setErrorType] = useState("");


    const validateForm = ()=>{

        let isValidated = false;

        if(title === "")

        {
            setErrorTitle("Tou must enter a title");
            isValidated = false;
        }

        else{
            setErrorTitle("")
        }

        if(description === "")

        {
            setErrorDescription("Tou must enter a description");
            isValidated = false;
        }

        else{
            setErrorTitle("")
        }

        if(genre === "")

        {
            setErrorGenre("You must enter a genre");
            isValidated = false;
        }

        else{
            setErrorGenre("")
        }

        if(ratings === "")

        {
            setErrorRatings(" You must enter a ratings");
            isValidated = false;
        }

        else{
            setErrorRatings("")
        }

        if(release === "")

        {
            setErrorRelease("You must enter a release date");
            isValidated = false;
        }

        else{
            setErrorRelease("")
        }

        if(pricetorent === "")

        {
            setErrorPricetorent("You must enter a price to rent");
            isValidated = false;
        }

        else{
            setErrorPricetorent("")
        }

        if(pricetobuy === "")

        {
            setErrorPricetobuy("Tou must enter a price to buy");
            isValidated = false;
        }

        else{
            setErrorPricetobuy("")
        }

        if(images === "")

        {
            setErrorImage("Tou must enter a image");
            isValidated = false;
        }

        else{
            setErrorImage("")
        }

        return isValidated;
        
    }
    



    return (

        
        <>

                <Header/>

                {/* <Header/> */}

            <h1 className="H1LOGO">ADMINISTRATOR ADD MOVIE PAGE</h1>

        <div className="form" >

            
            
            <form className="a">

                <div className="form-control-container " >

                                                                  {/* Title */}
                                         <div class="field">
                                        <label class="label">Title   <FaPen onClick={(event)=>{alert(`${title} was click`)}} className="icons"  /> <FaTrash/> </label> 
                                        <div class="control">
                                            <input className="input" type="text" placeholder="Title" value={title} onChange={(event)=>{ setTitle(event.target.value); }} />
                                            <span className="error"> {errorTitle}</span> 
                                        </div>
                                        </div>
                                                                                 {/* Description*/}
                                        <div className="field">

                                        <div class="field">
                                        <label className="label">Description <FaPen/> <FaTrash/></label>
                                        <div class="control">
                                            <textarea className="textarea" placeholder="Textarea"   value={description} onChange={(event)=>{setDescription(event.target.value); }}  />
                                            <span className="error"> {errorDescription}</span> 
                                        </div>
                                        </div>


                                                    {/* Type */}
                                        <div className="dropfields">
                                            
                                            
                                        <div class="field">
                                        <label class="label">Type</label>
                                        <div class="control">
                                            <div class="select">
                                            <select value={type} onChange={(event)=>{setType(event.target.value); }} >
                                            <span className="error"> {errorType}</span> 
                                                <option></option>
                                                <option>Movie</option>
                                                <option>TV SHOW</option>
                                            </select>
                                            </div>
                                        </div>
                                        </div>

                                                     {/* Genre */}
                                            
                                        <div class="field">
                                    <label class="label">Genre </label>
                                        <div class="control">
                                            <div class="select">
                                                <select value={genre} onChange={(event)=>{setGenre(event.target.value);}} >
                                                <span className="error"> {errorGenre}</span> 
                                                    <option></option>
                                                    <option>COMEDY</option>
                                                    <option>HORROR</option>
                                                    <option>ACTION</option>
                                                    <option>ADVENTURE</option>
                                                    <option>WAR</option>
                                                    <option>WESTERN</option>
                                                </select>
                                            </div>
                                        </div>
                                 </div>

                                                     {/* Ratings */}
                                        <div className="field">
                                        <label className="label">Ratings </label>
                                        <div className="control">
                                            <div className="select">
                                            <select value={ratings} onChange={(event)=>{setRatings(event.target.value);}} >
                                            <span className="error"> {errorRatings}</span> 
                                                <option></option>
                                                <option>5 STAR</option>
                                                <option>4 STAR</option>
                                                <option>3 STAR</option>
                                                <option>2 STAR</option>
                                                <option>1 STAR</option>
                                              
                                            </select>
                                            </div>
                                        </div>
                                    </div>
                                            
                                            
                                            
                                            
                                     </div>

                                    <div>


                                    <div className="dropfields">

                                    <div class="field">
                                        <label class="label">Date Release</label>
                                        <div class="control">
                                            <input class="input" type="text" placeholder="Text input"  value={release} onChange={(event)=>{setRelease(event.target.value);}} />
                                            <span className="error"> {errorRelease}</span> 
                                        </div>
                                        </div>

                                        <div class="field">
                                        <label class="label">Price To Buy</label>
                                        <div class="control">
                                            <input class="input" type="text" placeholder="Text input" value={pricetobuy} onChange={(event)=>{setPricetobuy(event.target.value);}}/>
                                            <span className="error"> {errorPricetobuy}</span> 
                                        </div>
                                        </div>

                                        <div class="field">
                                        <label class="label">Price To Rent</label>
                                        <div class="control">
                                            <input class="input" type="text" placeholder="Text input" value={pricetorent} onChange={(event)=>{setPricetorent(event.target.value);}} />
                                            <span className="error"> {errorPricetorent}</span> 
                                        </div>
                                        </div>
                                    </div>

                                     
                                <div class="file is-normal has-name">
                                    <label class="file-label">
                                        <input class="file-input" type="file" name="poster" value={posters} onChange={(event)=>{setPosters(event.target.value);}} />
                                        <span className="error"> {errorPosters}</span> 

                                        <span class="file-cta">
                                        <span class="file-icon">
                                            <i class="fas fa-upload"></i>
                                        </span>
                                        <span class="file-label">
                                            Poster Image
                                        </span>
                                        </span>
                                        <span class="file-name">
                                        Screen Shot 2017-07-29 at 15.54.25.png
                                        </span>
                                    </label>
                                    </div>

                                    <div class="file is-normal has-name">
                                    <label class="file-label">
                                        <input class="file-input" type="file" name="movieimg" value={images} onChange={(event)=>{setImage(event.target.value);}} />
                                        <span className="error"> {errorImages}</span> 

                                        <span class="file-cta">
                                        <span class="file-icon">
                                            <i class="fas fa-upload"></i>
                                        </span>
                                        <span class="file-label">
                                            Movie Images file…
                                        </span>
                                        </span>
                                        <span class="file-name">
                                        Screen Shot 2017-07-29 at 15.54.25.png
                                        </span>
                                    </label>
                                    </div>


                                    
                                      

                                    <div class="field is-grouped Bth_on">
                                    <div class="control">
                                        <button class="button is-link">Submit</button>
                                    </div>
                                    <div class="control">
                                        <button class="button is-link is-light">Cancel</button>
                                    </div>
                                    </div>          
                        

                      {/* <button class="button is-rounded fields" onClick={()=>{

                          if(validateForm())
                          {
                              const newMovie={
                                        id: Math.floor(Math.random() *500000) + 1,
                                        title,
                                        description,
                                        genre,
                                        ratings,
                                        pricetobuy,
                                        pricetorent,
                                        images


                              }

                              props.onAddMovie(newMovie)
                          }
                        

                      }}>Add</button>
                      <button class="button is-rounded fields">Submit</button> */}

                
                </div>

                
             </div>           
                

</div>
                


            </form>
            
        </div>
        </>
    )
}

export default AddMovieForm