import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const CreateReview = () => {
  const { id } = useParams();
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleCreateReview = (e) => {
    e.preventDefault();
    const reviewData = { rating, comment };
    fetch(`/reviews`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reviewData),
    })
      .then((res) => {
        if (res.ok) {
          alert("Review saved successfully");
          navigate(`/events/detail/${id}`);
          window.location.reload(); // Reload the page
        } else {
          throw new Error("Failed to post review");
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="container" style={{ textAlign: "left" }}>
      <h2 style={{Color:'#B38B39'}}> Review Event</h2>
      {error && <p>{error}</p>}
      <form>
        <div className="form-group">
          <label >Rating</label>
          <input
            type="integer"
            className="form-control"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Comment</label>
          <input
            type="text"
            className="form-control"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
        <button
          type="button"
          onClick={handleCreateReview}
          className="btn btn-primary"
          style={{backgroundColor:'#B38B39'}}
        >
          Add Review
        </button>
      </form>
    </div>
  );
};

export default CreateReview;


