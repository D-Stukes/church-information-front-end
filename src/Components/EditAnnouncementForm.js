import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
const API = process.env.REACT_APP_API_URL;

function EditAnnouncementForm() {
  let { id } = useParams();
  let navigate = useNavigate();

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
    is_public: true,
  })

  const updateAnnouncement = (updatedAnnouncement) => {
    axios
      .put(`${API}/announcements/${id}`, updatedAnnouncement)
      .then(
        () => {
          navigate(`/announcements/${id}`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn('catch', c));
  };

  const handleTextChange = (event) => {
    setAnnouncement({ ...announcement, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange1 = () => {
    setAnnouncement({ ...announcement, is_member: !announcement.is_member });
  };
  const handleCheckboxChange2 = () => {
    setAnnouncement({ ...announcement, is_public: !announcement.is_public });
  };

  useEffect(() => {
      axios
      .get(`${API}/announcements/${id}`)
      .then((response) => {
        setAnnouncement(response.data);
      })
      .catch((c) => {navigate("/error");
      });
  }, [id]);
      

  const handleSubmit = (event) => {
    event.preventDefault();
    updateAnnouncement(announcement, id);
  };

  
  return (
    <div className="editFormBox">
 <h1 className='editFormHdg'>Edit This Announcement</h1>
      <form   onSubmit={handleSubmit}className='editForm'>
     
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
              name="title"
              value={announcement.title}
              placeholder="Enter announcement title"
              required
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
            
            <label htmlFor="date">Date:</label>
            <input
              id="date"
              type="text"
              name="date"
              value={announcement.date}
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

            <label htmlFor="contributor">Contributor:</label> 
            <input
              id="contributor"
              type="text"
              onChange={handleTextChange}
              checked={announcement.contributor}
            /> <br/><br/>

            <label htmlFor="is_member">Member:</label> 
            <input
              id="is_member"
              type="checkbox"
              onChange={handleCheckboxChange1}
              checked={announcement.is_member}
            /> <br/><br/>

            <label htmlFor="is_public">public:</label>
            <input
              id="is_public"
              type="checkbox"
              onChange={handleCheckboxChange2}
              checked={announcement.is_public}
            /><br/>

        <input 
        className='editFormSubmit'
          type="submit" />
        <Link to={`/announcements`}>
        <button className='cancelEditButton'>Cancel Edit</button>
      </Link><br/><br/>
      </form>
    </div>
  );
}


export default EditAnnouncementForm;
