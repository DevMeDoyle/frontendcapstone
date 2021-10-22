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

    const [errorTitle, setErrorTitle] = useState("");
    const [errorDescription, setErrorDescription] = useState("");
    const [errorGenre, setErrorGenre] = useState("");
    const [errorRatings, setErrorRatings] = useState("");
    const [errorRelease, setErrorRelease] = useState("");
    const [errorPricetorent, setErrorPricetorent] = useState("");
    const [errorPricetobuy, setErrorPricetobuy] = useState("");
    const [errorImages, setErrorImage] = useState("");


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

                

        <div className="form" >

            
            
            <form className="a">

                <div className="form-control-container " >

                                                                
                                         <div class="field">
                                        <label class="label">Title</label>
                                        <div class="control">
                                            <input class="input" type="text" placeholder="Text input"/>
                                        </div>
                                        </div>

                                        <div class="field">

                                        <div class="field">
                                        <label class="label">Description</label>
                                        <div class="control">
                                            <textarea class="textarea" placeholder="Textarea"></textarea>
                                        </div>
                                        </div>



                                        <div className="dropfields">
                                            
                                            
                                        <div class="field">
                                        <label class="label">Type </label>
                                        <div class="control">
                                            <div class="select">
                                            <select>
                                                <option>Select dropdown</option>
                                                <option>With options</option>
                                            </select>
                                            </div>
                                        </div>
                                        </div>
                                            
                                        <div class="field">
                                        <label class="label">Genre </label>
                                        <div class="control">
                                            <div class="select">
                                            <select>
                                                <option>Select dropdown</option>
                                                <option>With options</option>
                                            </select>
                                            </div>
                                        </div>
                                        </div>

                                        <div class="field">
                                        <label class="label">Ratings </label>
                                        <div class="control">
                                            <div class="select">
                                            <select>
                                                <option>Select dropdown</option>
                                                <option>With options</option>
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
                                            <input class="input" type="text" placeholder="Text input"/>
                                        </div>
                                        </div>

                                        <div class="field">
                                        <label class="label">Price To Buy</label>
                                        <div class="control">
                                            <input class="input" type="text" placeholder="Text input"/>
                                        </div>
                                        </div>

                                        <div class="field">
                                        <label class="label">Price To Rent</label>
                                        <div class="control">
                                            <input class="input" type="text" placeholder="Text input"/>
                                        </div>
                                        </div>
                                    </div>

                                     
                                            <div class="file is-normal has-name">
                                    <label class="file-label">
                                        <input class="file-input" type="file" name="resume"/>
                                        <span class="file-cta">
                                        <span class="file-icon">
                                            <i class="fas fa-upload"></i>
                                        </span>
                                        <span class="file-label">
                                            Normal file…
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