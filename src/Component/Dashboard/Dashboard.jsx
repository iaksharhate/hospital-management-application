// Dashboard.jsx
import React from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import './Dashboard.css';
import PatientDashboard from './PatientDashboard';
import AdminDashboard from './AdminDashboard';
import DoctorDashboard from './DoctorDashboard';

const Dashboard = () => {
  const userDetails = {
    user: 'patient'
  }
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="content">
        <Header />
        <div className="main-content">
          {userDetails.user == 'patient' ? (<PatientDashboard/>) : userDetails.user == 'doctor' ? (<DoctorDashboard/>) : (<AdminDashboard/>)}
        </div>

        
      </div>
    </div>
  );
};

export default Dashboard;
