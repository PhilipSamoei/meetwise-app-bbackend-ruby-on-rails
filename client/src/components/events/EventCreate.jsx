import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Eventscss/Event.css'

const EventCreate = () => {
  const [image_url, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleCreateEvent = (e) => {
    e.preventDefault();
    const eventData = { image_url, title, description, date, location };
    fetch(`/events`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(eventData),
    })
      .then((res) => {
        if (res.ok) {
          alert("Event added successfully");
          navigate("/");
        } else {
          throw new Error("Failed to create event");
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="container-login" style={{ textAlign: 'left' }}>
      <h2 style={{color: '#F7F7F7'}}>Add Event</h2>
      {error && <p>{error}</p>}
      <form>
        <div className="form-group">
          <label >Image URL</label>
          <input
            type="text"
            placeholder="Image url"
            className="form-control"
            value={image_url}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            placeholder="Title"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            placeholder="Description"
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Date</label>
          <input
            type="date"
            className="form-control"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Location</label>
          <input
            type="text"
            placeholder="Location"
            className="form-control"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <button
          type="button"
          style={{margin:'6px'}}
          onClick={handleCreateEvent}
          className="btn btn-primary"
        >
          Add Event
        </button>
      </form>
    </div>
  );
};

export default EventCreate;
