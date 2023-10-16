import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  FormControl,
  Select,
  MenuItem,
  Button,
} from "@mui/material";

import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import "./BookAppointment.css";

function BookAppointment() {
  const [dateTime, setDateTime] = useState("");
  const [doctor, setDoctor] = useState("");
  const [description, setDescription] = useState("");

  const handleDateTimeChange = (e) => {
    setDateTime(e.target.value);
  };

  const handleDoctorChange = (e) => {
    setDoctor(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleAppointmentSubmit = () => {
    // Handle appointment submission logic here
  };

  return (
    <div className="main-container">
      <div>
        <div>
          <Container sx={{maxWidth:'800px'}}>
            <Typography variant="h4" component="h1" style={{ padding: "5%" }}>
              Create Appointment
            </Typography>
            <form onSubmit={handleAppointmentSubmit}>
              <div style={{ paddingTop: "2%", paddingBottom: "2%" }}>
                <InputLabel>Select Date and time</InputLabel>
                <TextField
                  // label="Date and Time"
                  type="datetime-local"
                  value={dateTime}
                  onChange={handleDateTimeChange}
                  fullWidth
                  required
                />
              </div>
              <div style={{ paddingTop: "2%", paddingBottom: "2%" }}>
                <InputLabel>Select Doctor</InputLabel>
                <FormControl fullWidth>
                  <Select
                    labelId="doctor-label"
                    id="doctor-select"
                    value={doctor}
                    onChange={handleDoctorChange}
                    required
                  >
                    <MenuItem value="doctor1">Doctor 1</MenuItem>
                    <MenuItem value="doctor2">Doctor 2</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div style={{ paddingTop: "2%", paddingBottom: "2%" }}>
                <InputLabel>Enter description</InputLabel>
                <TextField
                  label="Description"
                  multiline
                  rows={4}
                  value={description}
                  onChange={handleDescriptionChange}
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
