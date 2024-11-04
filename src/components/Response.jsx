import React, { useEffect, useState } from "react";
import { Box, Typography, Tabs, Tab, LinearProgress } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";

const Response = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [loading, setLoading] = useState(false);
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

  // const jsonString =
  //   '[\n    {\n        "title": "Income",\n        "data": [\n            {"source": "Salary or Other Recurring Credits", "amount": 38891.34}\n        ]\n    },\n    {\n        "title": "Expenses",\n        "data": [\n            {"category": "Utilities", "amount": 4620.00},\n            {"category": "Grocery", "amount": 9147.67},\n            {"category": "Entertainment", "amount": 1736.00},\n            {"category": "Loan Repayments", "amount": 27670.50},\n            {"category": "Healthcare", "amount": 6040.00},\n            {"category": "Others", "amount": 57059.10}\n        ]\n    },\n    {\n        "title": "Debt",\n        "data": [\n            {"type": "Credit Card Outstanding", "balance": 20000.00},\n            {"type": "Home Loan", "balance": 500000.00, "EMI": 7500.00},\n            {"type": "Personal Loan", "balance": 100000.00, "EMI": 3000.00}\n        ]\n    },\n    {\n        "title": "Assets",\n        "data": [\n            {"type": "Savings Account", "balance": 10000.00},\n            {"type": "Fixed Deposits", "amount": 15000.00},\n            {"type": "Mutual Funds", "amount": 25000.00}\n        ]\n    },\n    {\n        "title": "Insurance Policies",\n        "data": [\n            {"provider": "LIC", "policyNumber": "LIC123456", "sumAssured": 300000.00, "premium": 5000.00, "status": "Active"},\n            {"provider": "Policy Bazaar", "policyNumber": "PBSI14110574", "sumAssured": 500000.00, "premium": 7000.00, "status": "Active"}\n        ]\n    },\n    {\n        "title": "Debt-to-Income Ratio",\n        "data": [\n            {"ratio": 0.4375}\n        ]\n    },\n    {\n        "title": "Insurance Recommendations",\n        "data": [\n            {\n                "Health Insurance": [\n                    {"plan": "Health Secure", "sumInsured": 500000, "premium": 5000, "insuredMembers": 2, "coverages": ["OPD Coverage", "Critical Illness"], "additionalBenefits": ["No-Claim Bonus"]}\n                ],\n                "Credit-linked Insurance": [\n                    {"plan": "Credit Health Cover", "sumInsured": 200000, "premium": 2000, "linkedProduct": "Education Loan", "coverages": ["Accidental Death", "Critical Illness"], "additionalBenefits": ["Partial Loan Coverage"]}\n                ]\n            }\n        ]\n    }\n]';

  // const data = JSON.parse(jsonString);

  return (
    <>
      {console.log("dataaaaaaaa", data)}
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
                          {" "}
                          <Typography
                            variant="h4"
                            sx={{ color: "#24b4b3", marginBottom: 2 }}
                          >
                            {item.title}
                          </Typography>
                          <Box className="description" sx={{ paddingLeft: 2 }}>
                            {item.data.map((dataItem, i) => {
                              return (
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
                                            ) : (
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
                                            )
                                          )}
                                        </ul>
                                      ) : (
                                        <span>{dataItem[key]}</span>
                                      )}
                                    </Typography>
                                  ))}
                                </Box>
                              );
                            })}
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
                          {" "}
                          <Typography
                            variant="h4"
                            sx={{ color: "#24b4b3", marginBottom: 2 }}
                          >
                            {item.title}
                          </Typography>
                          <Box className="description" sx={{ paddingLeft: 2 }}>
                            {item.data.map((dataItem, i) => {
                              return (
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
                                            ) : (
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
                                            )
                                          )}
                                        </ul>
                                      ) : (
                                        <span>{dataItem[key]}</span>
                                      )}
                                    </Typography>
                                  ))}
                                </Box>
                              );
                            })}
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
