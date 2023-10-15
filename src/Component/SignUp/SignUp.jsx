import React, { useState } from 'react';
import {
    Button,
  Card,
  Input,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import { IMaskInput } from 'react-imask';
import './SignUp.css';
import styled from '@emotion/styled';

import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';

const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
      <IMaskInput
        {...other}
        mask="000"
        definitions={{
          '#': /[1-9]/,
        }}
        inputRef={ref}
        onAccept={(value) => onChange({ target: { name: props.name, value } })}
        overwrite
      />
    );
  });

const SignUp = () => {
  const [gender, setGender] = useState('');
  const [state, setState] = useState('');

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
      typeof value === 'string' ? value.split(',') : value
    );
  };

  const [values, setValues] = React.useState({
    textmask: '',
    numberformat: '1320',
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
    'Khanda Colony',
    'New Panvel',
    'Kharghar',
    'Kalamboli',
    'Kamothe',
    'Belapur',
    'Taloja',
    'Roadpali',
    'SeaWoods',
    'Vashi',
  ];

  function getStyles(name, city, theme) {
    return {
      fontWeight:
        city.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

// ----------------------phtot Upload---------------------------

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  const theme = useTheme();

// -------------------------------age-------------------------------
  
  return (
    <div className="body">
      <div className="xyz">
        <Paper elevation={12} sx={{ width: 'auto', height: 'auto',display:"flex"}}>
         
 <div className="leftside">
            <div class="under-600-title" style={{ display: 'flex', fontSize: "2em", fontWeight: 'bold' }}>
              <span  className="moving-text" >Ayushman &nbsp;</span>
              <span  className="moving-text" >Bharat</span>
              <span  className="moving-text" > &nbsp; Hospital</span>
            </div>

              <div class="F-Lname" style={{display:"flex", margin: '1% 0'}} >
                <TextField   sx={{ width: '48%',paddingRight: '4%' }} id="" label={'First Name'} variant="outlined" />
                <TextField   sx={{ width: '48%'}} id="outlined-basic" label="Last Name" variant="outlined" />
              </div>

             
              <TextField sx={{ margin: '1% 0%',width:"100%"}}  label="Email" id="fullWidth" />

              <div class='password-fields' style={{display:"flex", margin: '1% 0'}}>
                <TextField sx={{ width: '48%' ,paddingRight:"4%" }} id="" label={'Password'} variant="outlined" />
                <TextField  sx={{ width: '48%' }} id="outlined-basic" label="Confirm Password" variant="outlined" />
              </div>

{/* ---------------------------------------gender------------------------------------ */}


<div  class="parent-flex" style={{display:"flex", margin:"1%", justifyContent: "space-between" }}>
    <div  class="child-div" >
              <InputLabel 
                  sx={{   paddingRight: "8px" }}
              >Gender</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-simple-select"
                value={gender}
                label="Gender"
                onChange={handleChangeGender}
                sx={{ width: "20vw" }}
              >
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Others">Others</MenuItem>
              </Select>
              </div>
{/* ------------------------------------age-------------------------------------- */}

<div  class="child-div"  style={{ display: "flex" }}>
              <InputLabel htmlFor="formatted-text-mask-input"
                sx={{ width: "50%", textAlign: "right" }}
              >Age</InputLabel>
        <Input
          value={values.textmask}
          onChange={handleChange}
          name="textmask"
          id="formatted-text-mask-input"
          inputComponent={TextMaskCustom}
          sx={{ width: "100%" }}
         
        />
</div>
</div>
{/* -------------------------------city-------------------------------------- */}

<InputLabel id="demo-multiple-name-label">Select City</InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                value={city}
                onChange={handleChangeName}
                input={<OutlinedInput label="Name" />}
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
                id="demo-simple-select"
                value={state}
                label="State"
                onChange={handleChangeState}
              >
                <MenuItem value="Male">Maharashtra</MenuItem>
                <MenuItem value="Female">Goa</MenuItem>
                <MenuItem value="Others">Utter Pradesh</MenuItem>
                <MenuItem value="Others">Madhya Pradesh</MenuItem>
                <MenuItem value="Others">Assam</MenuItem>
              </Select>
{/* --------------------------------------pincode------------------------------------ */}
<div  class="flex-container" style={{display:"flex",justifyContent:"space-between",margin:"1% 0%"}}>
    <TextField id="pinCode" label={'Pin Code'} variant="outlined" />
<Button component="label" variant="grey" startIcon={<PhotoLibraryIcon />}  >
  Upload Profile
  <VisuallyHiddenInput type="file" />
</Button>
</div>
<Button component="label" variant="contained" startIcon={<CloudDownloadIcon />} className="moving-button" >
  Submit
  <VisuallyHiddenInput type="file" />
</Button>


            </div>


    {/* ----------------------------------right-side---------------------------------------         */}

    <div class ="right-side">
<img  src ="https://seeklogo.com/images/A/ayushman-bharat-logo-0039E4F725-seeklogo.com.png" alt="" />

    </div>
         
        </Paper>
      </div>
      
    </div>
  );
};

export default SignUp;
