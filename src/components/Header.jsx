import React from "react";
import { Box, Typography } from "@mui/material";

const Header = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#24b4b3",
        padding: 2,
        color: "#fff",
        textAlign: "center",
        fontWeight: "bold",
      }}
    >
      <Typography variant="h5">Zuno General Insurance</Typography>
    </Box>
  );
};

export default Header;
