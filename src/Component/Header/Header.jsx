import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import "./Header.css";

const Header = () => {
  return (
    <AppBar position="fixed" className="appBar">
      <Toolbar>
        <span className="headerText">Aayushamn Bharat</span>
        <div style={{ flexGrow: 1 }} />
        <div className="additionalContent">
         
        </div>
        <div className="additionalContent">
          <p>Hospital name : MGM</p>
          <p>Address: Khanda colony new panvel</p>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
