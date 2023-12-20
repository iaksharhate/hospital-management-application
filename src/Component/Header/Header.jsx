import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout";
import "./Header.css";
import {useNavigate} from "react-router-dom";
import { RoutesPath } from "../helper";

const Header = () => {

  const handleLogout = (event) => {
    event.preventDefault()
    localStorage.removeItem("userData")
    navigate(RoutesPath.SIGNIN)
  }

  const navigate = useNavigate();

  return (
    <AppBar position="fixed" className="appBar">
      <Toolbar>
        <span className="headerText">Aayushamn Bharat</span>
        <div style={{ flexGrow: 1 }} />
        <div className="additionalContent"></div>
        <div className="additionalContent">
          <p>Hospital name : Ayushman Bharat</p>
          <p>Address: Khanda colony new panvel</p>
        </div>
        <div>
          <Button
            className="logout"
            variant="contained"
            startIcon={<LogoutIcon />}
            onClick={handleLogout}
          >
            Log Out
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
