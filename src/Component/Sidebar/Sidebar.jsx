import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import "./Sidebar.css";

export default function SwipeableTemporaryDrawer() {
  const userDetails = {
    user: "doctor",
    age: "51",
    bloodGroup: "B+",
    firstName: "Rajat",
    lastName: "String",
    gender: "String",
    email: "String",
    password: "String",
    city: "String",
    state: "MH",
    pincode: 410206,
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
            <p>{userDetails.firstName}</p>
          </ListItemButton>
        </ListItem>
        <ListItem key={userDetails.lastName} disablePadding>
          <ListItemButton>
            <strong>Last Name : &nbsp;</strong>
            <p>{userDetails.lastName}</p>
          </ListItemButton>
        </ListItem>
        <ListItem key={userDetails.email} disablePadding>
          <ListItemButton>
            <strong>Email : &nbsp;</strong>
            <p>{userDetails.email}</p>
          </ListItemButton>
        </ListItem>
        <ListItem key={userDetails.gender} disablePadding>
          <ListItemButton>
            <strong>Gender : &nbsp;</strong>
            <p>{userDetails.gender}</p>
          </ListItemButton>
        </ListItem>
        <ListItem key={userDetails.age} disablePadding>
          <ListItemButton>
            <strong>Age : &nbsp;</strong>
            <p>{userDetails.age}</p>
          </ListItemButton>
        </ListItem>
        <ListItem key={userDetails.bloodGroup} disablePadding>
          <ListItemButton>
            <strong>BloodGroup : &nbsp;</strong>
            <p>{userDetails.bloodGroup}</p>
          </ListItemButton>
        </ListItem>
        <ListItem key={userDetails.city} disablePadding>
          <ListItemButton>
            <strong>City : &nbsp;</strong>
            <p>{userDetails.city}</p>
          </ListItemButton>
        </ListItem>
        <ListItem key={userDetails.state} disablePadding>
          <ListItemButton>
            <strong>State: &nbsp;</strong>
            <p>{userDetails.state}</p>
          </ListItemButton>
        </ListItem>
        <ListItem key={userDetails.pincode} disablePadding>
          <ListItemButton>
            <strong>Pincode : &nbsp;</strong>
            <p>{userDetails.pincode}</p>
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
