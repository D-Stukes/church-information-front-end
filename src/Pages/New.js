import React from 'react'
import NewAnnouncmentForm from "../Components/NewAnnouncementForm"
import NavbarNew from '../Components/NavbarNew'

function New() {
  return (
    <div>
        <div><NavbarNew /></div>
        {/* <h1 className='newAnnouncementHdg'>Add a New Announcement</h1><br/> */}

        <div className='newPage'>
          <div> <NewAnnouncmentForm /></div> 
        </div>
    </div>
  )
}

export default New
