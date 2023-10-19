import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import "./Sidebar.css";
import { useState, useEffect } from "react";

export default function SwipeableTemporaryDrawer() {

  const [userData, setUserData] = useState({})

  useEffect(()=> {
    const localStorageData = JSON.parse(localStorage.getItem('userData'))
    setUserData(localStorageData)
  },[])

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
            <strong>First Name : &nbsp;</strong>
            <p>{userData.firstName}</p>
          </ListItemButton>
        </ListItem>
        <ListItem key={userDetails.lastName} disablePadding>
          <ListItemButton>
            <strong>Last Name : &nbsp;</strong>
            <p>{userData.lastName}</p>
          </ListItemButton>
        </ListItem>
        <ListItem style={{display:'flex'}} key={userDetails.email} disablePadding>
          <ListItemButton>
            <strong>Email : {userData.email}</strong>
            {/* <p>{userData.email}</p> */}
          </ListItemButton>
        </ListItem>
        <ListItem key={userDetails.gender} disablePadding>
          <ListItemButton>
            <strong>Gender : &nbsp;</strong>
            <p>{userData.gender}</p>
          </ListItemButton>
        </ListItem>
        <ListItem key={userDetails.age} disablePadding>
          <ListItemButton>
            <strong>Age : &nbsp;</strong>
            <p>{userData.age}</p>
          </ListItemButton>
        </ListItem>
        <ListItem key={userDetails.city} disablePadding>
          <ListItemButton>
            <strong>City : &nbsp;</strong>
            <p>{userData.city}</p>
          </ListItemButton>
        </ListItem>
        <ListItem key={userDetails.state} disablePadding>
          <ListItemButton>
            <strong>State: &nbsp;</strong>
            <p>{userData.state}</p>
          </ListItemButton>
        </ListItem>
        <ListItem key={userDetails.pincode} disablePadding>
          <ListItemButton>
            <strong>Pincode : &nbsp;</strong>
            <p>{userData.pinCode}</p>
          </ListItemButton>
        </ListItem>
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
