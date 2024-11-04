import React, { useEffect, useState } from "react";
import { Box, Typography, Tabs, Tab, LinearProgress } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";

const Response = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([
    {
      title: "Income",
      data: [
        {
          description: "IMPS-319507865074-RESILIENT INNOVATION",
          amount: 50769.94,
          timestamp: "2024-06-15T07:23:35+05:30",
        },
        {
          description: "UPI-BHARATPE PAYOUTS-CASHFREEBHARATP@YESBANK",
          amount: 38602,
          timestamp: "2024-06-16T20:53:39+05:30",
        },
        {
          description: "UPI-KATHIRVEL R-9952144145@YBL",
          amount: 1300,
          timestamp: "2024-06-24T15:40:20+05:30",
        },
        {
          description: "IMPS-223212545821-BHARATPE-ICIC",
          amount: 23000,
          timestamp: "2024-07-23T17:56:52+05:30",
        },
        {
          description: "UPI-G DEEPAN-DEEPANGOVINDARAJ11@OKICICI",
          amount: 26240,
          timestamp: "2024-07-09T11:12:41+05:30",
        },
        {
          description: "MILLENNIA CARD CASH BACK",
          amount: 400,
          timestamp: "2024-07-06T18:08:40+05:30",
        },
        {
          description: "UPI-BHARATPE PAYOUTS-CASHFREEBHARATP@YESBANK",
          amount: 20000,
          timestamp: "2024-08-03T08:55:42+05:30",
        },
        {
          description: "UPI-VIDHYASHANKAR M-7401393801@AXL",
          amount: 10502,
          timestamp: "2024-09-15T23:28:25+05:30",
        },
        {
          description: "UPI-PAYTM-PAYOUTS@PAYTM-PYTM0123456",
          amount: 44833.95,
          timestamp: "2024-08-22T00:50:45+05:30",
        },
        {
          description: "UPI-PAYTM-PAYOUTS@PAYTM-PYTM0123456",
          amount: 49996,
          timestamp: "2024-10-02T17:53:07+05:30",
        },
      ],
    },
    {
      title: "Expenses",
      data: [
        {
          category: "Utilities",
          transactions: [
            {
              description: "UPI-LAZYPAY PRIVATE LIMI-LAZYPAYPVTLTD",
              amount: 190,
              timestamp: "2024-08-07T07:37:00+05:30",
            },
            {
              description: "UPI-ADD MONEY TO WALLET-ADD-MONEY@PAYTM",
              amount: 259.68,
              timestamp: "2024-09-15T13:05:10+05:30",
            },
            {
              description: "UPI-MADHUR CHAI-Q630729614@YBL",
              amount: 60,
              timestamp: "2024-09-29T15:01:52+05:30",
            },
            {
              description: "UPI-AMUL PARLOUR-Q855461190",
              amount: 190,
              timestamp: "2024-09-09T16:12:00+05:30",
            },
          ],
        },
        {
          category: "Grocery",
          transactions: [
            {
              description: "UPI-DHANAPAL FANCY STORE-PAYTM",
              amount: 170,
              timestamp: "2024-08-04T17:11:42+05:30",
            },
            {
              description: "UPI-BIGBASKET-BBNOW@YBL",
              amount: 500,
              timestamp: "2024-10-05T16:20:55+05:30",
            },
          ],
        },
        {
          category: "Healthcare",
          transactions: [
            {
              description: "UPI-STAR PHARMACY-BHARATPE09897973834",
              amount: 80,
              timestamp: "2024-07-15T11:55:48+05:30",
            },
            {
              description: "UPI-BCS PHARMACY-BCSPHARMACY",
              amount: 56,
              timestamp: "2024-10-04T07:09:09+05:30",
            },
          ],
        },
        {
          category: "Entertainment",
          transactions: [
            {
              description: "MILLENNIA CARD CASH BACK",
              amount: 400,
              timestamp: "2024-07-06T18:08:40+05:30",
            },
            {
              description: "UPI-GRAND CINEMAS-PAYTM",
              amount: 160,
              timestamp: "2024-09-22T17:19:49+05:30",
            },
            {
              description: "UPI-INNOVATIVE MULTIPLEX-PAYENT",
              amount: 359,
              timestamp: "2024-07-05T14:25:14+05:30",
            },
          ],
        },
      ],
    },
    {
      title: "Debts",
      data: [
        {
          description: "FD THROUGH NET",
          amount: 100000,
          timestamp: "2024-10-02T13:10:00+05:30",
        },
        {
          description: "UPI-KONDAMUDI SURI PRAKA-JONAVIJAY1",
          amount: 13000,
          timestamp: "2024-09-05T20:29:15+05:30",
        },
        {
          description: "UPI-MD AIZHAR-MDEBRARALAMMDEBRARALAM",
          amount: 5300,
          timestamp: "2024-09-09T20:30:22+05:30",
        },
        {
          description: "UPI-VENUGOPAL M",
          amount: 1600,
          timestamp: "2024-09-15T20:54:41+05:30",
        },
      ],
    },
    {
      title: "Assets and Investments",
      data: [
        {
          description: "FD THROUGH NET",
          amount: 100000,
          timestamp: "2024-10-02T13:10:00+05:30",
        },
      ],
    },
    {
      title: "Insurance Policies",
      data: [
        {
          description: "TATAAIAPOLICY_U204046624",
          amount: 4998,
          timestamp: "2024-07-25T16:11:39+05:30",
        },
        {
          description: "ACH D- POLICYBAZAAR",
          amount: 2460,
          timestamp: "2024-06-29T15:27:57+05:30",
        },
      ],
    },
    {
      title: "Financial Health Assessment",
      data: {
        "Debt-to-Income Ratio": 0.42,
        "Disposable Income": 120000,
      },
    },
    {
      title: "Insurance Recommendations",
      data: [
        {
          "Recommended Product": "Credit Health Premium",
          "Sum Insured": 500000,
          Premium: 5000,
          Reason: "Debt-to-Income Ratio exceeds threshold",
        },
        {
          "Recommended Product": "Health Value",
          "Sum Insured": 300000,
          Premium: 3000,
          "Number of Insured Members": 1,
          Reason: "Moderate healthcare spending with a basic coverage need",
        },
      ],
    },
  ]);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  // const getFYData = async () => {
  //   setLoading(true);

  //   try {
  //     const res = await axios.post(
  //       `${import.meta.env.VITE_BACKEND_URL}/fetch-and-process-data-for-range`,
  //       {
  //         handle: localStorage.getItem("handleID"),
  //       }
  //     );
  //     if (res.data.ok) {
  //       setData(JSON.parse(res.data.data.choices[0].message.content));
  //       console.log(
  //         "data",
  //         JSON.parse(res.data.data.choices[0].message.content)
  //       );
  //     }
  //     console.log(res.data);
  //   } catch (e) {
  //     console.log(e);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     await getFYData();
  //   };
  //   fetchData();
  // }, []);

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
            maxWidth: "1200px", // Set a max width for widespread appearance
            backgroundColor: "#fff",
            borderRadius: 2,
            boxShadow: "0px 4px 12px rgba(36, 180, 179, 0.8)",
            width: "100%", // Ensures it takes full width of its container
            maxWidth: "1200px", // Sets a max width to create a fixed width look
            minWidth: "1200px",
          }}
        >
          {loading && <LinearProgress />}

          {!loading && (
            <>
              <Tabs value={tabIndex} onChange={handleTabChange} centered>
                <Tab label="Insurance Recommendations" />
                <Tab label="Other Data" />
              </Tabs>
              {tabIndex === 0 && (
                <>
                  {data.map((item, index) => (
                    <Box
                      key={index}
                      className="data-section"
                      sx={{ marginBottom: 4 }}
                    >
                      {item.title === "Insurance Recommendations" && (
                        <>
                          <Typography
                            variant="h4"
                            sx={{ color: "#24b4b3", marginBottom: 2 }}
                          >
                            {item.title}
                          </Typography>
                          <Box className="description" sx={{ paddingLeft: 2 }}>
                            {/* Check if item.data is an array */}
                            {Array.isArray(item.data) ? (
                              item.data.map((dataItem, i) => (
                                <Box key={i} sx={{ marginBottom: 2 }}>
                                  {Object.keys(dataItem).map((key, j) => (
                                    <Typography key={j}>
                                      <strong>
                                        {key.replace(/([A-Z])/g, " $1")}:{" "}
                                      </strong>
                                      {Array.isArray(dataItem[key]) ? (
                                        <ul>
                                          {dataItem[key].map((subItem, k) =>
                                            typeof subItem === "string" ? (
                                              <li key={k}>{subItem}</li>
                                            ) : typeof subItem === "object" ? (
                                              <li key={k}>
                                                {Object.keys(subItem).map(
                                                  (subKey, l) => (
                                                    <span key={l}>
                                                      {subKey.replace(
                                                        /([A-Z])/g,
                                                        " $1"
                                                      )}
                                                      : {subItem[subKey]}{" "}
                                                    </span>
                                                  )
                                                )}
                                              </li>
                                            ) : (
                                              <li key={k}>{subItem}</li>
                                            )
                                          )}
                                        </ul>
                                      ) : typeof dataItem[key] === "object" ? (
                                        Object.keys(dataItem[key]).map(
                                          (subKey, l) => (
                                            <span key={l}>
                                              {subKey.replace(
                                                /([A-Z])/g,
                                                " $1"
                                              )}
                                              : {dataItem[key][subKey]}{" "}
                                            </span>
                                          )
                                        )
                                      ) : (
                                        <span>{dataItem[key]}</span>
                                      )}
                                    </Typography>
                                  ))}
                                </Box>
                              ))
                            ) : typeof item.data === "object" ? (
                              // If item.data is an object, iterate over its keys
                              Object.keys(item.data).map((category, i) => (
                                <Box key={i} sx={{ marginBottom: 2 }}>
                                  <Typography
                                    variant="h6"
                                    sx={{
                                      textTransform: "capitalize",
                                      marginBottom: 1,
                                    }}
                                  >
                                    {category.replace(/([A-Z])/g, " $1")}
                                  </Typography>
                                  <Box sx={{ paddingLeft: 2 }}>
                                    {typeof item.data[category] === "object" ? (
                                      Object.keys(item.data[category]).map(
                                        (subKey, j) => (
                                          <Typography key={j}>
                                            <strong>
                                              {subKey.replace(
                                                /([A-Z])/g,
                                                " $1"
                                              )}
                                              :{" "}
                                            </strong>
                                            <span>
                                              {item.data[category][subKey]}
                                            </span>
                                          </Typography>
                                        )
                                      )
                                    ) : (
                                      <Typography>
                                        <strong>
                                          {category.replace(/([A-Z])/g, " $1")}:{" "}
                                        </strong>
                                        <span>{item.data[category]}</span>
                                      </Typography>
                                    )}
                                  </Box>
                                </Box>
                              ))
                            ) : (
                              // If item.data is a string or other primitive type, render it directly
                              <Typography>{item.data}</Typography>
                            )}
                          </Box>
                        </>
                      )}
                    </Box>
                  ))}
                </>
              )}
              {tabIndex === 1 && (
                <>
                  {data.map((item, index) => (
                    <Box
                      key={index}
                      className="data-section"
                      sx={{ marginBottom: 4 }}
                    >
                      {item.title !== "Insurance Recommendations" && (
                        <>
                          <Typography
                            variant="h4"
                            sx={{ color: "#24b4b3", marginBottom: 2 }}
                          >
                            {item.title}
                          </Typography>
                          <Box className="description" sx={{ paddingLeft: 2 }}>
                            {/* Check if item.data is an array */}
                            {Array.isArray(item.data) ? (
                              item.data.map((dataItem, i) => (
                                <Box key={i} sx={{ marginBottom: 2 }}>
                                  {Object.keys(dataItem).map((key, j) => (
                                    <Typography key={j}>
                                      <strong>
                                        {key.replace(/([A-Z])/g, " $1")}:{" "}
                                      </strong>
                                      {Array.isArray(dataItem[key]) ? (
                                        <ul>
                                          {dataItem[key].map((subItem, k) =>
                                            typeof subItem === "string" ? (
                                              <li key={k}>{subItem}</li>
                                            ) : typeof subItem === "object" ? (
                                              <li key={k}>
                                                {Object.keys(subItem).map(
                                                  (subKey, l) => (
                                                    <span key={l}>
                                                      {subKey.replace(
                                                        /([A-Z])/g,
                                                        " $1"
                                                      )}
                                                      : {subItem[subKey]}{" "}
                                                    </span>
                                                  )
                                                )}
                                              </li>
                                            ) : (
                                              <li key={k}>{subItem}</li>
                                            )
                                          )}
                                        </ul>
                                      ) : typeof dataItem[key] === "object" ? (
                                        Object.keys(dataItem[key]).map(
                                          (subKey, l) => (
                                            <span key={l}>
                                              {subKey.replace(
                                                /([A-Z])/g,
                                                " $1"
                                              )}
                                              : {dataItem[key][subKey]}{" "}
                                            </span>
                                          )
                                        )
                                      ) : (
                                        <span>{dataItem[key]}</span>
                                      )}
                                    </Typography>
                                  ))}
                                </Box>
                              ))
                            ) : typeof item.data === "object" ? (
                              // If item.data is an object, iterate over its keys
                              Object.keys(item.data).map((category, i) => (
                                <Box key={i} sx={{ marginBottom: 2 }}>
                                  <Typography
                                    variant="h6"
                                    sx={{
                                      textTransform: "capitalize",
                                      marginBottom: 1,
                                    }}
                                  >
                                    {category.replace(/([A-Z])/g, " $1")}
                                  </Typography>
                                  <Box sx={{ paddingLeft: 2 }}>
                                    {typeof item.data[category] === "object" ? (
                                      Object.keys(item.data[category]).map(
                                        (subKey, j) => (
                                          <Typography key={j}>
                                            <strong>
                                              {subKey.replace(
                                                /([A-Z])/g,
                                                " $1"
                                              )}
                                              :{" "}
                                            </strong>
                                            <span>
                                              {item.data[category][subKey]}
                                            </span>
                                          </Typography>
                                        )
                                      )
                                    ) : (
                                      <Typography>
                                        <strong>
                                          {category.replace(/([A-Z])/g, " $1")}:{" "}
                                        </strong>
                                        <span>{item.data[category]}</span>
                                      </Typography>
                                    )}
                                  </Box>
                                </Box>
                              ))
                            ) : (
                              // If item.data is a string or other primitive type, render it directly
                              <Typography>{item.data}</Typography>
                            )}
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

export default Response;
