import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EventEdit = () => {
  const { id } = useParams();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`/events/${id}`)
      .then((res) => res.json())
      .then((event) => {
        setTitle(event.title);
        setDescription(event.description);
        setDate(event.date);
        setLocation(event.location);
        setImageUrl(event.image_url); // Update to event.image_url
      })
      .catch((err) => console.error(err.message));
  }, [id]);
  const handleSubmit = (e) => {
    e.preventDefault();

    const eventData = {
      title: title,
      description: description,
      date: date,
      location: location,
      image_url: imageUrl // Update to image_url
    };

    fetch(`/events/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(eventData),
    })
      .then((res) => res.json())
      .then((event) => {
        alert('Event edited successfully');
        navigate('/');
      })
      .catch((err) => console.error(err.message));
  };

  const handleBack = (e) => {
    navigate('/');
  }

  return (
    <div className="container" style={{ textAlign: 'left' }}>
      <h1 className="mt-4 mb-3">Edit Event</h1>
      <form className="form-group">
        <label>Image Url</label>
        <input
          type="text"
          className="form-control"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <label>Title</label>
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Description</label>
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>Date</label>
        <input
          type="date"
          className="form-control"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <label>Location</label>
        <input
          type="text"
          className="form-control"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <div className='btn-group mt-3' role='group'>
          <button className="btn btn-success mt-3" onClick={handleSubmit}>
            Submit
          </button>
          <button className="btn btn-secondary mt-3" onClick={handleBack}>
            Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default EventEdit;
