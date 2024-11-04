import React, { useEffect, useState } from "react";
import { Box, Typography, Tabs, Tab, CircularProgress } from "@mui/material";
import { Divider } from "@mui/material";

import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";

const ResponseRender = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const [data, setData] = useState(null);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const getFYData = async () => {
    setLoading(true);

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/fetch-and-process-data-for-range`,
        {
          handle: localStorage.getItem("handleID"),
        }
      );
      if (res.data.ok) {
        setData(JSON.parse(res.data.data.choices[0].message.content));
        console.log(
          "data",
          JSON.parse(res.data.data.choices[0].message.content)
        );
      }
      console.log(res.data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await getFYData();
    };
    fetchData();
  }, []);

  //   const renderData = (dataItem) => {
  //     if (Array.isArray(dataItem)) {
  //       return dataItem.map((item, index) => (
  //         <Box key={index} sx={{ marginBottom: 2 }}>
  //           {renderData(item)}
  //           {index < dataItem.length - 1 && (
  //             <Divider sx={{ backgroundColor: "black" }} />
  //           )}{" "}
  //           {/* Add divider between items */}
  //         </Box>
  //       ));
  //     } else if (typeof dataItem === "object" && dataItem !== null) {
  //       return Object.entries(dataItem).map(([key, value], index) => (
  //         <Box
  //           key={index}
  //           sx={{ marginBottom: 2, display: "flex", alignItems: "center" }}
  //         >
  //           <Typography variant="h6" sx={{ fontWeight: "bold", marginRight: 1 }}>
  //             {key.charAt(0).toUpperCase() + key.slice(1)}:
  //           </Typography>
  //           <Box sx={{ marginLeft: 1 }}> {renderData(value)}</Box>
  //         </Box>
  //       ));
  //     } else {
  //       return (
  //         <Typography sx={{ display: "inline" }}>
  //           {dataItem !== null ? dataItem.toString() : "null"}
  //         </Typography>
  //       );
  //     }
  //   };

  const renderData = (dataItem) => {
    if (Array.isArray(dataItem)) {
      return dataItem.map((item, index) => (
        <Box key={index} sx={{ marginBottom: 2 }}>
          {renderData(item)}
          {index < dataItem.length - 1 && (
            <Divider sx={{ backgroundColor: "black", my: 2 }} />
          )}
        </Box>
      ));
    } else if (typeof dataItem === "object" && dataItem !== null) {
      return Object.entries(dataItem).map(([key, value], index) => (
        <Box
          key={index}
          sx={{
            marginBottom: 2,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold", flex: 1 }}>
            {key.charAt(0).toUpperCase() + key.slice(1)}:
          </Typography>
          <Box sx={{ flex: 2, marginLeft: 2 }}>{renderData(value)}</Box>
        </Box>
      ));
    } else {
      return (
        <Typography sx={{ display: "inline" }}>
          {dataItem !== null ? dataItem.toString() : "null"}
        </Typography>
      );
    }
  };
  return (
    <>
      <Header />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          padding: 2,
          backgroundColor: "#f8f9fa",
        }}
      >
        <Box
          sx={{
            flex: 1,
            overflowY: "auto",
            padding: 2,
            margin: "0 auto",
            backgroundColor: "#fff",
            borderRadius: 2,
            boxShadow: "0px 4px 12px rgba(36, 180, 179, 0.8)",
            width: "100%",
            maxWidth: "1200px",
            minWidth: "1200px",
          }}
        >
          {loading && (
            <Box
              sx={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                // bgcolor: "rgba(255, 255, 255, 0.8)",
                // backdropFilter: "blur(4px)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 9999,
              }}
            >
              <CircularProgress size={60} sx={{ color: "#24b4b3" }} />
            </Box>
          )}
          {!loading && (
            <>
              <Tabs value={tabIndex} onChange={handleTabChange} centered>
                <Tab label="Insurance Recommendations" />
                <Tab label="Other Data" />
              </Tabs>
              {tabIndex === 0 && (
                <>
                  {data.map((item, index) => (
                    <Box key={index} sx={{ marginBottom: 4 }}>
                      {(item.title.includes("Recommendation") ||
                        item.title.includes("Recommendations")) && (
                        <>
                          {item.title && (
                            <>
                              <Typography
                                variant="h4"
                                sx={{ color: "#24b4b3", marginBottom: 2 }}
                              >
                                {item.title}
                              </Typography>
                            </>
                          )}

                          <Box className="description">
                            {renderData(item.data)}
                          </Box>
                          <Divider />
                        </>
                      )}
                    </Box>
                  ))}
                </>
              )}
              {tabIndex === 1 && (
                <>
                  {data.map((item, index) => (
                    <Box key={index} sx={{ marginBottom: 4 }}>
                      {item.title !== "Insurance Recommendations" && (
                        <>
                          {item.title && (
                            <>
                              <Typography
                                variant="h4"
                                sx={{ color: "#24b4b3", marginBottom: 2 }}
                              >
                                {item.title}
                              </Typography>
                            </>
                          )}

                          <Box className="description">
                            {renderData(item.data)}
                          </Box>
                        </>
                      )}
                    </Box>
                  ))}
                </>
              )}{" "}
            </>
          )}
        </Box>
      </Box>

      <Footer />
    </>
  );
};

export default ResponseRender;
