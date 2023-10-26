import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import React, { useEffect, useState } from "react";
import UserService from "../Service/UserService";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import { Typography } from "@mui/material";
import { RoutesPath } from "../helper";
import { useNavigate } from "react-router-dom";
import UpdateUser from "./UpdateUser";

const ShowDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  const navigate = useNavigate();
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
    getAllDoctors();
  }, []);

  const getAllDoctors = async () => {
    try {
      const response = await UserService.getDoctorDetails();
      // console.log(response.data);
      if (response.data.code === "200") {
        setDoctors(response.data.payload);
      } else {
        console.log(response.data.payload);
      }
    } catch (error) {
      alert("Error while fetching doctor details!!");
    }
  };


  const editDoctor = (doctorId) => {
    
    // navigate(`${RoutesPath.UPDATE_DOCTOR}/${doctorId}`);
    navigate(RoutesPath.UPDATE_DOCTOR+`?id=${doctorId}`);
    
  };

  return (
    <div>
      {userData.user === "admin" && (
        <div
          style={{
            padding: "10px",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button
            variant="outlined"
            startIcon={<AddIcon />}
            size="large "
            onClick={() => navigate(RoutesPath.CREATE_DOCTOR)}
          >
            <Typography style={{ fontWeight: "bold" }}>Add Doctor</Typography>
          </Button>
        </div>
      )}

      <div className="doctor-list" style={{ display: "flex", gap: "10px" }}>
        {doctors.map((doctor) => (
          <Card key={doctor.id} variant="outlined">
            <CardContent sx={{ padding: "12px" }}>
              <img src={doctor.image} alt={doctor.name} />
              <h3>
                Name : {doctor.firstName} {doctor.lastName}
              </h3>
              <p>Specialization : {doctor.specialization}</p>
              <p>Fees : {doctor.fees}</p>
            </CardContent>
            <CardActions>
              <div>
                {userData.user === "admin" && (
                  <div style={{ padding: "2px" }}>
                    <Button
                      variant="contained"
                      startIcon={<EditIcon />}
                      color="primary"
                      size="small"
                      onClick={() => editDoctor(doctor.id)}
                    >
                      Edit Doctor
                    </Button>
                  </div>
                )}
                {userData.user === "patient" && (
                  <div style={{ padding: "2px" }}>
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      startIcon={<EventAvailableIcon />}
                    >
                      Book Appointment
                    </Button>
                  </div>
                )}
              </div>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ShowDoctors;
