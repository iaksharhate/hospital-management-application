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
import TimeSlotService from "../Service/TimeSlotService";
import { RoutesPath, timeslot } from "../helper";

function BookAppointment() {
  const [userData, setUserData] = useState({
    token: "",
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    user: "",
  });

  const date = new Date;
  const month = date.getMonth() + 1 < 10 ? '0'+date.getMonth() + 1  : date.getMonth() + 1 ;
  const minDateWithFullFormat = `${date.getFullYear()}-${month}-${date.getDate()}`;
  const maxDateWithFullFormat = `${date.getFullYear()}-${+month + 1}-${date.getDate()}`;

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
      date: formValue.date,
      time: formValue.time,
      doctorId: doctorId,
      patientId: userData.id,
      description: formValue.description,
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

  const [bookedSlots, setBookedSlots] = useState([]);
  function  handleDoctorChange(event) {
    setDoctorId(event.target.value);
    
    TimeSlotService.getBookedSlots(event.target.value).then(res => {
      if (res.data.code == 200) {
        setBookedSlots(bookedSlots.push(res.data.payload));
      } else if (res.data.code == 501) {
        // yet to decide
        setBookedSlots([]);
      } else {
        // api failed
      }
    })
  }

  const getTimeSlots = async (id) => {
    
  }
  const [a, seta] = useState({});


  function setUserData1(doctor, date) {
    console.log(date);
    if (!doctor && !date) {
      return true;
    }
    return false;
    console.log(
      formValue
    );
  }
  const changeValues = (event) => {
    setFormValue({ ...formValue, [event.target.id]: event.target.value });
    console.log(bookedSlots);
    if (event.target.id=== 'date' && bookedSlots.length) {
      let a = bookedSlots[0].forEach(element => {
        if (element.date === formValue.date) {
          return element.time;
        }
      });
      console.log(a);
    }
  };

  const changeTimeValues = (event) => {
    setFormValue({
      ...formValue,
      time: event.target.value,
    });
  };

  return (
    <div className="main-container">
      <div>
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
                <InputLabel>Select Date</InputLabel>
                <FormControl fullWidth>
                <input
                  disabled={!doctorId}
                  style={{height: "40px"}}
                  id="date"
                  type="date"
                  min={minDateWithFullFormat}
                  max={maxDateWithFullFormat}
                  value={formValue.date}
                  onChange={changeValues}
                  required
                />
                </FormControl>
              </div>
              <div style={{ paddingTop: "2%", paddingBottom: "2%" }}>
                <InputLabel>Select Time</InputLabel>
                <FormControl fullWidth>
                  <Select
                    disabled={!doctorId || !formValue.date}
                    labelId="time"
                    id="time"
                    value={formValue.time}
                    onChange={changeTimeValues}
                  > 
                  { 
                    // bookedSlots[0].forEach(element => {
                    //   if (element === formValue.date) {
                    //     element.time.forEach(e => {
                    //       return seta({...a, e:e})
                    //     })
                    //   }
                    // })
                  }
                  {/* {console.log(a)} */}
                    {/* <MenuItem disabled={true} value="09:00 AM">09:00 - 10:00 AM</MenuItem>
                    <MenuItem disabled={true} value="10:00 AM">10:00 - 11:00 AM</MenuItem>
                    <MenuItem disabled={true} value="11:00 AM">11:00 - 12:00 AM</MenuItem>
                    <MenuItem disabled={true} value="12:00 PM">12:00 - 1:00 PM</MenuItem>
                    <MenuItem disabled={true} value="02:00 PM">02:00 - 03:00 PM</MenuItem>
                    <MenuItem disabled={true} value="03:00 PM">03:00 - 4:00 PM</MenuItem>
                    <MenuItem disabled={true} value="04:00 PM">04:00 - 5:00 PM</MenuItem>
                    <MenuItem disabled={true} value="05:00 PM">05:00 - 6:00 PM</MenuItem> */}

                    {timeslot.map(element => (
                      <MenuItem id={element.value} value={element.value}>{element.name}</MenuItem>
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
