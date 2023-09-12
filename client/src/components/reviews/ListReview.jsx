import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ListReview = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/reviews')
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((error) => console.error(error));
  }, []);

  const handleEdit = (reviewId) => {
    navigate(`/reviews/edit/${reviewId}`);
  };

  const handleDelete = (reviewId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this review?');
    if (confirmDelete) {
      fetch(`/reviews/${reviewId}`, {
        method: 'DELETE',
      })
        .then((res) => {
          if (res.ok) {
            alert('Review deleted successfully');
            navigate(`/events/detail/${id}`);
            window.location.reload(); // Refresh the page
          } else {
            throw new Error('Error deleting review');
          }
        })
        .catch((error) => console.log(error.message));
    }
  };

  return (
    <div className="container" >
      <h2>Reviews</h2>
      <div className="row"  >
        {reviews.map((review) => (
          <div key={review.id} className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div className="card-body">
                <p className="card-text">{review.rating}</p>
                <p className="card-text">{review.comment}</p>
                <p className="card-text">{review.name}</p>
                <button className="btn btn-secondary" onClick={() => handleEdit(review.id)}>
                  Edit
                </button>
                <button className="btn btn-danger" onClick={() => handleDelete(review.id)}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListReview;

