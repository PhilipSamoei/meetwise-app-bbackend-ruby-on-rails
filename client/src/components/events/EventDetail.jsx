import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ListReview from '../reviews/ListReview';
import CreateReview from '../reviews/CreateReview';

const EventDetail = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`/events/${id}`)
      .then((res) => res.json())
      .then((event) => setEvent(event))
      .catch((err) => console.log(err.message));
  }, [id]);

  const handleEdit = () => {
    navigate(`/events/edit/${id}`);
  };

  const handleDelete = () => {
    fetch(`/events/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then(() => {
        console.log('Event deleted successfully');
        navigate('/');
      })
      .catch((err) => console.log(err.message));
  };

  const handleBack = () => {
    navigate('/');
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    return `${day}:${month}:${year}`;
  };

  return (
    <div className="container" style={{marginBottom: '10px',paddingBottom: '10px'}}>
      {event ? (
        <div className="card" style={{marginTop:'30px'}}>
          <h1 style={{Color:'#B38B39'}}>{event.title}</h1>
          <img src={event.image_url} alt={event.title} className="card-img-top" />
          <div className="card-body">
            <h2 className="card-title">{event.title}</h2>
            <p className="card-text">{event.description}</p>
            <p className="card-text">Date: {formatDate(event.date)}</p>
            <p className="card-text">Location: {event.location}</p>
            <div className="d-flex justify-content-between">
              <button onClick={handleEdit} className="btn btn-success" style={{backgroundColor:'#B38B39'}}>
                Edit Event
              </button>
              <button onClick={handleDelete} className="btn btn-danger" style={{backgroundColor:'#8B0000'}}>
                Delete Event
              </button>
            </div>
            <button onClick={handleBack} className="btn btn-primary mt-3"style={{backgroundColor:'#1B2223'}}>
              Back to Events
            </button>
          </div>
          <CreateReview />
          <ListReview />
        </div>
      ) : (
        <p>Loading event details</p>
      )}
    </div>
  );
};

export default EventDetail;
