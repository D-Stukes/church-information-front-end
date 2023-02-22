import React from 'react';
import { Link } from "react-router-dom"
import { useEffect, useRef } from "react";
// import Cloud from "../Videos/clouds-10868.mp4"
import Cloud from "../Videos/sunrise-35254.mp4"

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
// note: this effect will work without the dependency array because the useRef function "tryPlay" doesn't render with the initial render of the return, it will not create an infinite loop

    return (
        <nav className ="navbar">
            <video                   
                id='navbarVideo'  muted autoplay 
                loop  controls    alt="rolling clouds video"                
                src={Cloud}       type="video/mp4"   ref={videoPlayer}
            /> 
            <div className='navLinkBox'>
                {/* <span className="outerNavLink1"> */}
                    <Link className="navLink1 navIndexLink1" to="/announcements">
                    Announcements
                    </Link>
                {/* </span> */}

                {/* <span> */}
                    <Link to="/" className="navLinkHdg navIndexLinkHdg">
                    Church Information{" "}
                    </Link>
                {/* </span> */}

                {/* <span className="outerNavLink2"> */}
                    <Link className="navLink2 navIndexLink2" to="/announcements/new">
                    New Announcement
                    </Link>
                {/* </span> */}
            </div>
        </nav>    
    );
};

export default Navbar;


// plays-inline 
// <source src={Cloud} type="video/mp4"/> 