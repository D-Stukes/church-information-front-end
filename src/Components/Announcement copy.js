import React from 'react'
//import {Link} from "react-router-dom"

function Announcement({announcement}) {
  return (
    <div className='announcementBox'>
        {
            announcement._public
            ? (<span>announcement.title</span> &&
            <span>announcement.date</span> 
            
            ) : (

                "Local announcement. Members only"
            )

        }
     
        
        
    </div>
  )
}

export default Announcement