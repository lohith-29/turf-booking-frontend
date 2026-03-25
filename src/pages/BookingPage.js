import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/booking.css";

const timeSlots = [
  "6:00 AM - 7:00 AM",
  "7:00 AM - 8:00 AM",
  "8:00 AM - 9:00 AM",
  "5:00 PM - 6:00 PM",
  "6:00 PM - 7:00 PM",
  "7:00 PM - 8:00 PM"
];

const BookingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const turf = location.state;

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");

  const handleBooking = async () => {
    const user = JSON.parse(localStorage.getItem("user"));

    // 🔴 LOGIN CHECK
    if (!user) {
      alert("User not logged in");
      navigate("/login");
      return;
    }

    if (!selectedDate || !selectedSlot) {
      alert("Please select date and time slot");
      return;
    }

    // 🔥 IMPORTANT DATA
    const bookingData = {
      userId: user.id,        // ✅ FIX
      turfId: turf.id,        // ✅ FIX
      bookingDate: selectedDate,
      timeSlot: selectedSlot,
      totalAmount: turf.price
    };

    try {
      const response = await fetch("http://localhost:8080/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(bookingData)
      });

      const result = await response.json();

      alert("Booking Successful!");

      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      alert("Booking failed");
    }
  };

  if (!turf) {
    return (
      <div className="booking-container">
        <h2>No Turf Selected</h2>
      </div>
    );
  }

  return (
    <div className="booking-container">
      <h1>{turf.name}</h1>
      <p>{turf.location}</p>
      <p>Sport: {turf.sport}</p>
      <p>Price: ₹{turf.price}</p>

      <div className="booking-section">
        <label>Select Date:</label>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </div>

      <div className="booking-section">
        <label>Select Time Slot:</label>
        <div className="slots">
          {timeSlots.map((slot, index) => (
            <button
              key={index}
              className={selectedSlot === slot ? "slot selected" : "slot"}
              onClick={() => setSelectedSlot(slot)}
            >
              {slot}
            </button>
          ))}
        </div>
      </div>

      <button className="confirm-btn" onClick={handleBooking}>
        Confirm Booking
      </button>
    </div>
  );
};

export default BookingPage;