import React, { useState } from "react";
import {
  Button,
  Card,
  Input,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import { IMaskInput } from "react-imask";
import "./SignUp.css";
import styled from "@emotion/styled";
import UserService from "../Service/UserService";
import { RoutesPath } from "../helper";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";

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

  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };

  const handleChangeState = (event) => {
    setState(event.target.value);
  };

  const handleChangeName = (event) => {
    const {
      target: { value },
    } = event;
    setCity(
      // On autofill, we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const [values, setValues] = React.useState({
    textmask: "",
    numberformat: "1320",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

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

  const names = [
    "Khanda Colony",
    "New Panvel",
    "Kharghar",
    "Kalamboli",
    "Kamothe",
    "Belapur",
    "Taloja",
    "Roadpali",
    "SeaWoods",
    "Vashi",
  ];

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

  function changeCityValues(event) {
    const newCityValue = event.target.value;
    setFormValue((prevState) => ({
      ...prevState,
      city: newCityValue,
    }));
  }

  function changeStateValues(event) {
    const newStateValue = event.target.value;
    setFormValue((prevState) => ({
      ...prevState,
      state: newStateValue,
    }));
  }

  const navigate = useNavigate();

  const handleSignup = async (event) => {
    event.preventDefault();
    

    try {
      let user = {
        user:'patient',
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
      console.log(user);

      const response = await UserService.createUser(user);
      
      if (response.data.code === "200") {
        alert("User addess successfully!!")
        navigate(RoutesPath.SIGNIN);
      } else {
        alert(response.data.payload);
      }
    } catch (error) {
      console.error("Error saving data to local storage:", error);
    }
  };

  const changeValues = (event) => {
    setFormValue({ ...formValue, [event.target.id]: event.target.value });
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

  // -------------------------------age-------------------------------
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
              />
              <TextField
                sx={{ width: "48%" }}
                id="lastName"
                label="Last Name"
                variant="outlined"
                value={formValue.lastName}
                onChange={changeValues}
              />
            </div>

            <TextField
              sx={{ margin: "1% 0%", width: "100%" }}
              label="Email"
              id="email"
              value={formValue.email}
              onChange={changeValues}
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
                value={formValue.password}
                onChange={changeValues}
              />
              <TextField
                sx={{ width: "48%" }}
                id="outlined-basic"
                label="Confirm Password"
                variant="outlined"
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
                  label="Gender"
                  onChange={changeGenderValues}
                  sx={{ width: "20vw" }}
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
                  sx={{ width: "100%" }}
                />
              </div>
            </div>
            {/* -------------------------------city-------------------------------------- */}

            <InputLabel id="demo-multiple-name-label">Select City</InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="city"
              value={formValue.city}
              onChange={changeCityValues}
              // input={<OutlinedInput label="Name" />}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, city, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>

            {/* -----------------------state------------------------------------- */}
            <InputLabel id="demo-select-small-label">State</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="state"
              value={formValue.state}
              label="State"
              onChange={changeStateValues}
            >
              <MenuItem value="Male">Maharashtra</MenuItem>
              <MenuItem value="Female">Goa</MenuItem>
              <MenuItem value="Others">Utter Pradesh</MenuItem>
              <MenuItem value="Others">Madhya Pradesh</MenuItem>
              <MenuItem value="Others">Assam</MenuItem>
            </Select>
            {/* --------------------------------------pincode------------------------------------ */}
            <div
              class="flex-container"
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "1% 0%",
              }}
            >
              <TextField id="pinCode" label={"Pin Code"} variant="outlined"  onChange={changeValues}/>
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
