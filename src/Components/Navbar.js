import React from 'react';
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div>
            <nav className ="navbar">
            <span> <Link className='homeLink' to="/">Home</Link></span> 
            <h1> <Link className='announcementsLink' to="/announcements">Church Announcements List</Link></h1>   
            <button className='newAnnouncementButton'> <Link className='newAnnouncmentLink' to="/announcements/new">Add New Announcement</Link>
            </button>
           
        </nav> 
            
        </div>
    );
};

export default Navbar;