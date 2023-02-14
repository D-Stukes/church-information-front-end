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
    <article className="announcementDetails">
    {/* <h3>
        {announcement.is_public ? <span>Public</span> : null} {announcement.title}
    </h3> */}

    <h1>{announcement.church_name}</h1>
    <h3>Topic/Title{announcement.title}</h3>
    <h3>Description: {announcement.description}</h3>
    <h3>Location: {announcement.location}</h3>
    <h3>Type: {announcement.type}</h3>
    <h3>Date: {announcement.date}</h3>
    <h3>Time:{announcement.time}</h3>
    <h3>contributor: {announcement.contributor}</h3>
    <h3>Contributor is a Member: {announcement.is_member}</h3>
    <h3>Public: {announcement.is_public}</h3>

    <div className="announcementNavButtons">
        <div>
          {" "}
          <Link to={`/announcements`}><button className="announcementDetailsBackButton">Back</button></Link>
        </div>
        <div>
          <Link to={`/announcements/${id}/edit`}> <button className="announcementDetailsEditButton">Edit</button></Link>
        </div>
        <div>
         <button className="announcementDetailsDeleteButton" onClick={handleDelete} >Delete</button>
        </div>
    </div>
  </article>
);
  }
export default AnnouncementDetails;



  