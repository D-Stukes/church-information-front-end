import React from 'react'
import NewAnnouncmentForm from "../Components/NewAnnouncementForm"
import NavbarNew from '../Components/NavbarNew'

function New() {
  return (
    <div>
        <div><NavbarNew /></div>
        <div className='newPage'>
            <h1 className='newAnnouncementHdg'>Add a New Announcement</h1>
            <NewAnnouncmentForm />
        </div>
    </div>
  )
}

export default New
