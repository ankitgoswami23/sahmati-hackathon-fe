import React from "react";
import { Box, Typography } from "@mui/material";

import zunoLogo from "../assets/zunoLogo.svg";

const Header = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#fff", // Set background color to white
        padding: 2,
        color: "#24b4b3", // Set text color to match the previous aqua color
        display: "flex",
        alignItems: "center",
        boxShadow: "0px 4px 10px rgba(36, 180, 179, 0.5)", // Apply aqua box shadow
        position: "sticky", // Make the header sticky
        top: 0, // Position it at the top
        zIndex: 1000, // Ensure it stays above other content
      }}
    >
      {/* Logo on the left */}
      <img
        src={zunoLogo}
        alt="Zuno Logo"
        style={{ height: "50px", marginRight: "7px" }} // Reduce margin
      />
      {/* Centered Text */}
      <Typography
        variant="h5"
        sx={{
          flexGrow: 1,
          textAlign: "left",
          fontWeight: "bold",
          marginTop: "10px",
        }} // Align text to the left
      >
        General Insurance
      </Typography>
    </Box>
  );
};

export default Header;
