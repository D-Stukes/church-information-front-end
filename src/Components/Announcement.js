import React from 'react';
import { Link, useParams } from 'react-router-dom'

const Announcement = ({announcement, id}) => {
    console.log("showOneAnnouncement = ", id)

    return (
     <div className='tableDataGrid'>
   
            <span className='viewItem'><Link to={`/announcements/${id}`}>View this entry</Link></span>
            <span className='items item1'> {announcement.item_name}</span>
            <span className='items item2'> {announcement.amount}</span>
            <span className='items item3'> {announcement.date}</span>
            <span className='items item4'> {announcement.category}</span>
            <span className='items item5'> {announcement.from}</span>
            <span className='items item6'> {announcement.description}</span>

      
   
    </div>
   
    );
}; 

export default Announcement;




//     <td className='announcementDate'><Link to={`/announcements/${index}`}> {announcement.date} </Link></td>

// </tr> 
// <td className='item1'>{announcement.item_name}</td>
// <td className='item2'>{announcement.amount}</td>
// <td className='item3'>{announcement.date}</td>
// <td className='item4'>{announcement.category}</td>
// <td className='item5'>{announcement.from}</td>
// <td className='item6'>{announcement.description}</td>