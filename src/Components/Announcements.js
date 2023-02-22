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
          <th>Church Name</th>
          <th>Announcement Title</th>
          <th>Type</th>
          <th>Date</th>
        </thead>
      <p className='indexItem'>
        {  
         announcements.map((announcement) =>{
          return <Announcement key={announcement.id} announcement={announcement} id={announcement.id} />
          })
        }
     </p>
    </div>
  )
}

export default Announcements