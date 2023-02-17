import React from 'react';
import { Link } from "react-router-dom"
import { useEffect, useRef } from "react";
import Cloud from "../Videos/clouds-10868.mp4"
//import Cloud from "../Videos/pigeon-25656.mp4"

const Navbar = () => {
    // useRef allows persistent play in between renders
    const videoPlayer = useRef(null);

    const tryPlay = () => {
      videoPlayer && videoPlayer.current && videoPlayer.current.play()
      .catch(error => {
        console.error("Error - failure to play has occured", error);
       });
    };

    useEffect(() => {
      tryPlay();
    }, []);

    return (
        <nav className ="navbar">
            <video                   
                id='navbarVideo'  muted autoplay 
                loop  controls    alt="rolling clouds video"                
                src={Cloud}       type="video/mp4"   ref={videoPlayer}
            /> 
            <div className='navLinkBox'>
               
                    <Link className="navLink1" to="/announcements">
                    Announcements
                    </Link>
         
                    <Link to="/" className="navLinkHdg">
                    Church Information{" "}
                    </Link>
        
                    <Link className="navLink2" to="/announcements/new">
                    New Announcement
                    </Link>
   
            </div>
        </nav>    
    );
};

export default Navbar;


// plays-inline 
// <source src={Cloud} type="video/mp4"/> 