import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import BookAppointment from "../Appointment/BookAppointment";
import ShowAppointments from "./ShowAppointments";
import { RoutesPath } from "../helper";
import Insurance from "../Insurance/Insurance";
import About from "../About/About";

const PatientsDashboard = () => {
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
            <Paper
              onClick={() => navigate(RoutesPath.BOOK_APPOINTMENT)}
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
            <Paper
              onClick={() => navigate(RoutesPath.FIND_DOCTOR)}
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
            <Paper
              onClick={() => navigate(RoutesPath.INSURANCE)}
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
            <Paper
              onClick={() => navigate(RoutesPath.ABOUT)}
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

          <div
            style={{
              width: "auto",
              height: "auto",
              backgroundColor: "#EBFBFF",
              display: "flex",
              padding: "1%",
            }}
          >
            <div>
              <h2>Why Choose Ayushman Bharat Healthcare?</h2>
              <p>
                Established by Dr Prathap C Reddy in 1983, Apollo Healthcare has
                a robust presence across <br />
                the healthcare ecosystem. From routine wellness & preventive
                health care to innovative life- <br />
                saving treatments and diagnostic services, Apollo Hospitals has
                touched more than 200 <br />
                million lives from over 120 countries
              </p>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginRight: "2%",
                }}
              >
                <div className="left-side">
                  <div style={{ display: "flex" }}>
                    <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v2/images/healinghands.svg" />
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <h4
                        style={{
                          color: "#007C9D",
                          fontWeight: "900",
                          fontSize: "29px",
                        }}
                      >
                        <span>73</span>+
                      </h4>
                      <div style={{ marginTop: "0" }}>
                        Largest private healthcare <br /> network of Hospitals
                      </div>
                    </div>
                  </div>

                  <div style={{ display: "flex" }}>
                    <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v2/images/pharmacies.svg" />
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <h4
                        style={{
                          color: "#007C9D",
                          fontWeight: "900",
                          fontSize: "29px",
                        }}
                      >
                        <span>400</span>+
                      </h4>
                      <div style={{ marginTop: "0" }}>
                        Largest private healthcare <br /> network of Hospitals
                      </div>
                    </div>
                  </div>

                  <div style={{ display: "flex" }}>
                    <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v2/images/pharmacies.svg" />
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <h4
                        style={{
                          color: "#007C9D",
                          fontWeight: "900",
                          fontSize: "29px",
                        }}
                      >
                        <span>1100</span>+
                      </h4>
                      <div style={{ marginTop: "0" }}>
                        Largest private healthcare <br /> network of Hospitals
                      </div>
                    </div>
                  </div>
                </div>

                <div className="left-side">
                  <div style={{ display: "flex" }}>
                    <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v2/images/adavanced.svg" />
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <h4
                        style={{
                          color: "#007C9D",
                          fontWeight: "900",
                          fontSize: "29px",
                        }}
                      >
                        <span>5000</span>+
                      </h4>
                      <div style={{ marginTop: "0" }}>
                        Largest private healthcare <br /> network of Hospitals
                      </div>
                    </div>
                  </div>

                  <div style={{ display: "flex" }}>
                    <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v2/images/pharmacies.svg" />
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <h4
                        style={{
                          color: "#007C9D",
                          fontWeight: "900",
                          fontSize: "29px",
                        }}
                      >
                        <span>1000</span>+
                      </h4>
                      <div style={{ marginTop: "0" }}>
                        Largest private healthcare <br /> network of Hospitals
                      </div>
                    </div>
                  </div>

                  <div style={{ display: "flex" }}>
                    <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v2/images/pharmacies.svg" />
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <h4
                        style={{
                          color: "#007C9D",
                          fontWeight: "900",
                          fontSize: "29px",
                        }}
                      >
                        <span>400</span>+
                      </h4>
                      <div style={{ marginTop: "0" }}>
                        Largest private healthcare <br /> network of Hospitals
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <img
              style={{ width: "40%" }}
              src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/whychoseapollo_ah.webp"
              alt=""
            />
          </div>
        </div>
      )}

      <div>
        {location.pathname === RoutesPath.BOOK_APPOINTMENT && (
          <BookAppointment />
        )}
        {location.pathname === RoutesPath.SHOW_APPOINTMENT && (
          <ShowAppointments />
        )}
        {location.pathname === RoutesPath.INSURANCE && <Insurance />}
        {location.pathname === RoutesPath.ABOUT && <About />}
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
  );
};

export default PatientDashboard;
