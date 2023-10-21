import React from "react";
import { useNavigate } from "react-router-dom";
import "./CreateDoctor.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import UserService from "../Service/UserService";
import { RoutesPath } from "../helper";

function CreateDoctor() {
  const [formValue, setFormValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "",
    age: "",
    specialization: "",
    experience: "",
    city: "",
    state: "",
    fees: "",
    pinCode: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    // const { name, value } = event.target;

    setFormValue({ ...formValue, [event.target.id]: event.target.value });

    // const newErrors = { ...errors };

    // if (name === "name") {
    //   if (!value) {
    //     newErrors.name = "Name is required";
    //   } else if (!/^[A-Z]{1}[a-zA-Z\\s]{2,}$/.test(value)) {
    //     newErrors.name = "name is invalid";
    //   } else {
    //     newErrors.name = "";
    //   }
    // }

    // setErrors(newErrors);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let doctor = {
      firstName: formValue.firstName,
      lastName: formValue.lastName,
      email: formValue.email,
      password: formValue.password,
      gender: formValue.gender,
      age: formValue.gender,
      specialization: formValue.specialization,
      experience: formValue.experience,
      city: formValue.city,
      state: formValue.state,
      pinCode: formValue.pinCode,
      fees: formValue.fees,
      user: "doctor",
    };
    console.log(doctor);

    try {
      const response = await UserService.createUser(doctor);
      if (response.data.code === "200") {
        alert("Doctor addess successfully!!");
        navigate(RoutesPath.SHOW_DOCTOR);
      } else {
        alert(response.data.payload);
      }
    } catch (error) {
      console.error("Error adding doctor:", error);
    }
  };

  //   const handleSignup = (event) => {
  //     try {
  //       event.preventDefault();
  //       // Basic client-side validation

  //       const validationErrors = {};
  //       if (!user.name.trim()) {
  //         validationErrors.username = "Name is required";
  //       }

  //       const newUser = {
  //         name: user.name,
  //         email: user.email,
  //         password: user.password,
  //       };

  //       console.log(newUser);
  //       let userDataList = [];
  //       const isUsers = localStorage.getItem("users");
  //       if (isUsers) {
  //         userDataList = JSON.parse(isUsers);
  //         console.log(userDataList);
  //       }

  //       userDataList.push(newUser);

  //       console.log("userDataList", userDataList);

  //       setErrors(validationErrors);

  //       if (Object.keys(validationErrors).length === 0) {
  //         localStorage.setItem("users", JSON.stringify(userDataList));
  //         navigate("/signin");
  //       } else {
  //         alert("Please enter correct details!!!");
  //       }
  //     } catch (error) {
  //       console.error("Error saving data to local storage:", error);
  //     }
  //   };
  return (
    <div>
      <div>
        <div className="form-content">
          <div className="form">
            <div className="form-head">Add Doctor</div>
            <div style={{ display: "flex" }}>
              <label className="label text">First Name :</label>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { maxWidth: "500px", width: "55ch", m: 1 },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="firstName"
                  name="fistName"
                  variant="outlined"
                  required
                  value={formValue.firstName}
                  size="small"
                  onChange={handleChange}
                />
                {/* {errors.name && <span>{errors.name}</span>}
                <error-output className="text-error"></error-output> */}
              </Box>
            </div>
            <div style={{ display: "flex" }}>
              <label className="label text">Last Name :</label>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { maxWidth: "500px", width: "55ch", m: 1 },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="lastName"
                  name="lastName"
                  variant="outlined"
                  required
                  value={formValue.lastName}
                  size="small"
                  onChange={handleChange}
                />
                {/* {errors.name && <span>{errors.name}</span>}
                <error-output className="text-error"></error-output> */}
              </Box>
            </div>
            <div style={{ display: "flex" }}>
              <label className="label text">Email :</label>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { maxWidth: "500px", width: "55ch", m: 1 },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="email"
                  name="email"
                  variant="outlined"
                  required
                  value={formValue.email}
                  size="small"
                  onChange={handleChange}
                />
                <error-output className="text-error"></error-output>
              </Box>
            </div>
            <div style={{ display: "flex" }}>
              <label className="label text">Password :</label>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { maxWidth: "500px", width: "55ch", m: 1 },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="password"
                  name="password"
                  variant="outlined"
                  required
                  //   type="password"
                  value={formValue.password}
                  size="small"
                  onChange={handleChange}
                />
                <error-output className="text-error"></error-output>
              </Box>
            </div>
            {/* ============================= Gender & age ================================== */}
            <div style={{ display: "flex" }}>
              <div style={{ display: "flex" }}>
                <label className="label text">Gender :</label>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": {
                      maxWidth: "200px",
                      width: "20ch",
                      m: 1,
                    },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="gender"
                    name="gender"
                    variant="outlined"
                    required
                    value={formValue.gender}
                    size="small"
                    onChange={handleChange}
                  />
                  <error-output className="text-error"></error-output>
                </Box>
              </div>
              <div style={{ display: "flex" }}>
                <label className="label text">Age :</label>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": {
                      maxWidth: "200px",
                      width: "15ch",
                      mt: 1,
                    },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="age"
                    name="age"
                    variant="outlined"
                    required
                    value={formValue.age}
                    size="small"
                    onChange={handleChange}
                  />
                  <error-output className="text-error"></error-output>
                </Box>
              </div>
            </div>
            {/* ============================= Specialization & Experience ================================== */}
            <div style={{ display: "flex" }}>
              <div style={{ display: "flex" }}>
                <label className="label text">Specialization :</label>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": {
                      maxWidth: "200px",
                      width: "20ch",
                      m: 1,
                    },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="specialization"
                    name="specialization"
                    variant="outlined"
                    required
                    value={formValue.specialization}
                    size="small"
                    onChange={handleChange}
                  />
                  <error-output className="text-error"></error-output>
                </Box>
              </div>
              <div style={{ display: "flex" }}>
                <label className="label text">Experience :</label>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": {
                      maxWidth: "200px",
                      width: "15ch",
                      mt: 1,
                    },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="experience"
                    name="experience"
                    variant="outlined"
                    required
                    value={formValue.experience}
                    size="small"
                    onChange={handleChange}
                  />
                  <error-output className="text-error"></error-output>
                </Box>
              </div>
            </div>
            {/* ============================= Specialization & Experience ================================== */}
            {/* ============================= City & State ================================== */}
            <div style={{ display: "flex" }}>
              <div style={{ display: "flex" }}>
                <label className="label text">City :</label>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": {
                      maxWidth: "200px",
                      width: "20ch",
                      m: 1,
                    },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="city"
                    name="city"
                    variant="outlined"
                    required
                    value={formValue.city}
                    size="small"
                    onChange={handleChange}
                  />
                  <error-output className="text-error"></error-output>
                </Box>
              </div>
              <div style={{ display: "flex" }}>
                <label className="label text">State :</label>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": {
                      maxWidth: "200px",
                      width: "15ch",
                      mt: 1,
                    },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="state"
                    name="state"
                    variant="outlined"
                    required
                    value={formValue.state}
                    size="small"
                    onChange={handleChange}
                  />
                  <error-output className="text-error"></error-output>
                </Box>
              </div>
            </div>
            {/* ============================= City & State ================================== */}
            {/* ============================= Pincode & Fees ================================== */}
            <div style={{ display: "flex" }}>
              <div style={{ display: "flex" }}>
                <label className="label text">Pin code :</label>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": {
                      maxWidth: "200px",
                      width: "20ch",
                      m: 1,
                    },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="pinCode"
                    name="pinCode"
                    variant="outlined"
                    required
                    value={formValue.pinCode}
                    size="small"
                    onChange={handleChange}
                  />
                  <error-output className="text-error"></error-output>
                </Box>
              </div>
              <div style={{ display: "flex" }}>
                <label className="label text">Fees :</label>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": {
                      maxWidth: "200px",
                      width: "15ch",
                      mt: 1,
                    },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="fees"
                    name="fees"
                    variant="outlined"
                    required
                    value={formValue.fees}
                    size="small"
                    onChange={handleChange}
                  />
                  <error-output className="text-error"></error-output>
                </Box>
              </div>
            </div>
            {/* ============================= Pincode & Fees ================================== */}
            
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                paddingTop: "10px",
              }}
            >
              <Button variant="contained" size="large" onClick={handleSubmit}>
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateDoctor;
