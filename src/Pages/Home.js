import React from 'react'
import NavbarHome from '../Components/NavbarHome'

function Home() {
  return (
    <div>
      <div className='navbarHome'> <NavbarHome/></div>
      <div className='homePage'>
        <div className='welcomeMsgBox'>
          <h1 className='welcomeMsg1'>Welcome to Our Church Information App</h1> 
          <h3 className='welcomeMsg2'>Where visitors and members can get the most current information on church events, services, outreach efforts and other activities</h3>
        </div>
      </div>
    </div>
  )
}

export default Home
   