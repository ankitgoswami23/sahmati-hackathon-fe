import React, { useState } from "react";

import { TextField, Button, Box } from "@mui/material";
// import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
  // const navigate = useNavigate();
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");

  const handleClick = async () => {
    if (!mobile) {
      setError("Enter mobile number");
      return;
    }

    const {data} = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/initiate-consent`,
      { phone: mobile }
    );

    console.log(data.data.consents[0].handle)
    localStorage.setItem("handleID", data.data.consents[0].handle);

    console.log(data.data.redirect_url)

    if (data.data.redirect_url) {
      window.location.href = data.data.redirect_url;
    }
    // navigate("https://www.google.com");
    // window.location.href = 'https://www.google.com'
  };

  const handleChange = (e) => {
    setMobile(e.target.value);
  };

  return (
    <>
      {" "}
      <Header />
      <Box
        className="container d-flex flex-column align-items-center"
        sx={{
          mt: 5,
          p: 3,
          maxWidth: 500,
          backgroundColor: "#fff",
          borderRadius: 2,
          boxShadow: "0px 4px 12px rgba(36, 180, 179, 0.8)",
        }}
      >
        <TextField
          label="Mobile Number"
          type="tel"
          value={mobile}
          onChange={handleChange}
          sx={{
            mb: 2,
            width: "100%",
            boxShadow: "0px 4px 8px rgba(36, 180, 179, 0.6)",
          }}
          error={error}
          helperText={error}
        />
        <Button
          variant="contained"
          onClick={handleClick}
          sx={{
            backgroundColor: "#24b4b3",
            color: "#fff",
            mt: 2,
            boxShadow: "0px 4px 12px rgba(36, 180, 179, 0.8)",
            width: "100%",
          }}
        >
          Submit
        </Button>
      </Box>
      <Footer />
    </>
  );
};

export default Home;
