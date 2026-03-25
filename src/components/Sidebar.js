import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/sidebar.css";

const Sidebar = ({ onLogout }) => {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <h2 className="logo">Turf</h2>

      <ul>
        <li onClick={() => navigate("/dashboard")}>Home</li>
        <li onClick={() => navigate("/dashboard")}>Turfs</li>
        <li onClick={onLogout}>Logout</li>
      </ul>
    </div>
  );
};

export default Sidebar;