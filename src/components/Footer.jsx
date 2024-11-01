import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#24b4b3",
        padding: 2,
        color: "#fff",
        textAlign: "center",
        position: "fixed",
        bottom: 0,
        left: 0,
      }}
    >
      <Typography variant="body2">© 2024 Zuno General Insurance</Typography>
    </Box>
  );
};

export default Footer;
