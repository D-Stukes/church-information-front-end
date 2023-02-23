import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function AnnouncementDetails() {
  const [announcement, setAnnouncement] = useState({});
  let { id } = useParams();

  let navigate = useNavigate();

const deleteAnnouncement = () => {
  axios
    .delete(`${API}/announcements/${id}`)
    .then(
      () => {
        navigate(`/announcements`);
      },
      (error) => console.error(error)
    )
    .catch((c) => console.warn("catch", c));
};
const handleDelete = () => {
  console.log("button clicked");
  deleteAnnouncement()
};


useEffect(() => {
  axios
  .get(`${API}/announcements/${id}`)
  .then((response) => {
    console.log("response data - frontend= ",response.data);
    setAnnouncement(response.data);
  })
  .catch((c) => {
    console.warn("catch", c);
  });
  }, [id, API]);

  return (
    <div className="announcementDetailsBox">
    <article className="announcementDetails">
    {/* <h3>
        {announcement.is_public ? <span>Public</span> : null} {announcement.title}
    </h3> */}

    <h1 className="detailHeader">{announcement.church_name}</h1>
    <h3 className="detailHdg dHdg1">Topic:</h3><span className="detail">{announcement.title}</span>
    <h3 className="detailHdg dHdg2">Description:</h3><span className="detail">{announcement.description}</span>
    <h3 className="detailHdg dHdg3">Location:</h3><span className="detail">{announcement.location}</span>
    <h3 className="detailHdg dHdg4">Type:</h3><span className="detail"> {announcement.type}</span>
    <h3 className="detailHdg dHdg5">Date:</h3><span className="detail">{announcement.date}</span>
    <h3 className="detailHdg dHdg6">Time:</h3><span className="detail">{announcement.time}</span>
    <h3 className="detailHdg dHdg7">Contributor:</h3><span className="detail">{announcement.contributor}</span>
    
    {announcement.is_member  ? (<h3 className="detailHdg dHdg8"> (Member)</h3>)  : (<span className="detailHdg dHdg8">(Guest)</span>) }
    {announcement.is_public  ? (<h3 className="detailHdg dHdg9">(Public)</h3>) : (<h3 className="detailHdg dHdg9">(Private)</h3>) }
    {/* <h3 className="detailHdg"> Public:</h3><span className="detail">{announcement.is_public}</span><br/><br/> */}

    <div className="announcementNavButtons">
    
          <Link to={`/announcements`}><button className="announcementDetailsBackButton">Return to List</button></Link>
      
          <Link to={`/announcements/${id}/edit`}> <button className="announcementDetailsEditButton">Edit</button></Link>
      
         <button className="announcementDetailsDeleteButton" onClick={handleDelete} >Delete</button>
        
    </div>
  </article>
  </div>
);
  }
export default AnnouncementDetails;



  