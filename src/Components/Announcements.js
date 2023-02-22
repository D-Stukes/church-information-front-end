import React from 'react'
import {useState, useEffect} from "react"
import axios from "axios"
import Announcement from "./Announcement"

const API = process.env.REACT_APP_API_URL

function Announcements() {

const [announcements, setAnnouncements] = useState([])

    useEffect(() =>{
        axios
            .get(`${API}/announcements`)
            .then((response) =>{
                setAnnouncements(response.data)
            })
            .catch((c)=>{
                console.warn('catch',c)
            })
    }, [])

  return (
    <div className='indexBox'>
          <thead>
            <th className='indexTableHdg th1'>Church Name</th>
            <th className='indexTableHdg th2'>Announcement Title</th>
            <th className='indexTableHdg th3'>Type</th>
            <th className='indexTableHdg th4'>Date</th>
          </thead>
      <table>
          <tbody>
          <span className='indexItem'>
            {  
            announcements.map((announcement) =>{
              return <Announcement key={announcement.id} announcement={announcement} id={announcement.id} />
              })
            }
        </span>
        </tbody>
    </table>
    </div>
  )
}

export default Announcements