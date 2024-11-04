import React from "react";
import { Box, Typography } from "@mui/material";
import zunoLogo from "../assets/zunoLogo.svg";

const Header = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#fff",
        padding: { xs: 1, sm: 2 }, // Responsive padding
        color: "#24b4b3",
        display: "flex",
        alignItems: "center",
        boxShadow: "0px 4px 10px rgba(36, 180, 179, 0.5)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* Logo on the left */}
      <img
        src={zunoLogo}
        alt="Zuno Logo"
        style={{
          height: "40px", // Base logo height
          width: "auto", // Maintain aspect ratio
          marginRight: "7px",
          // Responsive logo size
          "@media (min-width:600px)": { height: "50px" },
          "@media (min-width:900px)": { height: "60px" },
        }}
      />
      {/* Centered Text */}
      <Typography
        variant="h5"
        sx={{
          flexGrow: 1,
          textAlign: "left",
          fontWeight: "bold",
          marginTop: "10px",
          fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.8rem" }, // Responsive font size
        }}
      >
        General Insurance
      </Typography>
    </Box>
  );
};

export default Header;
