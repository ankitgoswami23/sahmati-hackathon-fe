import React, { useEffect, useState } from "react";
import { Box, Typography, Tabs, Tab, LinearProgress } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";

const Response = () => {
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

  // const jsonString =
  //   '[\n    {\n        "title": "Income Parsing",\n        "data": {\n            "streams": [\n                {\n                    "description": "Salary or recurring credit",\n                    "total": 174142.95,\n                    "transactionIds": [\n                        "fe39f271-8c2f-4249-a174-1e65975035f2",\n                        "3feb5c4a-d202-440f-a96a-45b415d5d1a1",\n                        "9d0acfe9-20f9-4867-a8c3-0728c8a5d1e8",\n                        "8d1271e6-6714-412c-b51f-224064091c66",\n                        "c4296a3d-d794-41b6-83ff-4061f77b1a0d"\n                    ]\n                }\n            ]\n        }\n    },\n    {\n        "title": "Expense Parsing",\n        "data": {\n            "categories": {\n                "utilities": {\n                    "total": 1485.17,\n                    "transactionIds": [\n                        "d7e56d1a-f276-4373-85c1-8a9acdaee170",\n                        "e26bea29-4f4d-4aca-9b58-ff5c1d90fed6",\n                        "72f7e845-f5d4-4b1d-87c1-235e03def285"\n                    ]\n                },\n                "grocery": {\n                    "total": 701.9,\n                    "transactionIds": [\n                        "4d1b6d3a-bb6b-4a0f-9a92-602611353765",\n                        "5fad3fe3-3e43-4c69-a7d1-77c17c2b141e"\n                    ]\n                },\n                "entertainment": {\n                    "total": 2839.0,\n                    "transactionIds": [\n                        "bcf895d1-9183-40f8-bf9f-1aab01db9d7c",\n                        "cd606878-1fef-4e06-a32a-ea9be34cc918",\n                        "5482101d-c14e-476e-84bc-8e68d22e43f7"\n                    ]\n                },\n                "loanRepayments": {\n                    "total": 69172.0,\n                    "transactionIds": [\n                        "afe3c308-b6c2-4c9d-8365-60d2bfeeec3c",\n                        "eb54ef7b-21eb-4226-952e-8de26ad12c4e",\n                        "16f737fd-7123-4b03-b939-9bc9f3f249e2"\n                    ]\n                },\n                "healthcare": {\n                    "total": 14816.68,\n                    "transactionIds": [\n                        "d5f2f351-46e7-489e-a3e7-cf8e910eb2a9",\n                        "bc19c6ac-7ef9-426e-b1b7-1810bcfddec5",\n                        "e39f7cdf-16a7-4db6-9f80-d40cbe3c3624"\n                    ]\n                }\n            },\n            "discretionary": 4080.9,\n            "nonDiscretionary": 108040.95\n        }\n    },\n    {\n        "title": "Debt Identification",\n        "data": {\n            "loans": [\n                {\n                    "type": "home",\n                    "outstandingBalance": 130000,\n                    "EMIs": 5205,\n                    "transactionIds": [\n                        "179b719e-ed5c-4623-b465-a78093dbf0e5",\n                        "c3cb0ef3-f173-440c-a141-f3762efc38b9"\n                    ]\n                },\n                {\n                    "type": "personal",\n                    "outstandingBalance": 85000,\n                    "EMIs": 3800,\n                    "transactionIds": [\n                        "d831267e-660e-4375-9005-916670052514",\n                        "7ebd4066-13da-44c0-86fd-ac35b176e3f6"\n                    ]\n                }\n            ]\n        }\n    },\n    {\n        "title": "Asset Identification",\n        "data": {\n            "savings": {\n                "total": 60050,\n                "linkedAccounts": [\n                    {\n                        "type": "FD",\n                        "balance": 50000,\n                        "transactionId": "9e5fb545-76ee-40d8-97f9-8162a4c94bb2"\n                    }\n                ]\n            },\n            "investments": {\n                "total": 4800,\n                "linkedAccounts": [\n                    {\n                        "type": "SIP",\n                        "balance": 2300,\n                        "transactionId": "3b056e36-2369-4567-af1e-320c1fc8ebb8"\n                    }\n                ]\n            }\n        }\n    },\n    {\n        "title": "Insurance Affordability Index",\n        "data": {\n            "disposableIncome": 61000,\n            "debtToIncomeRatio": 0.34,\n            "existingPolicies": [\n                {\n                    "name": "TATA AIA",\n                    "premium": 7200,\n                    "transactionIds": [\n                        "b37ab860-8c9d-4c65-accb-d8dfceafaa39"\n                    ]\n                }\n            ],\n            "affordabilityScore": 0.18\n        }\n    },\n    {\n        "title": "Financial Health Assessment",\n        "data": {\n            "debtToIncomeRatio": "34%",\n            "recommendation": "Stable financial position but potential risk in case of unexpected expenses"\n        }\n    },\n    {\n        "title": "Insurance Recommendations",\n        "data": {\n            "creditLinkedInsurance": [\n                {\n                    "planName": "Credit Health Premium",\n                    "sumInsured": "₹500,000",\n                    "premium": "₹5,000/year",\n                    "linkedCreditProduct": "Home Loan",\n                    "additionalBenefits": ["Accidental Death", "Critical Illness"]\n                }\n            ],\n            "healthInsurance": [\n                {\n                    "planName": "Health Secure",\n                    "sumInsured": "₹500,000",\n                    "premium": "₹5,000/year",\n                    "numberInsured": 2,\n                    "coverages": ["OPD Coverage", "Critical Illness"],\n                    "additionalBenefits": "No-Claim Bonus"\n                }\n            ]\n        }\n    }\n]';

  // const data = JSON.parse(jsonString);

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
                            {Array.isArray(item.data)
                              ? // If item.data is an array, map directly over it
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
                                ))
                              : // If item.data is an object, iterate over its keys
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
                                      {item.data[category].map(
                                        (dataItem, j) => (
                                          <Box key={j} sx={{ marginBottom: 2 }}>
                                            {Object.keys(dataItem).map(
                                              (key, k) => (
                                                <Typography key={k}>
                                                  <strong>
                                                    {key.replace(
                                                      /([A-Z])/g,
                                                      " $1"
                                                    )}
                                                    :{" "}
                                                  </strong>
                                                  {Array.isArray(
                                                    dataItem[key]
                                                  ) ? (
                                                    <ul>
                                                      {dataItem[key].map(
                                                        (subItem, l) =>
                                                          typeof subItem ===
                                                          "string" ? (
                                                            <li key={l}>
                                                              {subItem}
                                                            </li>
                                                          ) : (
                                                            <li key={l}>
                                                              {Object.keys(
                                                                subItem
                                                              ).map(
                                                                (subKey, m) => (
                                                                  <span key={m}>
                                                                    {subKey.replace(
                                                                      /([A-Z])/g,
                                                                      " $1"
                                                                    )}
                                                                    :{" "}
                                                                    {
                                                                      subItem[
                                                                        subKey
                                                                      ]
                                                                    }{" "}
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
                                              )
                                            )}
                                          </Box>
                                        )
                                      )}
                                    </Box>
                                  </Box>
                                ))}
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
                            {Array.isArray(item.data)
                              ? // If item.data is an array, map directly over it
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
                                ))
                              : // If item.data is an object, iterate over its keys
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
                                      {item.data[category].map(
                                        (dataItem, j) => (
                                          <Box key={j} sx={{ marginBottom: 2 }}>
                                            {Object.keys(dataItem).map(
                                              (key, k) => (
                                                <Typography key={k}>
                                                  <strong>
                                                    {key.replace(
                                                      /([A-Z])/g,
                                                      " $1"
                                                    )}
                                                    :{" "}
                                                  </strong>
                                                  {Array.isArray(
                                                    dataItem[key]
                                                  ) ? (
                                                    <ul>
                                                      {dataItem[key].map(
                                                        (subItem, l) =>
                                                          typeof subItem ===
                                                          "string" ? (
                                                            <li key={l}>
                                                              {subItem}
                                                            </li>
                                                          ) : (
                                                            <li key={l}>
                                                              {Object.keys(
                                                                subItem
                                                              ).map(
                                                                (subKey, m) => (
                                                                  <span key={m}>
                                                                    {subKey.replace(
                                                                      /([A-Z])/g,
                                                                      " $1"
                                                                    )}
                                                                    :{" "}
                                                                    {
                                                                      subItem[
                                                                        subKey
                                                                      ]
                                                                    }{" "}
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
                                              )
                                            )}
                                          </Box>
                                        )
                                      )}
                                    </Box>
                                  </Box>
                                ))}
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
