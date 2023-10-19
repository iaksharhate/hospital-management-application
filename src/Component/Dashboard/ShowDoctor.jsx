import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import React, { useEffect, useState } from 'react';
import UserService from '../Service/UserService';

const ShowDoctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    getAllDoctors();
  }, []);

  const getAllDoctors = async () => {
    try {
      const response = await UserService.getDoctorDetails();
      console.log(response.data);
      if (response.data.code === "200") {
        setDoctors(response.data.payload);
      } else {
        console.log(response.data.payload);
      }
    } catch (error) {
      alert('Error while fetching doctor details!!');
    }
  }

  return (
    <div className="doctor-list" style={{display:"flex" , gap:"10px"}}>
      {doctors.map((doctor) => (
        <Card key={doctor.id} variant="outlined">
          <CardContent>
            <img src={doctor.image} alt={doctor.name} />
            <h3>Name : {doctor.firstName} { doctor.lastName}</h3>
            <p>Specialization : {doctor.specialization}</p>
            <p>Fees : {doctor.fees}</p>
          </CardContent>
          <CardActions>
            <Button variant="contained" color="primary">Book Appointment</Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default ShowDoctors;
