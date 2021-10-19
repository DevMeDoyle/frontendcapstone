
import '../assets/css/App.css';
import Main from "../components/Main";
import Movielistcontainer from './Movielistcontainer';
import Movielistwrapper from './Movielistwrapper';
import MoviesbyHorror from './MoviesbyHorror'




import React from 'react'

const App = () => {

 

  
  return (
    <div>
        <Main/>
          <Movielistcontainer  />
          <Movielistwrapper/>
          <MoviesbyHorror/>
    </div>
  )
}

export default App
