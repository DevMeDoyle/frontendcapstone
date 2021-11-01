import React from 'react'
import { useHistory } from 'react-router-dom'
import {useState,useEffect} from "react";
import Header from '../components/Header';
import {FaX} from 'react-icons/fa';
import {FaStar} from 'react-icons/fa';
import {FaTrash} from 'react-icons/fa';
import {FaFilePen} from 'react-icons/fa';
import {FaPen} from 'react-icons/fa'



const AddMovieForm = (props) => {

    let redirect = useHistory()

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [genre, setGenre] = useState("");
    const [ratings, setRatings] = useState("");
    const [release, setRelease] = useState("");
    const [pricetorent, setPricetorent] = useState("");
    const [pricetobuy, setPricetobuy] = useState("");
    const [image, setImage] = useState("");
    const [poster, setPosters] = useState("");
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
            setErrorDescription("You must enter a description");
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

        if(image === "")

        {
            setErrorImage("Tou must enter a image");
            isValidated = false;
        }

        else{
            setErrorImage("")
        }

        return isValidated;
        
    }



const push= (e)=>{

    e.preventDefault();

            const formData = new FormData();
            // const myposter = document.querySelector(".file-input")

            // const arr = ['poster','image'];

            formData.append('title',title );
            formData.append('description',description);
            formData.append('type',type );
            formData.append('ratings',ratings );
            formData.append('priceToRent',pricetorent);
            formData.append('priceToBuy',pricetobuy);
            formData.append('releasedate',release);
            // formData.append('poster',poster.files[0]);
            // formData.append('image',image.files[1]);
            // for(let i=0;i<myposter.files.length;i++){
            //     formData.append(arr[i],myposter.files[i])
            // }
            formData.append('genre',genre);
           
            console.log(formData)


            fetch('http://localhost:5000/movies', {
            method: 'POST',
            body: formData
            })
            .then(response => response.json())
            .then(result => {

                alert("Movie Was Added Check Movie Listings")
                console.log(result)
                console.log('Success:');
                redirect.push("/Dashboard")
            })
            .catch(error => {
                alert("DAMN IT!")
            console.error('Error:', error);
            });
        }
    return (

        
        <>

                <Header/>

                {/* <Header/> */}

            <h1 className="H1LOGO">ADMINISTRATOR ADD MOVIE PAGE</h1>

        <div className="form" >

            
            
            <form className="a" onSubmit={push}>



                <div className="form-control-container " >

                                                            {/* Title */}
                                    <div className="field">
                                        <label className="label">Title   <FaPen onClick={(event)=>{alert(`${title} was click`)}} className="icons"  /> <FaTrash/> </label> 
                                            <div className="control">
                                                <input className="input" type="text" placeholder="Title" value={title} onChange={(event)=>{ setTitle(event.target.value); }} />
                                                     <div className="error"> {errorTitle}</div> 
                                            </div>
                                    </div>  


                                                                                 {/* Description*/}
                                        <div className="field">

                                        <div className="field">
                                        <label className="label">Description <FaPen/> <FaTrash/></label>
                                        <div className="control">
                                            <textarea className="textarea" placeholder="Textarea"   value={description} onChange={(event)=>{setDescription(event.target.value); }}  />
                                            <div className="error"> {errorDescription}</div>  
                                        </div>
                                        </div>


                                                    {/* Type */}
                                        <div className="dropfields">
                                            
                                            
                                        <div className="field">
                                        <label className="label">Type</label>
                                        <div className="control">
                                            <div className="select">
                                            <select value={type} onChange={(event)=>{setType(event.target.value); }} >
                                             
                                                <option></option>
                                                <option value="movies">Movie</option>
                                                <option value="tv-shows">TV SHOW</option>
                                            </select>
                                            <div className="error"> {errorType}</div> 
                                            </div>
                                        </div>
                                        </div>

                                                     {/* Genre */}
                                            
                                        <div className="field">
                                    <label className="label">Genre </label>
                                        <div className="control">
                                            <div className="select">
                                                <select value={genre} onChange={(event)=>{setGenre(event.target.value);}} >
                                                
                                                    <option></option>
                                                    <option value="Comedy">COMEDY</option>
                                                    <option value="Horror">HORROR</option>
                                                    <option value="Action">ACTION</option>
                                                    <option value="Adventure">ADVENTURE</option>
                                                    <option value="War">WAR</option>
                                                    <option value="Western">WESTERN</option>
                                                </select>
                                                <div className="error"> {errorGenre}</div> 
                                            </div>
                                        </div>
                                 </div>

                                                     {/* Ratings */}
                                        <div className="field">
                                        <label className="label">Ratings </label>
                                        <div className="control">
                                            <div className="select">
                                            <select value={ratings} onChange={(event)=>{setRatings(event.target.value);}} >
                                            
                                                <option></option>
                                                <option value="5stars">5 STAR</option>
                                                <option value="4stars">4 STAR</option>
                                                <option value="3stars">3 STAR</option>
                                                <option value="2stars">2 STAR</option>
                                                <option value="1star">1 STAR</option> 
                                            </select>
                                            <div className="error"> {errorRatings}</div>  
                                            </div>
                                        </div>
                                    </div>
                                            
                                            
                                            
                                            
                                     </div>

                                    <div>


                                    <div className="dropfields">

                                    <div className="field">
                                        <label className="label">Date Release</label>
                                        <div className="control">
                                            <input className="input" type="text" placeholder="Text input"  value={release} onChange={(event)=>{setRelease(event.target.value);}} />
                                            <div className="error"> {errorRelease}</div>  
                                        </div>
                                        </div>

                                        <div className="field">
                                        <label className="label">Price To Buy</label>
                                        <div className="control">
                                            <input className="input" type="text" placeholder="Text input" value={pricetobuy} onChange={(event)=>{setPricetobuy(event.target.value);}}/>
                                             <div className="error"> {errorPricetobuy}</div>  
                                        </div>
                                        </div>

                                        <div className="field">
                                        <label className="label">Price To Rent</label>
                                        <div className="control">
                                            <input className="input" type="text" placeholder="Text input" value={pricetorent} onChange={(event)=>{setPricetorent(event.target.value);}} />
                                             <div className="error"> {errorPricetorent}</div>  
                                        </div>
                                        </div>
                                    </div>

                                     
                                {/* <div className="file is-normal has-name">
                                    <label className="file-label">
                                        <input id="poster" className="file-input" type="file" name="poster"  onChange={(event)=>{setPosters(event.target);}} />
                                        <div className="error"> {errorPosters}</div>  

                                        <span className="file-cta">
                                        <span className="file-icon">
                                            <i className="fas fa-upload"></i>
                                        </span>
                                        <span className="file-label">
                                            Poster Image
                                        </span>
                                        </span>
                                        <span className="file-name">
                                        { Screen Shot 2017-07-29 at 15.54.25.png} 
                                        </span>
                                    </label>
                                    </div>

                                    <div className="file is-normal has-name">
                                    <label className="file-label">
                                        <input className="file-input" type="file" name="movieimg"  onChange={(event)=>{setImage(event.target)}} />
                                        <div className="error"> {errorImages}</div> 

                                        <span className="file-cta">
                                        <span className="file-icon">
                                            <i className="fas fa-upload"></i>
                                        </span>
                                        <span className="file-label">
                                            Movie Images file…
                                        </span>
                                        </span>
                                        <span className="file-name">
                                         Screen Shot 2017-07-29 at 15.54.25.png 
                                        </span>
                                    </label>
                                    </div> */}


                                    
                                      

                                    <div className="field is-grouped Bth_on">
                                    <div className="control">
                                        <button className="button is-link" type="submit" >Submit</button>
                                    </div>
                                    <div className="control">
                                        <button className="button is-link is-light">Cancel</button>
                                    </div>
                                    </div>          
                        


                
                </div>

                
             </div>           
                

</div>
                


            </form>
            
        </div>
        </>
    )
}

export default AddMovieForm