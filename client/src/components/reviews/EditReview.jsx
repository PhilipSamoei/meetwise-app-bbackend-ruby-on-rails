import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditReview = () => {
  const { id } = useParams();

  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');
  const [user_id, setUserId] = useState('');
  const [event_id, setEventId] = useState('');

  useEffect(() => {
    fetch(`/reviews/${id}`)
      .then((res) => res.json())
      .then((review) => {
        setRating(review.rating);
        setComment(review.comment);
        setUserId(review.user_id);
        setEventId(review.event_id);
      })
      .catch((err) => console.error(err.message));
  }, [id]);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const reviewData = {
      rating: rating,
      comment: comment,
      user_id: user_id,
      event_id: event_id,
    };

    fetch(`http://localhost:9292/reviews/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(reviewData),
    })
      .then((res) => res.json())
      .then((review) => {
        alert('Review edited successfully');
        navigate(`/events/detail/${id}`);
      })
      .catch((err) => console.error(err.message));
  };

  const handleBack = () => {
    navigate('/reviews');
  };

  return (
    <div className="container" style={{ textAlign: 'left' }}>
      <h1 className="mt-4 mb-3" style={{Color:'#B38B39'}}>Edit Event</h1>
      <form className="form-group">
        <label>Rating</label>
        <input
          type="integer"
          className="form-control"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        <label>Comment</label>
        <input
          type="text"
          className="form-control"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <label>user_id</label>
        <input
          type="integer"
          className="form-control"
          value={user_id}
          onChange={(e) => setUserId(e.target.value)}
        />
        <label>event_id</label>
        <input
          type="integer"
          className="form-control"
          value={event_id}
          onChange={(e) => setEventId(e.target.value)}
        />
        <div className="btn-group mt-3" role="group" >
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

export default EditReview;

