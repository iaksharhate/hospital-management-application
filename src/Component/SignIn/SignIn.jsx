import React from 'react'
import { Link } from 'react-router-dom'
import Grid from '@mui/material/Grid'
import { Button, TextField } from "@mui/material/";


const SignIn = () => {
  return (
    <Grid container justifyContent="center" alignItems="center" paddingTop="5%">
    <Grid
        item
        lg={4}
        sx={{
            boxShadow:10,
            backgroundColor:"#e1dfdf",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            border: "1px solid black",
            borderRadius: 2,
            gap: 3,
            height: 500,
            padding: 2,
            "@media (max-width: 600px)": {
                border: "none",
                boxShadow: "none",
            },

        }}
    >

      
        <div
        
            style={{
                display: "flex",
                gap: "3px",
                fontSize: 30,
                alignItems: "center",
                fontFamily: "fantasy",
                fontWeight: "20px",
            }}
        >
       
            <span style={{ color: "#E95824"}}>Ayushman &nbsp;</span>
            <span style={{ color: "white"}}>Bh<span style={{ color: "blue" }}>ar</span><span >at</span> </span>
            <span style={{ color: "#006632" }}> &nbsp; Hospital</span>
       

            
        </div>
        <h3>Login</h3>
        <p>Use your ABH account</p>
        
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField
                    id="email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    // value={data.email}
                    // onChange={handleChange}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    id="password"
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    // value={data.password}
                    // onChange={handleChange}
                />
            </Grid>
        </Grid>

        <Grid container justifyContent="space-between">
            <Grid item>
                <p style={{ color: "blue" }}>Forgot password?</p>
                <p style={{ color: "blue" }}>
                    <Link to="/signup">Create Account</Link>
                </p>
            </Grid>

            <Grid item>
                <Button
                    variant="contained"
                    color="primary"
                    style={{ width: 90 }}
                    // onClick={handleSubmit}
                >
                    Login
                </Button>
            </Grid>
        </Grid>
    </Grid>
</Grid>

  )
}

export default SignIn