import React from 'react'
import EditAnnouncementForm from "../Components/EditAnnouncementForm"
import NavbarEdit from '../Components/NavbarEdit'


function Edit() {
  return (
    <div>
      <div><NavbarEdit /></div>
      <div className='editPage'>
          {/* <span className='editPageHdg'>Edit This Announcement</span> */}
          < EditAnnouncementForm />
      </div>
    </div>
  )
}

export default Edit