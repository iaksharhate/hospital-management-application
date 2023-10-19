// Dashboard.jsx
import React, { useEffect } from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import "./Dashboard.css";
import PatientDashboard from "./PatientDashboard";
import AdminDashboard from "./AdminDashboard";
import DoctorDashboard from "./DoctorDashboard";
import { useState } from "react";

const Dashboard = () => {

  const [user, setUser] = useState({
    token: "",
    firstName: "",
    lastName: "",
    email: "",
    user: "",
  });

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("userData"));
    setUser(localStorageData);
  }, []);

  // console.log(user.payload);

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="content">
        <Header />
        <div className="main-content">
          {user.user === 'patient' ? (<PatientDashboard/>) : user.user === 'doctor' ? (<DoctorDashboard/>) : (<AdminDashboard/>)}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
