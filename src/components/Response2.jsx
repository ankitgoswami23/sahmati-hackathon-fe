import React, { useEffect, useState } from "react";
import { Box, Typography, Tabs, Tab, LinearProgress } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";

const ResponseRender = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const [data, setData] = useState(null);

  //   const [data, setData] = useState([
  //     {
  //       title: "Income",
  //       data: [
  //         {
  //           source: "UPI-G DEEPAN-DEEPANGOVINDARAJ11@OKICICI",
  //           amount: 26240,
  //           date: "2024-07-09",
  //         },
  //         {
  //           source: "IMPS-223212545821-BHARATPE",
  //           amount: 23000,
  //           date: "2024-07-23",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Expenses",
  //       data: [
  //         {
  //           category: "Rent",
  //           amount: 8500,
  //           date: "2024-08-03",
  //         },
  //         {
  //           category: "Rent",
  //           amount: 13000,
  //           date: "2024-09-05",
  //         },
  //         {
  //           category: "Utilities",
  //           amount: 4998,
  //           date: "2024-09-24",
  //         },
  //         {
  //           category: "Grocery",
  //           amount: 500,
  //           date: "2024-10-05",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Debt",
  //       data: [
  //         {
  //           type: "Personal Loan",
  //           outstanding_amount: 30000,
  //           date: "2024-09-09",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Assets",
  //       data: [
  //         {
  //           type: "Fixed Deposit",
  //           amount: 100000,
  //           date: "2024-10-02",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Insurance Policies",
  //       data: [
  //         {
  //           policy_name: "TATAAIAPOLICY",
  //           premium_amount: 4998,
  //           due_date: "2024-09-24",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Financial Assessment",
  //       data: [
  //         {
  //           "Debt-to-Income Ratio": "Calculated Ratio",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Insurance Recommendations",
  //       data: [
  //         {
  //           plan_name: "Credit Health Premium",
  //           sum_insured: 500000,
  //           premium: 5000,
  //           linked_credit_product: "Home Loan",
  //         },
  //         {
  //           plan_name: "Health Family",
  //           sum_insured: 1000000,
  //           premium: 9000,
  //           number_of_insured_members: 4,
  //         },
  //       ],
  //     },
  //   ]);

  //   const [data, setData] = useState([
  //     {
  //       title: "Income",
  //       data: [
  //         {
  //           description: "IMPS-319507865074-RESILIENT INNOVATION",
  //           amount: 50769.94,
  //           timestamp: "2024-06-15T07:23:35+05:30",
  //         },
  //         {
  //           description: "UPI-BHARATPE PAYOUTS-CASHFREEBHARATP@YESBANK",
  //           amount: 38602,
  //           timestamp: "2024-06-16T20:53:39+05:30",
  //         },
  //         {
  //           description: "UPI-KATHIRVEL R-9952144145@YBL",
  //           amount: 1300,
  //           timestamp: "2024-06-24T15:40:20+05:30",
  //         },
  //         {
  //           description: "IMPS-223212545821-BHARATPE-ICIC",
  //           amount: 23000,
  //           timestamp: "2024-07-23T17:56:52+05:30",
  //         },
  //         {
  //           description: "UPI-G DEEPAN-DEEPANGOVINDARAJ11@OKICICI",
  //           amount: 26240,
  //           timestamp: "2024-07-09T11:12:41+05:30",
  //         },
  //         {
  //           description: "MILLENNIA CARD CASH BACK",
  //           amount: 400,
  //           timestamp: "2024-07-06T18:08:40+05:30",
  //         },
  //         {
  //           description: "UPI-BHARATPE PAYOUTS-CASHFREEBHARATP@YESBANK",
  //           amount: 20000,
  //           timestamp: "2024-08-03T08:55:42+05:30",
  //         },
  //         {
  //           description: "UPI-VIDHYASHANKAR M-7401393801@AXL",
  //           amount: 10502,
  //           timestamp: "2024-09-15T23:28:25+05:30",
  //         },
  //         {
  //           description: "UPI-PAYTM-PAYOUTS@PAYTM-PYTM0123456",
  //           amount: 44833.95,
  //           timestamp: "2024-08-22T00:50:45+05:30",
  //         },
  //         {
  //           description: "UPI-PAYTM-PAYOUTS@PAYTM-PYTM0123456",
  //           amount: 49996,
  //           timestamp: "2024-10-02T17:53:07+05:30",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Expenses",
  //       data: [
  //         {
  //           category: "Utilities",
  //           transactions: [
  //             {
  //               description: "UPI-LAZYPAY PRIVATE LIMI-LAZYPAYPVTLTD",
  //               amount: 190,
  //               timestamp: "2024-08-07T07:37:00+05:30",
  //             },
  //             {
  //               description: "UPI-ADD MONEY TO WALLET-ADD-MONEY@PAYTM",
  //               amount: 259.68,
  //               timestamp: "2024-09-15T13:05:10+05:30",
  //             },
  //             {
  //               description: "UPI-MADHUR CHAI-Q630729614@YBL",
  //               amount: 60,
  //               timestamp: "2024-09-29T15:01:52+05:30",
  //             },
  //             {
  //               description: "UPI-AMUL PARLOUR-Q855461190",
  //               amount: 190,
  //               timestamp: "2024-09-09T16:12:00+05:30",
  //             },
  //           ],
  //         },
  //         {
  //           category: "Grocery",
  //           transactions: [
  //             {
  //               description: "UPI-DHANAPAL FANCY STORE-PAYTM",
  //               amount: 170,
  //               timestamp: "2024-08-04T17:11:42+05:30",
  //             },
  //             {
  //               description: "UPI-BIGBASKET-BBNOW@YBL",
  //               amount: 500,
  //               timestamp: "2024-10-05T16:20:55+05:30",
  //             },
  //           ],
  //         },
  //         {
  //           category: "Healthcare",
  //           transactions: [
  //             {
  //               description: "UPI-STAR PHARMACY-BHARATPE09897973834",
  //               amount: 80,
  //               timestamp: "2024-07-15T11:55:48+05:30",
  //             },
  //             {
  //               description: "UPI-BCS PHARMACY-BCSPHARMACY",
  //               amount: 56,
  //               timestamp: "2024-10-04T07:09:09+05:30",
  //             },
  //           ],
  //         },
  //         {
  //           category: "Entertainment",
  //           transactions: [
  //             {
  //               description: "MILLENNIA CARD CASH BACK",
  //               amount: 400,
  //               timestamp: "2024-07-06T18:08:40+05:30",
  //             },
  //             {
  //               description: "UPI-GRAND CINEMAS-PAYTM",
  //               amount: 160,
  //               timestamp: "2024-09-22T17:19:49+05:30",
  //             },
  //             {
  //               description: "UPI-INNOVATIVE MULTIPLEX-PAYENT",
  //               amount: 359,
  //               timestamp: "2024-07-05T14:25:14+05:30",
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       title: "Debts",
  //       data: [
  //         {
  //           description: "FD THROUGH NET",
  //           amount: 100000,
  //           timestamp: "2024-10-02T13:10:00+05:30",
  //         },
  //         {
  //           description: "UPI-KONDAMUDI SURI PRAKA-JONAVIJAY1",
  //           amount: 13000,
  //           timestamp: "2024-09-05T20:29:15+05:30",
  //         },
  //         {
  //           description: "UPI-MD AIZHAR-MDEBRARALAMMDEBRARALAM",
  //           amount: 5300,
  //           timestamp: "2024-09-09T20:30:22+05:30",
  //         },
  //         {
  //           description: "UPI-VENUGOPAL M",
  //           amount: 1600,
  //           timestamp: "2024-09-15T20:54:41+05:30",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Assets and Investments",
  //       data: [
  //         {
  //           description: "FD THROUGH NET",
  //           amount: 100000,
  //           timestamp: "2024-10-02T13:10:00+05:30",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Insurance Policies",
  //       data: [
  //         {
  //           description: "TATAAIAPOLICY_U204046624",
  //           amount: 4998,
  //           timestamp: "2024-07-25T16:11:39+05:30",
  //         },
  //         {
  //           description: "ACH D- POLICYBAZAAR",
  //           amount: 2460,
  //           timestamp: "2024-06-29T15:27:57+05:30",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Financial Health Assessment",
  //       data: {
  //         "Debt-to-Income Ratio": 0.42,
  //         "Disposable Income": 120000,
  //       },
  //     },
  //     {
  //       title: "Insurance Recommendations",
  //       data: [
  //         {
  //           "Recommended Product": "Credit Health Premium",
  //           "Sum Insured": 500000,
  //           Premium: 5000,
  //           Reason: "Debt-to-Income Ratio exceeds threshold",
  //         },
  //         {
  //           "Recommended Product": "Health Value",
  //           "Sum Insured": 300000,
  //           Premium: 3000,
  //           "Number of Insured Members": 1,
  //           Reason: "Moderate healthcare spending with a basic coverage need",
  //         },
  //       ],
  //     },
  //   ]);

  //   const [data, setData] = useState([
  //     {
  //       title: "Income Parsing",
  //       data: {
  //         streams: [
  //           {
  //             description: "Salary or recurring credit",
  //             total: 174142.95,
  //             transactionIds: [
  //               "fe39f271-8c2f-4249-a174-1e65975035f2",
  //               "3feb5c4a-d202-440f-a96a-45b415d5d1a1",
  //               "9d0acfe9-20f9-4867-a8c3-0728c8a5d1e8",
  //               "8d1271e6-6714-412c-b51f-224064091c66",
  //               "c4296a3d-d794-41b6-83ff-4061f77b1a0d",
  //             ],
  //           },
  //         ],
  //       },
  //     },
  //     {
  //       title: "Expense Parsing",
  //       data: {
  //         categories: {
  //           utilities: {
  //             total: 1485.17,
  //             transactionIds: [
  //               "d7e56d1a-f276-4373-85c1-8a9acdaee170",
  //               "e26bea29-4f4d-4aca-9b58-ff5c1d90fed6",
  //               "72f7e845-f5d4-4b1d-87c1-235e03def285",
  //             ],
  //           },
  //           grocery: {
  //             total: 701.9,
  //             transactionIds: [
  //               "4d1b6d3a-bb6b-4a0f-9a92-602611353765",
  //               "5fad3fe3-3e43-4c69-a7d1-77c17c2b141e",
  //             ],
  //           },
  //           entertainment: {
  //             total: 2839,
  //             transactionIds: [
  //               "bcf895d1-9183-40f8-bf9f-1aab01db9d7c",
  //               "cd606878-1fef-4e06-a32a-ea9be34cc918",
  //               "5482101d-c14e-476e-84bc-8e68d22e43f7",
  //             ],
  //           },
  //           loanRepayments: {
  //             total: 69172,
  //             transactionIds: [
  //               "afe3c308-b6c2-4c9d-8365-60d2bfeeec3c",
  //               "eb54ef7b-21eb-4226-952e-8de26ad12c4e",
  //               "16f737fd-7123-4b03-b939-9bc9f3f249e2",
  //             ],
  //           },
  //           healthcare: {
  //             total: 14816.68,
  //             transactionIds: [
  //               "d5f2f351-46e7-489e-a3e7-cf8e910eb2a9",
  //               "bc19c6ac-7ef9-426e-b1b7-1810bcfddec5",
  //               "e39f7cdf-16a7-4db6-9f80-d40cbe3c3624",
  //             ],
  //           },
  //         },
  //         discretionary: 4080.9,
  //         nonDiscretionary: 108040.95,
  //       },
  //     },
  //     {
  //       title: "Debt Identification",
  //       data: {
  //         loans: [
  //           {
  //             type: "home",
  //             outstandingBalance: 130000,
  //             EMIs: 5205,
  //             transactionIds: [
  //               "179b719e-ed5c-4623-b465-a78093dbf0e5",
  //               "c3cb0ef3-f173-440c-a141-f3762efc38b9",
  //             ],
  //           },
  //           {
  //             type: "personal",
  //             outstandingBalance: 85000,
  //             EMIs: 3800,
  //             transactionIds: [
  //               "d831267e-660e-4375-9005-916670052514",
  //               "7ebd4066-13da-44c0-86fd-ac35b176e3f6",
  //             ],
  //           },
  //         ],
  //       },
  //     },
  //     {
  //       title: "Asset Identification",
  //       data: {
  //         savings: {
  //           total: 60050,
  //           linkedAccounts: [
  //             {
  //               type: "FD",
  //               balance: 50000,
  //               transactionId: "9e5fb545-76ee-40d8-97f9-8162a4c94bb2",
  //             },
  //           ],
  //         },
  //         investments: {
  //           total: 4800,
  //           linkedAccounts: [
  //             {
  //               type: "SIP",
  //               balance: 2300,
  //               transactionId: "3b056e36-2369-4567-af1e-320c1fc8ebb8",
  //             },
  //           ],
  //         },
  //       },
  //     },
  //     {
  //       title: "Insurance Affordability Index",
  //       data: {
  //         disposableIncome: 61000,
  //         debtToIncomeRatio: 0.34,
  //         existingPolicies: [
  //           {
  //             name: "TATA AIA",
  //             premium: 7200,
  //             transactionIds: ["b37ab860-8c9d-4c65-accb-d8dfceafaa39"],
  //           },
  //         ],
  //         affordabilityScore: 0.18,
  //       },
  //     },
  //     {
  //       title: "Financial Health Assessment",
  //       data: {
  //         debtToIncomeRatio: "34%",
  //         recommendation:
  //           "Stable financial position but potential risk in case of unexpected expenses",
  //       },
  //     },
  //     {
  //       title: "Insurance Recommendations",
  //       data: {
  //         creditLinkedInsurance: [
  //           {
  //             planName: "Credit Health Premium",
  //             sumInsured: "₹500,000",
  //             premium: "₹5,000/year",
  //             linkedCreditProduct: "Home Loan",
  //             additionalBenefits: ["Accidental Death", "Critical Illness"],
  //           },
  //         ],
  //         healthInsurance: [
  //           {
  //             planName: "Health Secure",
  //             sumInsured: "₹500,000",
  //             premium: "₹5,000/year",
  //             numberInsured: 2,
  //             coverages: ["OPD Coverage", "Critical Illness"],
  //             additionalBenefits: "No-Claim Bonus",
  //           },
  //         ],
  //       },
  //     },
  //   ]);

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

  const renderData = (dataItem) => {
    if (Array.isArray(dataItem)) {
      return dataItem.map((item, index) => (
        <Box key={index} sx={{ marginBottom: 2 }}>
          {renderData(item)} {/* Recursive call for array items */}
        </Box>
      ));
    } else if (typeof dataItem === "object" && dataItem !== null) {
      return Object.entries(dataItem).map(([key, value], index) => (
        <Box
          key={index}
          sx={{ marginBottom: 2, display: "flex", alignItems: "center" }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold", marginRight: 1 }}>
            {key.charAt(0).toUpperCase() + key.slice(1)}:
          </Typography>
          <Box sx={{ marginLeft: 1 }}>
            {renderData(value)} {/* Recursive call for object values */}
          </Box>
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
                    <Box key={index} sx={{ marginBottom: 4 }}>
                      {item.title == "Insurance Recommendations" && (
                        <>
                          {item.title && (
                            <Typography
                              variant="h4"
                              sx={{ color: "#24b4b3", marginBottom: 2 }}
                            >
                              {item.title}
                            </Typography>
                          )}

                          <Box className="description">
                            {renderData(item.data)} {/* Call to renderData */}
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
                    <Box key={index} sx={{ marginBottom: 4 }}>
                      {item.title !== "Insurance Recommendations" && (
                        <>
                          {item.title && (
                            <Typography
                              variant="h4"
                              sx={{ color: "#24b4b3", marginBottom: 2 }}
                            >
                              {item.title}
                            </Typography>
                          )}

                          <Box className="description">
                            {renderData(item.data)} {/* Call to renderData */}
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
