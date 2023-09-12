import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredEvents, setFilteredEvents] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("/events")
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => console.log(err.message));
  }, []);

  const handleClick = (id) => {
    navigate(`/events/detail/${id}`);
  };

  const formatDate = (dateString) => {
    const eventDate = moment(dateString);
    const currentDate = moment();
    const diffDuration = moment.duration(currentDate.diff(eventDate));

    let formattedDate = "";
    if (diffDuration.asDays() < 1) {
      formattedDate = eventDate.fromNow();
    } else {
      formattedDate = eventDate.format("DD/MM/YYYY HH:mm");
    }

    return formattedDate;
  };

  const formatDate1 = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${day}/${month}/${year} ${hours}:${minutes}`;
  };

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      const filtered = events.filter((event) =>
        event.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredEvents(filtered);
    } else {
      setFilteredEvents([]);
    }
  };

  return (
    <div className="container">
      <div className="col-lg-12 mb-4">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search for events by location"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="btn btn-primary" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
      <h2 className="mt-4 mb-4" style={{color: "white"}}>Current Events</h2>
      <div className="row">
        {(searchTerm.trim() !== "" ? filteredEvents : events).map((event) => (
          <div key={event.id} className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
              <img
                src={event.image_url}
                className="card-img-top"
                alt={event.title}
                style={{ cursor: "pointer" }}
                onClick={() => handleClick(event.id)}
              />
              <div className="card-body">
                <h5 className="card-title">{event.title}</h5>
                <p className="card-text">
                  <strong>Date:</strong> {formatDate(event.date)}
                </p>
                <p className="card-text">
                  <strong>Location:</strong> {event.location}
                </p>
                <p className="card-text">
                  <strong>Time Posted:</strong> {formatDate1(event.created_at)}{" "}
                  hrs
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleClick(event.id)}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventList;