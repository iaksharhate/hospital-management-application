import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import "./Sidebar.css";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import { RoutesPath } from "../helper";

export default function SwipeableTemporaryDrawer() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("userData"));
    setUserData(localStorageData);
  }, []);

  const navigate = useNavigate();

  const userDetails = {
    user: "",
    age: "",
    bloodGroup: "",
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    password: "",
    city: "",
    state: "",
    pincode: 0,
    photo: "",
  };

  const editUser = (userId) => {
    navigate(RoutesPath.UPDATE_PATIENT + `?id=${userId}`);
  }

  const list = (anchor) => (
    <Box role="presentation">
      <img
        src="https://img.freepik.com/free-vector/people-walking-sitting-hospital-building-city-clinic-glass-exterior-flat-vector-illustration-medical-help-emergency-architecture-healthcare-concept_74855-10130.jpg?w=1060&t=st=1697230209~exp=1697230809~hmac=c9b5589c92b03ff42e2aa0a6dd5c26943a8bed5ff02f516f8aa534b54a2b373e"
        alt="Your Image"
        style={{ width: "100%", height: "auto" }}
      />
      <List>
        <ListItem key={userDetails.firstName} disablePadding>
          <ListItemButton>
            <strong>First Name : {userData.firstName}</strong>
          </ListItemButton>
        </ListItem>
        <ListItem key={userDetails.lastName} disablePadding>
          <ListItemButton>
            <strong>Last Name : {userData.lastName}</strong>
            {/* <p>{userData.lastName}</p> */}
          </ListItemButton>
        </ListItem>
        <ListItem
          style={{ display: "flex" }}
          key={userDetails.email}
          disablePadding
        >
          <ListItemButton>
            <strong>Email : {userData.email}</strong>
            {/* <p>{userData.email}</p> */}
          </ListItemButton>
        </ListItem>
        <ListItem key={userData.gender} disablePadding>
          <ListItemButton>
            <strong>Gender : {userData.gender}</strong>
          </ListItemButton>
        </ListItem>
        <ListItem key={userData.age} disablePadding>
          <ListItemButton>
            <strong>Age : {userData.age}</strong>
          </ListItemButton>
        </ListItem>
        <ListItem key={userData.city} disablePadding>
          <ListItemButton>
            <strong>City : {userData.city}</strong>
          </ListItemButton>
        </ListItem>
        <ListItem key={userData.state} disablePadding>
          <ListItemButton>
            <strong>State: {userData.state}</strong>
          </ListItemButton>
        </ListItem>
        <ListItem key={userData.pincode} disablePadding>
          <ListItemButton>
            <strong>Pincode : {userData.pinCode}</strong>
          </ListItemButton>
        </ListItem>
        {userData.user === "patient" && (
          <ListItem disablePadding>
            <ListItemButton>
              <Button
                sx={{ color: "white" }}
                variant="contained"
                startIcon={<EditIcon />}
                onClick={() => editUser(userData.id)}
              >
                Edit details
              </Button>
            </ListItemButton>
          </ListItem>
        )}
      </List>
    </Box>
  );

  return (
    <div className="app-container">
      <div className="sidebar">
        {["left"].map((anchor) => (
          <React.Fragment key={anchor}>{list(anchor)}</React.Fragment>
        ))}
      </div>
    </div>
  );
}
