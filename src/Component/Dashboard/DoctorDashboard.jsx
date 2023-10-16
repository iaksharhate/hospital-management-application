import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { useLocation, useNavigate } from "react-router-dom";
import ShowAppointments from "./ShowAppointments";
import { RoutesPath } from "../helper";

const DoctorSDashboard = () => {
  const elevation = 4;
  const PaperEnum = {
    BookAppointment: "Book Appointment",
    ShowAppointment: "Show Appointment",
    FindDoctor: "Find A Doctor",
    Insurance: "Insurance",
    About: "About",
  };
  const location = useLocation();

  const navigate = useNavigate();

  return (
    <div style={{ marginTop: "20px" }}>
      
      {location.pathname === RoutesPath.DASHBOARD && (
        <div style={{display:"flex", justifyContent:"start"}}>
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
            <Paper
              onClick={() => navigate(RoutesPath.SHOW_APPOINTMENT)}
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
          </Box>
        </div>
      )}

      <div>
        {location.pathname === RoutesPath.SHOW_APPOINTMENT && (
          <ShowAppointments />
        )}
      </div>
    </div>
  );

  
};

const DoctorDashboard = () => {
  return (
    <div>
      <DoctorDashboard />
    </div>
  );
};

export default DoctorSDashboard;
