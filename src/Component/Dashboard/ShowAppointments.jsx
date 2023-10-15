// ShowAppointments.jsx
import React, { useState } from 'react';
import './ShowAppointments.css';

const ShowAppointments = () => {
  const [appointments, setAppointments] = useState([
    { id: 1, date: '2023-10-15', time: '10:00 AM', status: 'Scheduled' },
    { id: 2, date: '2023-10-20', time: '02:30 PM', status: 'Scheduled' },

  ]);

  const handleReschedule = (id) => {
  };

  const handleCancel = (id) => {
  };

  return (
    
 
    <div className="patient-dashboard">
       <div className="patient-dashboard">   
      <h1>My Appointments</h1> 
      <div>
                <button onClick={() => handleReschedule()}>Book Appointment</button>
              </div></div>
      <div className="appointment-list">
        {appointments.map((appointment) => (
          <div className="appointment" key={appointment.id}>
            <div className="appointment-details">
              <p>Date: {appointment.date}</p>
              <p>Time: {appointment.time}</p>
              <p>Status: {appointment.status}</p>
            </div>
            {appointment.status === 'Scheduled' && (
              <div className="action-buttons">
                <button onClick={() => handleReschedule(appointment.id)}>Reschedule</button>
                <button onClick={() => handleCancel(appointment.id)}>Cancel</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowAppointments;
