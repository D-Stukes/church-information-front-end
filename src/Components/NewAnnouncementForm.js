
import React from 'react'
import {useState} from 'react'
import {useNavigate, Link} from "react-rounter-dom"
import axios from 'axios'

const API = REACT_APP_API_URL

function NewAnnouncementForm() {
  
  let navigate = useNavigate()
  
  const[announcement, setAnnouncement]=useState({
    church_name: '',
    title: '',
    description:'',
    type: '',
    location: '',
    date:'',
    time:'',
    contributor: '',
    is_member: false,
    is_public: false,
  })

  const addAnnouncement =(newAnnouncement) => {
    axios
    .post(`${API}/announcments`, newAnnouncement)
    .then( (()=>{
      navigate(`/announcments`)
    }),
    (error) => console.error(error)
    )
    .catch((c)=>{
      console.warn('catch', c)
    })

  }
  
  const handleTextChange = (event) => {
    setAnnouncement({ ...announcement, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setAnnouncement({ ...announcement, is_favorite: !announcement.is_favorite });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addSnnouncement(announcement);
  };
  
  
    return (
      <div className='new'>
            <form className="newForm" onSubmit={handleSubmit}>
            <br/><br/>
            <label htmlFor="church_name">Church Name:</label>
            <input
              id="church_name"
              value={announcement.church_name}
              type="text"
              onChange={handleTextChange}
              placeholder="Please enter the church's name"
              required
            /> <br/><br/>
            <label htmlFor="title">Title:</label>
            <input
              id="title"
              type="text"
              required
              value={announcement.title}
              placeholder="Enter name of title"
              onChange={handleTextChange}
            /> <br/><br/>

            <label htmlFor="description">Description:</label>
            <input
              id="description"
              type="text"
              name="description"
              value={announcement.description}
              placeholder="Enter a brief description"
              onChange={handleTextChange}
            /> <br/><br/>

            <label htmlFor="type">Type:</label>
            <input
              id="type"
              type="text"
              name="type"
              value={announcement.type}
              placeholder="Enter the type of announcement (e.g. event)"
              onChange={handleTextChange}
            /> <br/><br/>

            <label htmlFor="location">Location:</label>
            <input
              id="location"
              type="text"
              name="location"
              value={announcement.location}
              placeholder="Enter a brief location"
              onChange={handleTextChange}
            /> <br/><br/>
            
            <label htmlFor="date">Time:</label>
            <input
              id="date"
              type="text"
              name="date"
              value={announcement.description}
              placeholder="Enter the date"
              onChange={handleTextChange}
            /> <br/><br/>

            <label htmlFor="time">Time:</label>
            <input
              id="time"
              type="text"
              name="time"
              value={announcement.time}
              placeholder="Enter length of time"
              onChange={handleTextChange}
            /><br/><br/>

            <label htmlFor="is_member">Member:</label> <br/>
            <input
              id="is_member"
              type="checkbox"
              onChange={handleCheckboxChange}
              checked={announcements.is_member}
            /> <br/><br/><br/>

            <label htmlFor="is_public">public:</label>
            <br/>
            <input
              id="is_public"
              type="checkbox"
              onChange={handleCheckboxChange}
              checked={announcement.is_public}
            /> <br/><br/><br/>

            <input type="submit" />
            <br/><br/>
            <Link to={`/announcements/`}>
            <button className='cancelNewButton'>Cancel</button>
          </Link>
        </form>
      </div>
  )
}

export default NewAnnouncementForm