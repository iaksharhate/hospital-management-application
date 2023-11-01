import styled from "@emotion/styled";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import {
  Button,
  Input,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useState } from "react";
import { IMaskInput } from "react-imask";
import { useNavigate } from "react-router-dom";
import UserService from "../Service/UserService";
import { RoutesPath } from "../helper";
import "./SignUp.css";

const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="000"
      definitions={{
        "#": /[1-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

const SignUp = () => {
  const [gender, setGender] = useState("");
  const [state, setState] = useState("");

  const [city, setCity] = useState([]);

  const [values, setValues] = React.useState({
    textmask: "",
    numberformat: "1320",
  });

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };



  function getStyles(name, city, theme) {
    return {
      fontWeight:
        city.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  // -------------------------------------------------------------

  const [formValue, setFormValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    age: "",
    city: "",
    state: "",
    pinCode: "",
  });

  function changeGenderValues(event) {
    const newGenderValue = event.target.value;
    setFormValue((prevState) => ({
      ...prevState,
      gender: newGenderValue,
    }));
  }


  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  const changeValues = (event) => {
    const { id, value } = event.target;
    setFormValue({ ...formValue, [event.target.id]: event.target.value });
    const newErrors = { ...errors };

    if (id == "firstName") {
      if (!value) {
        newErrors.firstName = "First name is required";
      } else if (!/^[A-Z]{1}[a-zA-Z\\s]{2,}$/.test(value)) {
        newErrors.firstName = "First name is invalid";
      } else {
        newErrors.firstName = "";
      }
    }

    if (id == "lastName") {
      if (!value) {
        newErrors.lastName = "Last name is required";
      } else if (!/^[A-Z]{1}[a-zA-Z\\s]{2,}$/.test(value)) {
        newErrors.lastName = "Last name is invalid";
      } else {
        newErrors.lastName = "";
      }
    }

    if (id == "email") {
      if (!value) {
        newErrors.email = "Email is required";
      } else if (!/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/.test(value)) {
        newErrors.email = "Email is invalid";
      } else {
        newErrors.email = "";
      }
    }

    if (id == "password") {
      if (!value) {
        newErrors.password = "Password is required";
      } else if (
        !/^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$&])[A-Za-z0-9@#$&]{8,}$/.test(value)
      ) {
        newErrors.password = "Password is invalid";
      } else {
        newErrors.password = "";
      }
    }
    if (id == "confirmPassword") {
      if (!value) {
        newErrors.confirmPassword = "Password is required";
      } else if (
        !/^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$&])[A-Za-z0-9@#$&]{8,}$/.test(value) || value != formValue.password
      ) {
        newErrors.confirmPassword = "Password is not matching";
      } else {
        newErrors.confirmPassword = "";
      }
    }

    if (id == "gender") {
      if (!value) {
        newErrors.gender = "Gender is required";
      } else {
        newErrors.gender = "";
      }
    }

    if (id == "age") {
      if (!value) {
        newErrors.age = "Age is required";
      } else if (!/^(?:1[0-4]\d|150|[1-9]\d|\d)$/.test(value)) {
        newErrors.age = "Age is invalid";
      } else {
        newErrors.age = "";
      }
    }

    if (id == "city") {
      if (!value) {
        newErrors.city = "City is required";
      } else {
        newErrors.city = "";
      }
    }

    if (id == "state") {
      if (!value) {
        newErrors.state = "State is required";
      } else {
        newErrors.state = "";
      }
    }

    if (id == "pinCode") {
      if (!value) {
        newErrors.pinCode = "Pin Code is required";
      } else if (!/^[1-9][0-9]{5}$/.test(value)) {
        newErrors.pinCode = "Pin Code is invalid";
      } else {
        newErrors.pinCode = "";
      }
    }

    setErrors(newErrors);

  };

  const handleSignup = async (event) => {
    event.preventDefault();

    let user = {
      user: 'patient',
      firstName: formValue.firstName,
      lastName: formValue.lastName,
      email: formValue.email,
      password: formValue.password,
      gender: formValue.gender,
      age: formValue.age,
      city: formValue.city,
      state: formValue.state,
      pinCode: formValue.pinCode,
    };


    const validationErrors = {};
    if (!user.firstName.trim()) {
      validationErrors.firstName = "First name is required";
    }

    if (!user.lastName.trim()) {
      validationErrors.lastName = "Last name is required";
    }

    if (!user.email.trim()) {
      validationErrors.email = "Email is required";
    }

    if (!user.password.trim()) {
      validationErrors.password = "Password is required";
    }

    if (!user.gender.trim()) {
      validationErrors.gender = "Gender is required";
    }

    if (!user.age.trim()) {
      validationErrors.age = "Age is required";
    }

    if (!user.city.trim()) {
      validationErrors.city = "City is required";
    }

    if (!user.state.trim()) {
      validationErrors.state = "State is required";
    }

    if (!user.pinCode.trim()) {
      validationErrors.pinCode = "Pin Code is required";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length == 0) {
      console.log(user);
      try {
        const response = await UserService.createUser(user);

        if (response.data.code === "200") {
          alert("User addess successfully!!")
          navigate(RoutesPath.SIGNIN);
        } else {
          alert(response.data.payload);
        }
      } catch (error) {
        console.error("Error creating user:", error);
      }
    } else {
      alert('Please enter correct details!!!');
    }
  };

  // ----------------------phtot Upload---------------------------

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  const theme = useTheme();


  return (
    <div className="body">
      <div className="xyz">
        <Paper
          elevation={12}
          sx={{ width: "auto", height: "auto", display: "flex" }}
        >
          <div className="leftside">
            <div
              class="under-600-title"
              style={{ display: "flex", fontSize: "2em", fontWeight: "bold" }}
            >
              <span className="moving-text">Ayushman &nbsp;</span>
              <span className="moving-text">Bharat</span>
              <span className="moving-text"> &nbsp; Hospital</span>
            </div>

            <div class="F-Lname" style={{ display: "flex", margin: "1% 0" }}>
              <TextField
                sx={{ width: "48%", paddingRight: "4%" }}
                id="firstName"
                label={"First Name"}
                variant="outlined"
                value={formValue.firstName}
                onChange={changeValues}
                helperText={errors.firstName ? errors.firstName : ""} // Display the validation error message
                error={Boolean(errors.firstName)}
              />
              <TextField
                sx={{ width: "48%" }}
                id="lastName"
                label="Last Name"
                variant="outlined"
                value={formValue.lastName}
                onChange={changeValues}
                helperText={errors.lastName ? errors.lastName : ""} // Display the validation error message
                error={Boolean(errors.lastName)}
              />
            </div>

            <TextField
              sx={{ margin: "1% 0%", width: "100%" }}
              label="Email"
              id="email"
              value={formValue.email}
              onChange={changeValues}
              helperText={errors.email ? errors.email : ""} // Display the validation error message
              error={Boolean(errors.email)}
            />

            <div
              class="password-fields"
              style={{ display: "flex", margin: "1% 0" }}
            >
              <TextField
                sx={{ width: "48%", paddingRight: "4%" }}
                id="password"
                label={"Password"}
                variant="outlined"
                type="password"
                value={formValue.password}
                onChange={changeValues}
                helperText={errors.password ? errors.password : ""} // Display the validation error message
                error={Boolean(errors.password)}
              />
              <TextField
                sx={{ width: "48%" }}
                id="confirmPassword"
                label="Confirm Password"
                variant="outlined"
                value={formValue.confirmPassword}
                onChange={changeValues}
                helperText={errors.confirmPassword ? errors.confirmPassword : ""} // Display the validation error message
                error={Boolean(errors.confirmPassword)}
              />
            </div>

            {/* ---------------------------------------gender------------------------------------ */}

            <div
              class="parent-flex"
              style={{
                display: "flex",
                margin: "1%",
                justifyContent: "space-between",
              }}
            >
              <div class="child-div">
                <InputLabel sx={{ paddingRight: "8px" }}>Gender</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="gender"
                  value={formValue.gender}
                  onChange={changeGenderValues}
                  sx={{ width: "20vw" }}
                  helperText={errors.gender ? errors.gender : ""} // Display the validation error message
                  error={Boolean(errors.gender)}
                >
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                  <MenuItem value="Others">Others</MenuItem>
                </Select>
              </div>
              {/* ------------------------------------age-------------------------------------- */}

              <div class="child-div" style={{ display: "flex" }}>
                <InputLabel
                  htmlFor="formatted-text-mask-input"
                  sx={{ width: "50%", textAlign: "right" }}
                >
                  Age
                </InputLabel>
                <Input
                  value={formValue.age}
                  onChange={changeValues}
                  name="Age"
                  id="age"
                  // inputComponent={TextMaskCustom}
                  helperText={errors.age ? errors.age : ""} // Display the validation error message
                  error={Boolean(errors.age)}
                  sx={{ width: "100%" }}
                />
              </div>
            </div>
            {/* -------------------------------city-------------------------------------- */}
            <InputLabel id="demo-multiple-name-label">Select City</InputLabel>
            <TextField
              labelId="demo-multiple-name-label"
              id="city"
              value={formValue.city}
              onChange={changeValues}
              helperText={errors.city ? errors.city : ""} // Display the validation error message
              error={Boolean(errors.city)}
            />

            {/* -----------------------state------------------------------------- */}
            <InputLabel id="demo-select-small-label">State</InputLabel>
            <TextField
              labelId="demo-select-small-label"
              id="state"
              value={formValue.state}
              onChange={changeValues}
              helperText={errors.state ? errors.state : ""} // Display the validation error message
              error={Boolean(errors.state)}
            >
            </TextField>
            {/* --------------------------------------pincode------------------------------------ */}
            <div
              class="flex-container"
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "1% 0%",
              }}
            >
              <TextField id="pinCode"
                label={"Pin Code"}
                variant="outlined"
                onChange={changeValues}
                helperText={errors.pinCode ? errors.pinCode : ""} // Display the validation error message
                error={Boolean(errors.pinCode)}
              />
              <Button
                component="label"
                variant="grey"
                startIcon={<PhotoLibraryIcon />}
              >
                Upload Profile
                <VisuallyHiddenInput type="file" />
              </Button>
            </div>
            <Button
              component="label"
              variant="contained"
              onClick={handleSignup}
              startIcon={<CloudDownloadIcon />}
              className="moving-button"
            >
              Submit
              {/* <VisuallyHiddenInput type="file" /> */}
            </Button>
          </div>

          {/* ----------------------------------right-side---------------------------------------         */}

          <div class="right-side">
            <img
              src="https://seeklogo.com/images/A/ayushman-bharat-logo-0039E4F725-seeklogo.com.png"
              alt=""
            />
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default SignUp;
