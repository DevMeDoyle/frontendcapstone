import React from 'react'
import Main from '../components/Main';
import Movielistwrapper from '../components/Movielistwrapper';
import Header from '../components/Header';

export const  Home = () => {
    return (
        <div>
            

            <Header/>

            <Main/>

            <Movielistwrapper/>

        </div>
    )
}

export default Home