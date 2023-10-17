import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  TextField,
  FormControl,
  Select,
  MenuItem,
  Button,
} from "@mui/material";

import InputLabel from "@mui/material/InputLabel";
import "./BookAppointment.css";
import { useNavigate } from "react-router-dom";
import UserService from "../Service/UserService";
import AppointmentService from "../Service/AppointmentService";
import { RoutesPath } from "../helper";

function BookAppointment() {
  const [userData, setUserData] = useState({
    token: "",
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    user: "",
  });

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("userData"));
    setUserData(localStorageData);
    getDoctorDetails();
  }, []);

  const [doctorList, setDoctorList] = useState([]);

  const getDoctorDetails = async () => {
    const response = await UserService.getDoctorDetails();

    if (response.data.code === "200") {
      setDoctorList(response.data.payload);
    } else {
      console.log(response.data.payload);
    }
  };

  const doctorMenuItems = doctorList.map((doctor) => {
    return (
      <MenuItem key={doctor.id} value={doctor.id}>
        {doctor.firstName} {doctor.lastName} ({doctor.specialization})
      </MenuItem>
    );
  });

  const [formValue, setFormValue] = useState({
    dateTime: "",
    patientId: "",
    description: "",
    status: "raised",
  });

  const [doctorId, setDoctorId] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    let appointment = {
      dateTime: formValue.dateTime,
      doctorId: doctorId,
      patientId: userData.id,
      // description: formValue.description,
      status: "raised",
    };

    try {
      const responseData = await AppointmentService.createAppointment(appointment);
      if (responseData.data.code === "200") {
        alert("Appointment created successfully!!");
        navigate(RoutesPath.SHOW_APPOINTMENT);
      } else {
        alert(responseData.data.payload);
      }

    } catch (error) {
      alert("Error while creating appointment");
    }

    console.log(appointment);
  };

  function handleDoctorChange(event) {
    setDoctorId(event.target.value);
  }

  const changeValues = (event) => {
    setFormValue({ ...formValue, [event.target.id]: event.target.value });
  };

  return (
    <div className="main-container">
      <div>
        <div>
          <Container sx={{ maxWidth: "800px" }}>
            <Typography variant="h4" component="h1" style={{ padding: "5%" }}>
              Create Appointment
            </Typography>
            <form onSubmit={handleSubmit}>
              <div style={{ paddingTop: "2%", paddingBottom: "2%" }}>
                <InputLabel>Select Date and time</InputLabel>
                <TextField
                  id="dateTime"
                  type="datetime-local"
                  value={formValue.dateTime}
                  onChange={changeValues}
                  fullWidth
                  required
                />
              </div>
              <div style={{ paddingTop: "2%", paddingBottom: "2%" }}>
                <InputLabel>Select Doctor</InputLabel>
                <FormControl fullWidth>
                  <Select
                    labelId="doctor-label"
                    id="doctorId"
                    value={doctorId}
                    onChange={handleDoctorChange}
                    required
                    children={doctorMenuItems}
                  />
                </FormControl>
              </div>
              <div style={{ paddingTop: "2%", paddingBottom: "2%" }}>
                <InputLabel>Enter description</InputLabel>
                <TextField
                  id="description"
                  label="Description"
                  multiline
                  rows={4}
                  value={formValue.description}
                  onChange={changeValues}
                  fullWidth
                />
              </div>

              <Button type="submit" variant="contained" color="primary">
                Submit Appointment
              </Button>
            </form>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default BookAppointment;
