import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const turfs = [
    {
      id: 1,
      name: "Premium Cricket Arena",
      location: "Bangalore",
      sport: "Cricket",
      price: 1500,
      image: "https://picsum.photos/600/400?random=1"
    },
    {
      id: 2,
      name: "Elite Football Turf",
      location: "Mumbai",
      sport: "Football",
      price: 1200,
      image: "https://picsum.photos/600/400?random=2"
    },
    {
      id: 3,
      name: "National Badminton Court",
      location: "Pune",
      sport: "Badminton",
      price: 900,
      image: "https://picsum.photos/600/400?random=3"
    },
    {
      id: 4,
      name: "City Basketball Court",
      location: "Chennai",
      sport: "Basketball",
      price: 1000,
      image: "https://picsum.photos/600/400?random=4"
    },
    {
      id: 5,
      name: "Greenfield Cricket Ground",
      location: "Hyderabad",
      sport: "Cricket",
      price: 1400,
      image: "https://picsum.photos/600/400?random=5"
    },
    {
      id: 6,
      name: "Royal Soccer Ground",
      location: "Delhi",
      sport: "Soccer",
      price: 1300,
      image: "https://picsum.photos/600/400?random=6"
    },
    {
      id: 7,
      name: "Victory Sports Arena",
      location: "Kolkata",
      sport: "Football",
      price: 1100,
      image: "https://picsum.photos/600/400?random=7"
    },
    {
      id: 8,
      name: "Champion Cricket Turf",
      location: "Jaipur",
      sport: "Cricket",
      price: 1600,
      image: "https://picsum.photos/600/400?random=8"
    },
    {
      id: 9,
      name: "Pro Badminton Hub",
      location: "Ahmedabad",
      sport: "Badminton",
      price: 850,
      image: "https://picsum.photos/600/400?random=9"
    },
    {
      id: 10,
      name: "Urban Basketball Zone",
      location: "Lucknow",
      sport: "Basketball",
      price: 950,
      image: "https://picsum.photos/600/400?random=10"
    },
    {
      id: 11,
      name: "Mega Football Arena",
      location: "Goa",
      sport: "Football",
      price: 1700,
      image: "https://picsum.photos/600/400?random=11"
    },
    {
      id: 12,
      name: "Skyline Soccer Field",
      location: "Indore",
      sport: "Soccer",
      price: 1250,
      image: "https://picsum.photos/600/400?random=12"
    }
  ];

  const filteredTurfs = turfs.filter(
    (turf) =>
      turf.name.toLowerCase().includes(search.toLowerCase()) ||
      turf.location.toLowerCase().includes(search.toLowerCase()) ||
      turf.sport.toLowerCase().includes(search.toLowerCase())
  );

  const handleBooking = (turf) => {
    navigate("/booking", { state: turf });
  };

  return (
    <div className="dashboard-container">
      
      <div className="header">
        <div className="left-header">
          <span className="logo">🏟</span>
          <h1>Turf Booking System</h1>
        </div>

        <div className="right-header">
          <input
            type="text"
            placeholder="Search by name, city, sport..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button className="icon-btn" onClick={() => navigate("/dashboard")}>
            🏠
          </button>

          <button
            className="icon-btn logout"
            onClick={() => {
              localStorage.removeItem("user");
              navigate("/");
            }}
          >
            🚪
          </button>
        </div>
      </div>

      <div className="turf-grid">
        {filteredTurfs.map((turf) => (
          <div className="turf-card" key={turf.id}>
            <img src={turf.image} alt={turf.name} />
            <div className="card-content">
              <h3>{turf.name}</h3>
              <p>📍 {turf.location}</p>
              <p>🏏 {turf.sport}</p>
              <p className="price">₹ {turf.price} / hour</p>
              <button onClick={() => handleBooking(turf)}>
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Dashboard;