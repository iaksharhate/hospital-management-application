import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Appointment from "../Appointment/Appointment";
import { RoutesPath } from "../helper";

const PatientsDashboard = () => {
  const elevation = 4;
  const PaperEnum = {
    BookAppointment: 'Book Appointment',
    ShowAppointment: 'Show Appointment',
    FindDoctor: 'Find A Doctor',
    Insurance: 'Insurance',
    About: 'About'
  };

  const location = useLocation();

  const navigate = useNavigate();
  return (
    <div style={{ marginTop: "20px" }}>

      { location.pathname == RoutesPath.DASHBOARD && (
        <div>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              "& > :not(style)": {
                m: 1,
                minWidth: 200,
                height: 128,
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                cursor: "pointer",
                transition:
                  "background-color 0.2s, transform 0.2s, box-shadow 0.2s",
              },
            }}
          >
            <Paper onClick={() => navigate(RoutesPath.BOOK_APPOINTMENT)}
              elevation={elevation}
              sx={{
                "&:hover": {
                  backgroundColor: "#e0e0e0",
                  transform: "translateY(-5px)",
                  boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <img
                src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v2/images/ips_onlineconsultation.svg"
                alt=""
              />
              <span>{PaperEnum.BookAppointment}</span>
            </Paper>
            <Paper onClick={() => navigate(RoutesPath.SHOW_APPOINTMENT)}
              elevation={elevation}
              sx={{
                "&:hover": {
                  backgroundColor: "#e0e0e0",
                  transform: "translateY(-5px)",
                  boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <img
                src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v2/images/ips_planyourtrip.svg"
                alt=""
              />
              <span>{PaperEnum.ShowAppointment}</span>{" "}
            </Paper>
            <Paper onClick={() => navigate(RoutesPath.FIND_DOCTOR)}
              elevation={elevation}
              sx={{
                "&:hover": {
                  backgroundColor: "#e0e0e0",
                  transform: "translateY(-5px)",
                  boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <img
                src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v2/images/ips_doctor.svg"
                alt=""
              />
              <span>{PaperEnum.FindDoctor}</span>
            </Paper>
            <Paper onClick={() => navigate(RoutesPath.INSURANCE)}
              elevation={elevation}
              sx={{
                "&:hover": {
                  backgroundColor: "#e0e0e0",
                  transform: "translateY(-5px)",
                  boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <img
                src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v2/images/ips_Apollo%20Insurance.svg"
                alt=""
              />
              <span>{PaperEnum.Insurance}</span>
            </Paper>
            <Paper onClick={() => navigate(RoutesPath.ABOUT)}
              elevation={elevation}
              sx={{
                "&:hover": {
                  backgroundColor: "#e0e0e0",
                  transform: "translateY(-5px)",
                  boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <img
                src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v2/images/ips_hsptl.svg"
                alt=""
              />
              <span>{PaperEnum.About}</span>
            </Paper>
          </Box>
        </div>)
      }

      <div>
        {location.pathname === RoutesPath.BOOK_APPOINTMENT && <Appointment />}
      </div>




      {/* <div>
        <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
          <Tabs value={value} onChange={handleChange} centered>
            <Tab label="Specialties" />
            <Tab label="Procedures" />
            <Tab label="ProHealth" />
          </Tabs>
        </Box>
      </div> */}
    </div>
  );
};

const PatientDashboard = () => {
  return (
    <div>
      {/* <p>lol</p> */}
      <PatientsDashboard />
    </div>
  )
}


export default PatientDashboard;
