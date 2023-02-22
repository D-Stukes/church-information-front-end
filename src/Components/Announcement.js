import React from 'react';
import { Link, useParams } from 'react-router-dom'

const Announcement = ({announcement, id}) => {
    console.log("showOneAnnouncement = ", id)

    return (
     <>
            {/* <span className='viewItem'>
                <Link to={`/announcements/${id}`}>View this entry</Link></span> */}
     
                <tr className='indexTableRow'>
                    <td className='indexItems item1'> <Link to={`/announcements/${id}`} className="indexItemLink">{announcement.church_name}</Link></td>
                    <td className='indexItems item2'> {announcement.title}</td>
                    <td className='indexItems item3'> {announcement.type}</td>
                    <td className='indexItems item4'> {announcement.date}</td>
                </tr>
    </>
   
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