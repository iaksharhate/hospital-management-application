// ShowAppointments.jsx
import React, { useEffect, useState } from "react";
import "./ShowAppointments.css";
import AppointmentService from "../Service/AppointmentService";

const ShowAppointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() =>{
    const localStorageData = JSON.parse(localStorage.getItem("userData"));
    console.log("local store data from useEffect",localStorageData)
    getAppointments(localStorageData);
  },[])



  const getAppointments = async (userData) => {
    try {
      const response = await AppointmentService.getAppointment(
        userData.id,
        userData.user
      );
      console.log(response);
      if (response.data.code === "200") {
        setAppointments(response.data.payload);
      } else {
        alert("Error while fetching appointments!");
      }
    } catch (error) {}
  };

  

  const handleReschedule = (id) => {};

  const handleCancel = async (id) => {
    // event.preventDefault();
    let ans = window.confirm("Do you want to cancel appointment?");
    console.log(id);
    let appointment = {
      status: "cancelled",
    };

    if (ans) {
      try {
        const response = await AppointmentService.cancelAppointment(id, appointment);
        
        if(response.data.code === "200"){
          alert("Appointment cancelled successfull!!");
          window.location.reload();
        } else {
          alert(response.data.payload)
        }
      } catch (error) {
        console.log("Error while cancelling appointment!!");
      }
    } else {
      window.location.reload();
    }
  };

  return (
    <div className="patient-dashboard">
      <div className="patient-dashboard">
        <h1>My Appointments</h1>
        <div>
          <button onClick={() => handleReschedule()}>Book Appointment</button>
        </div>
      </div>
      <div className="appointment-list">
        {appointments.map((appointment) => (
          <div className="appointment" key={appointment.id}>
            <div className="appointment-details">
              <p>Appointment ID: {appointment.id}</p>
              <p>Date : {appointment.date}</p>
              <p>Time : {appointment.time}</p>
              <p>Doctor : {appointment.doctorName}</p>
              <p>Patient : {appointment.patientName}</p>
              <p>Description : {appointment.description}</p>
              <p>Status : {appointment.status}</p>
            </div>
            {appointment.status !== "cancelled" && (
              <div className="action-buttons">
                <button onClick={() => handleReschedule(appointment.id)}>
                  Reschedule
                </button>
                <button onClick={() => handleCancel(appointment.id)}>
                  Cancel
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowAppointments;
