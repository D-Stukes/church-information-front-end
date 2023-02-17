import React from 'react'
import EditAnnouncementForm from "../Components/EditAnnouncementForm"
import NavbarEdit from '../Components/NavbarEdit'


function Edit() {
  return (
    <div>
      <div><NavbarEdit /></div>
      <div className='editPage'>
          <h1 className='editPageHdg'>Edit This Announcement</h1>
          < EditAnnouncementForm />
      </div>
    </div>
  )
}

export default Edit