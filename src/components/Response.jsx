import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";

const Response = () => {
  const getFYData = async () => {
    const res = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/fetch-and-process-data-for-range`,
      {
        handle: localStorage.getItem("handleID"),
      }
    );
    console.log(res.data);
  };

  useEffect(() => {
    const fetchData = async () => {
      await getFYData();
    };
    fetchData();
  }, []);

  const jsonString =
    '[\n  {\n    "title": "Income Streams",\n    "description": {\n      "totalIncome": 383030.95,\n      "streams": [\n        {\n          "name": "UPI-G DEEPAN-DEEPANGOVINDARAJ11@OKICICI",\n          "amount": 26240.0,\n          "frequency": "One-time"\n        },\n        {\n          "name": "UPI-KATHIRVEL R",\n          "amount": 2600.0,\n          "frequency": "Multiple instances"\n        },\n        {\n          "name": "UPI-SOMALINGAM B",\n          "amount": 1000.0,\n          "frequency": "One-time"\n        },\n        {\n          "name": "IMPS-RESILIENT INNOVATION",\n          "amount": 50769.94,\n          "frequency": "One-time"\n        },\n        {\n          "name": "IMPS-BHARATPE",\n          "amount": 23000.0,\n          "frequency": "One-time"\n        },\n        {\n          "name": "UPI-CASHFREE PAYMENTS",\n          "amount": 182.0,\n          "frequency": "One-time"\n        },\n        {\n          "name": "UPI-PAYTM-PAYTM INCENTIVE",\n          "amount": 44783.95,\n          "frequency": "Multiple instances"\n        },\n        {\n          "name": "UPI-MILLENNIA CARD CASH BACK",\n          "amount": 800.0,\n          "frequency": "Multiple instances"\n        },\n        {\n          "name": "CREDIT INTEREST CAPITALISED",\n          "amount": 570.0,\n          "frequency": "Multiple instances"\n        },\n        {\n          "name": "UPI-VIDHYASHANKAR M",\n          "amount": 10502.0,\n          "frequency": "One-time"\n        }\n      ]\n    }\n  },\n  {\n    "title": "Expense Parsing",\n    "description": {\n      "totalExpenses": 700826.95,\n      "categories": {\n        "Utilities": [\n          {\n            "name": "UPI-AIRTELPREPAIDTN",\n            "amount": 633.0\n          }\n        ],\n        "Food & Dining": [\n          {\n            "name": "UPI-FOOD OUTLETS",\n            "amount": 1120.0\n          }\n        ],\n        "Grocery": [\n          {\n            "name": "UPI-BIGBASKET",\n            "amount": 500.0\n          }\n        ],\n        "Entertainment": [\n          {\n            "name": "UPI-INNOVATIVE MULTIPLEX",\n            "amount": 359.0\n          },\n          {\n            "name": "UPI-GRAND CINEMAS",\n            "amount": 160.0\n          }\n        ],\n        "Loan Repayments": [\n          {\n            "name": "CRED.CLUB Payments",\n            "amount": 36648.65\n          },\n          {\n            "name": "LIC HFL",\n            "amount": 27960.0\n          }\n        ],\n        "Healthcare": [\n          {\n            "name": "UPI-STAR PHARMACY",\n            "amount": 80.0\n          }\n        ],\n        "Insurance": [\n          {\n            "name": "TATAAIAPOLICY",\n            "amount": 19992.0\n          },\n          {\n            "name": "POLICYBAZAAR",\n            "amount": 7380.0\n          }\n        ],\n        "Rent": [\n          {\n            "name": "NAVEEN KUMAR Rent Payment",\n            "amount": 59500.0\n          }\n        ],\n        "Telecommunications": [\n          {\n            "name": "UPI-JALIL MAJID SHAIKH",\n            "amount": 10200.0\n          }\n        ],\n        "Shopping & Others": [\n          {\n            "name": "Various",\n            "amount": 533324.3\n          }\n        ]\n      }\n    }\n  },\n  {\n    "title": "Debt Identification",\n    "description": {\n      "totalDebt": 60000.0,\n      "loans": [\n        {\n          "type": "Fixed Deposit",\n          "amount": 100000.0\n        },\n        {\n          "type": "Personal Loan EMI",\n          "amount": 60000.0\n        }\n      ]\n    }\n  },\n  {\n    "title": "Asset Identification",\n    "description": {\n      "totalAssets": 100996.0,\n      "assets": [\n        {\n          "type": "Fixed Deposit",\n          "amount": 100000\n        },\n        {\n          "type": "Bank Account Balance",\n          "amount": 996.0\n        }\n      ]\n    }\n  },\n  {\n    "title": "Insurance Affordability Index",\n    "description": {\n      "indexScore": 78,\n      "details": "The customer has a moderate capacity to afford additional insurance products and coverage add-ons."\n    }\n  },\n  {\n    "title": "Debt-to-Income Ratio",\n    "description": {\n      "ratio": 0.1567,\n      "analysis": "The majority of the individual\'s income is not committed towards debt repayment, indicating good financial health concerning liabilities."\n    }\n  },\n  {\n    "title": "Insurance Recommendations",\n    "description": {\n      "creditLinkedInsurance": {\n        "suggestion": "Credit Health Secure",\n        "sumInsured": 100000,\n        "premium": 1000,\n        "coverage": "Accidental Death, Permanent Total Disability"\n      },\n      "healthInsurance": [\n        {\n          "suggestion": "Health Secure",\n          "sumInsured": 500000,\n          "premium": 5000,\n          "coverage": "Hospitalization, OPD, Critical Illness"\n        },\n        {\n          "suggestion": "Health Family",\n          "sumInsured": 1000000,\n          "premium": 9000,\n          "coverage": "Family Floater Plan with Maternity Cover"\n        }\n      ]\n    }\n  }\n]';

  const data = JSON.parse(jsonString);
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
          }}
        >
          {data.map((item, index) => (
            <Box key={index} className="data-section" sx={{ marginBottom: 4 }}>
              <Typography
                variant="h4"
                sx={{ color: "#24b4b3", marginBottom: 2 }}
              >
                {item.title}
              </Typography>
              <Box className="description" sx={{ paddingLeft: 2 }}>
                {Object.keys(item.description).map((key, i) => {
                  const description = item.description[key];

                  if (Array.isArray(description)) {
                    return (
                      <Box key={i} sx={{ marginBottom: 2 }}>
                        <Typography variant="h6">{key}</Typography>
                        <ul>
                          {description.map((subItem, j) => (
                            <li key={j}>
                              <span>{subItem.name || subItem.type}: </span>
                              <span>
                                {subItem.amount || subItem.sumInsured}{" "}
                              </span>
                              <span>{subItem.frequency || ""}</span>
                            </li>
                          ))}
                        </ul>
                      </Box>
                    );
                  } else if (typeof description === "object") {
                    return (
                      <Box key={i} sx={{ marginBottom: 2 }}>
                        <Typography variant="h6">{key}</Typography>
                        <Typography>
                          {description.details || description.analysis || ""}
                        </Typography>
                        {description.sumInsured && (
                          <Typography>
                            Sum Insured: {description.sumInsured}
                          </Typography>
                        )}
                        {description.premium && (
                          <Typography>
                            Premium: {description.premium}
                          </Typography>
                        )}
                        {description.coverage && (
                          <Typography>
                            Coverage: {description.coverage}
                          </Typography>
                        )}
                      </Box>
                    );
                  } else {
                    return (
                      <Box key={i} sx={{ marginBottom: 2 }}>
                        <strong>{key}: </strong>
                        <span>{description}</span>
                      </Box>
                    );
                  }
                })}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      <Footer />
    </>
  );
};

export default Response;
