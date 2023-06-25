import React from "react";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import "./about.css";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/devani_aman";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Typography>Aman Devani</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>This is a sample wesbite made by @amandevani.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
