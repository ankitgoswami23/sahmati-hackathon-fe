import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#fff", // Set background color to white
        padding: { xs: 1, sm: 2 }, // Responsive padding
        color: "#24b4b3", // Set text color to aqua
        textAlign: "center",
        position: "fixed",
        bottom: 0,
        left: 0,
        boxShadow: "0px -4px 10px rgba(36, 180, 179, 0.5)", // Apply aqua box shadow
      }}
    >
      <Typography
        variant="body2"
        sx={{
          fontSize: { xs: "0.8rem", sm: "1rem" }, // Responsive font size
        }}
      >
        © 2024 Zuno General Insurance
      </Typography>
    </Box>
  );
};

export default Footer;
