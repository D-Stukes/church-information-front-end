import React from 'react';
import AnnouncementDetails from '../Components/AnnouncementDetails';
import NavbarShow from '../Components/NavbarShow'

const Show = ({announcement, setAnnouncement, total, setTotal}) => {
    return (
        <div>
            <div><NavbarShow /></div>
        <div className='showPage'>
           <AnnouncementDetails announcement={announcement} setAnnouncement={setAnnouncement} total={total} setTotal={setTotal} /> 
        </div>
        </div>
    );
};

export default Show;