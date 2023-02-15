import React from 'react';
import AnnouncementDetails from '../Components/AnnouncementDetails';

const Show = ({announcement, setAnnouncement, total, setTotal}) => {
    return (
        <div className='showPage'>
           <AnnouncementDetails announcement={announcement} setAnnouncement={setAnnouncement} total={total} setTotal={setTotal} /> 
        </div>
    );
};

export default Show;