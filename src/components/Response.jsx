import React, {useEffect} from "react";
import { Box, Typography } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";


const Response = () => {

  // const getFYData = async () => {
    
  //   const res = await axios.post(
  //     `${import.meta.env.VITE_BACKEND_URL}/fetch-and-process-data-for-range`,
  //     {
  //       handle: localStorage.getItem("handleID")
  //     }
  //   );
  //   console.log(res.data)
  // }

  useEffect(async () => {
    const getFYData = async () => {
    
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/fetch-and-process-data-for-range`,
        {
          handle: localStorage.getItem("handleID")
        }
      );
      console.log(res.data)
    }
    await getFYData()
  }, [])
  


  return (
    <>
      <Header />
      <Box
        className="d-flex align-items-center justify-content-center"
        style={{ height: "100vh", backgroundColor: "#f8f9fa" }}
      >
        <Box
          sx={{
            p: 3,
            maxWidth: 600,
            backgroundColor: "#fff",
            borderRadius: 2,
            boxShadow: "0px 4px 12px rgba(36, 180, 179, 0.8)",
            textAlign: "center",
          }}
        >
          <Typography variant="h4" style={{ color: "#24b4b3" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis
            nunc vel orci vehicula pretium a non elit. Vestibulum ante ipsum
            primis in faucibus orci luctus et ultrices posuere cubilia Curae;
            Aliquam erat volutpat. Curabitur vitae turpis a risus gravida
            tempus.
          </Typography>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Response;
