import { useState } from "react";
import API from "../services/api";

function BookingModal({ turf, onClose }) {
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");

  const bookTurf = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    await API.post("/bookings", {
      user: { id: user.id },
      turf: { id: turf.id },
      bookingDate: date,
      timeSlot,
      totalAmount: turf.pricePerHour
    });
    alert("Booking Confirmed!");
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{turf.name}</h2>
        <input type="date" onChange={(e) => setDate(e.target.value)} />
        <input placeholder="Time Slot (e.g. 6PM-7PM)"
          onChange={(e) => setTimeSlot(e.target.value)} />
        <button onClick={bookTurf}>Confirm Booking</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}

export default BookingModal;