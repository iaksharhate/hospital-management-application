import React from "react";
import {
  Button,
  Container,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

import InputLabel from "@mui/material/InputLabel";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import AppointmentService from "../Service/AppointmentService";
import TimeSlotService from "../Service/TimeSlotService";
import UserService from "../Service/UserService";
import { RoutesPath } from "../helper";
import "./UpdateAppointment.css";

function UpdateAppointment() {

  const [formValue, setFormValue] = useState({
    date: "",
    time: "",
    doctorName: "",
    description: "",
  });
  console.log("firstLog", formValue);

  const navigate = useNavigate();

  const allSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
  ];
  const date = new Date();
  const month =
    date.getMonth() + 1 < 10 ? "0" + date.getMonth() + 1 : date.getMonth() + 1;
  const minDateWithFullFormat = `${date.getFullYear()}-${month}-${date.getDate()}`;
  const maxDateWithFullFormat = `${date.getFullYear()}-${
    +month + 1
  }-${date.getDate()}`;
  const [doctorAvailability, setDoctorAvailability] = useState([]);
  const [availableSlots, setAvailableSlots] = useState([]);

  const changeValues = (event) => {
    setFormValue({ ...formValue, [event.target.id]: event.target.value });
  };

  const changeTimeValues = (event) => {
    setFormValue({
      ...formValue,
      time: event.target.value,
    });
  };

  const [searchParams] = useSearchParams();
  let a_Id;
  useEffect(() => {
    a_Id = searchParams.get("a_Id");
    getAppointmentDetails(a_Id);
  }, [a_Id]);


  const getAppointmentDetails = async (id) => {
    let appointmentData;
    try {
      const response = await AppointmentService.getAppointmentById(id);
      if (response.data.code === "200") {
        appointmentData = response.data.payload;
        // console.log(response.data.payload);
        setAppointmentData(appointmentData);
      } else {
        console.log(response.data.payload);
      }
    } catch (error) {}
    TimeSlotService.getBookedSlots(appointmentData.doctorId).then((res) => {
      if (res.data.code == 200) {
        setDoctorAvailability(res.data.payload);
      } else {
        // api failed
      }
    });
  };

  const setAppointmentData = (data) => {
    setFormValue({
      ...formValue,
      ...data,
      doctorName: data.doctorName,
      date: data.date,
      time: data.time,
      description: data.description,
    });
  };

  console.log("setting time", formValue.time);

  useEffect(() => {
    if (formValue.date) {
      // Filter the doctor's availability for the selected date.
      const availabilityForSelectedDate = doctorAvailability.find(
        (item) => item.date === formValue.date
      );

      if (availabilityForSelectedDate) {
        const bookedSlots = availabilityForSelectedDate.time;
        const available = allSlots.filter(
          (slot) => !bookedSlots.includes(slot)
        );
        setAvailableSlots(available);
      } else {
        // If the selected date is not in the availability data, set all slots as available.
        setAvailableSlots(allSlots);
      }
    }
  }, [formValue.date, doctorAvailability]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    let appointment = {
      date: formValue.date,
      time: formValue.time,
      // description: formValue.description,
    };
    console.log(a_Id);
    const response = await AppointmentService.rescheduleAppointment(formValue.id, appointment);
    if(response.data.code === "200"){
      alert("Appointment rescheduled successfully!");
      navigate(RoutesPath.SHOW_APPOINTMENT);
    } else {
      alert(response.data.payload);
    }
    console.log("Handle submit", appointment);
  };

  const handleCancel = () => {
    navigate(RoutesPath.SHOW_APPOINTMENT);
  }

  return (
    <div className="main-container">
      <div className="form-container">
        <div>
          <Container sx={{ maxWidth: "1000px" }}>
            <Typography variant="h3" component="h3" style={{ padding: "5%" }}>
              Reschedule appointment
            </Typography>
            <form>
              <div style={{ paddingTop: "2%", paddingBottom: "2%" }}>
                <InputLabel>Select Doctor</InputLabel>
                <FormControl fullWidth>
                  <TextField
                    disabled
                    id="doctorName"
                    value={formValue.doctorName}
                    fullWidth
                  />
                </FormControl>
              </div>

              <div style={{ paddingTop: "2%", paddingBottom: "2%" }}>
                <label>Select Date:</label>
                <FormControl fullWidth>
                  <input
                    type="date"
                    style={{ height: "60px" }}
                    id="date"
                    value={formValue.date}
                    min={minDateWithFullFormat}
                    max={maxDateWithFullFormat}
                    onChange={changeValues}
                  />
                </FormControl>
              </div>
              <div style={{ paddingTop: "2%", paddingBottom: "2%" }}>
                <FormControl fullWidth>
                  <label>Select Time :</label>
                  <Select
                    labelId="time"
                    id="time"
                    value={formValue.time}
                    onChange={changeTimeValues}
                  >
                    {availableSlots.map((element) => (
                      <MenuItem id={element} value={element}>
                        {element}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>

              <div style={{ paddingTop: "2%", paddingBottom: "2%" }}>
                <InputLabel>Enter description</InputLabel>
                <TextField
                  disabled
                  id="description"
                  multiline
                  rows={4}
                  value={formValue.description}
                  onChange={changeValues}
                  fullWidth
                />
              </div>
              <div style={{display:'flex', justifyContent:'space-evenly'}}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                onClick={handleSubmit}
              >
                Reschedule Appointment
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                onClick={handleCancel}
              >
                Cancel
              </Button>
              </div>
            </form>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default UpdateAppointment;
