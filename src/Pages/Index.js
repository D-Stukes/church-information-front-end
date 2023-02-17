import React from 'react'
import Announcements from '../Components/Announcements'
import NavbarIndex from '../Components/NavbarIndex'


function Index() {
  return (
   <div >
    <div className='navbarIndex'> <NavbarIndex/></div>
    <div className="indexPage">
       
        <h1 className='indexPageHdg'>List of Church Announcements</h1>
        <Announcements/>
    </div>
    </div>
  )
}

export default Index