import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/card.css";

function TurfCard({ turf }) {
  const navigate = useNavigate();

  return (
    <div className="turf-card">
      <img src={turf.image} alt={turf.name} />
      <div className="turf-info">
        <h3>{turf.name}</h3>
        <p>{turf.location}</p>
        <p>₹{turf.price}</p>
        <button onClick={() => navigate("/booking")}>
          Book Now
        </button>
      </div>
    </div>
  );
}

export default TurfCard;