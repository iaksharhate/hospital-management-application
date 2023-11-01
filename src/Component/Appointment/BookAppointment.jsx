import {
  Button,
  Container,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import InputLabel from "@mui/material/InputLabel";
import { useNavigate } from "react-router-dom";
import AppointmentService from "../Service/AppointmentService";
import TimeSlotService from "../Service/TimeSlotService";
import UserService from "../Service/UserService";
import { RoutesPath } from "../helper";
import "./BookAppointment.css";

function BookAppointment() {
  const [userData, setUserData] = useState({
    token: "",
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    user: "",
  });

  const date = new Date();
  const month =
    date.getMonth() + 1 < 10 ? "0" + date.getMonth() + 1 : date.getMonth() + 1;
  const minDateWithFullFormat = `${date.getFullYear()}-${month}-${date.getDate()}`;
  const maxDateWithFullFormat = `${date.getFullYear()}-${+month + 1
    }-${date.getDate()}`;
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

  const [doctorAvailability, setDoctorAvailability] = useState([]);
  const [availableSlots, setAvailableSlots] = useState([]);

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
    date: "",
    time: "",
    patientId: "",
    description: "",
    status: "raised",
  });

  const [doctorId, setDoctorId] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    let appointment = {
      // date: selectedDate,
      date: formValue.date,
      time: formValue.time,
      doctorId: doctorId,
      patientId: userData.id,
      description: formValue.description,
      status: "raised",
    };

    try {
      const responseData = await AppointmentService.createAppointment(
        appointment
      );
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
    // window.location.reload();
    TimeSlotService.getBookedSlots(event.target.value).then((res) => {
      if (res.data.code == 200) {

        setDoctorAvailability(res.data.payload);
      } else {
        // api failed
      }
    });
  }

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

  const changeValues = (event) => {
    setFormValue({ ...formValue, [event.target.id]: event.target.value });
  };

  const changeTimeValues = (event) => {
    setFormValue({
      ...formValue,
      time: event.target.value,
    });
  };

  return (
    <div className="main-container">
      <div className="form-container">
        <div>
          <Container sx={{ maxWidth: "1000px" }}>
            <Typography variant="h3" component="h3" style={{ padding: "5%" }}>
              Book appointment
            </Typography>
            <form onSubmit={handleSubmit}>
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
                <label>Select Date:</label>
                <FormControl fullWidth>
                  <input
                    disabled={!doctorId}
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
                    disabled={!doctorId || !formValue.date}
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
                  disabled={!doctorId}
                  id="description"
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
