// import React from "react";
// import "./Data.css"

// const Data = () => {
//     const data = [
//         {
//             "_id": {
//               "$oid": "65d498eca13b2deb27d54812"
//             },
//             "brokername": "Sharekhan",
//             "foundedin": "2000",
//             "accountopeningcharge": "₹750",
//             "brocragechargedforfANDo": "₹30 per trade",
//             "brocragechargedforstocks": "₹0 for delivery",
//             "accountmaintanencecharge": "₹0",
//             "customercare": "24/7"
//         },

//         {
//             "_id": {
//               "$oid": "65d498eca13b2deb27d54816"
//             },
//             "brokername": "Motilal Oswal",
//             "foundedin": "1987",
//             "accountopeningcharge": "₹0",
//             "brocragechargedforf&o": "₹30 per trade",
//             "brocragechargedforstocks": "₹0 for delivery",
//             "accountmaintanencecharge": "₹400 per year",
//             "customercare": "24/7"
//           },
//           {
//             "_id": {
//               "$oid": "65d498eca13b2deb27d54810"
//             },
//             "brokername": "Upstox",
//             "foundedin": "2011",
//             "accountopeningcharge": "₹0",
//             "brocragechargedforf&o": "₹20 per trade",
//             "brocragechargedforstocks": "₹0 for delivery",
//             "accountmaintanencecharge": "₹0",
//             "customercare": "24/7"
//           },
//           {
//             "_id": {
//               "$oid": "65d498eca13b2deb27d54813"
//             },
//             "brokername": "5paisa",
//             "foundedin": "2016",
//             "accountopeningcharge": "₹0",
//             "brocragechargedforf&o": "₹20 per trade",
//             "brocragechargedforstocks": "₹0 for delivery",
//             "accountmaintanencecharge": "₹45 per month",
//             "customercare": "24/7"
//           },
//           {
//             "_id": {
//               "$oid": "65d498eca13b2deb27d54814"
//             },
//             "brokername": "ICICI Direct",
//             "foundedin": "1995",
//             "accountopeningcharge": "₹0",
//             "brocragechargedforf&o": "₹50",
//             "brocragechargedforstocks": "₹20",
//             "accountmaintanencecharge": "₹300",
//             "customercare": "24/7"
//           },
//           {
//             "_id": {
//               "$oid": "65d498eca13b2deb27d54818"
//             },
//             "brokername": "Axis Direct",
//             "foundedin": "2005",
//             "accountopeningcharge": "₹900",
//             "brocragechargedforf&o": "₹30 per trade",
//             "brocragechargedforstocks": "₹0 for delivery",
//             "accountmaintanencecharge": "₹0",
//             "customercare": "24/7"
//           },
//           {
//             "_id": {
//               "$oid": "65d498eca13b2deb27d5480f"
//             },
//             "brokername": "Zerodha",
//             "foundedin": "2010",
//             "accountopeningcharge": "₹200",
//             "brocragechargedforf&o": "₹20 per trade",
//             "brocragechargedforstocks": "₹0 for delivery",
//             "accountmaintanencecharge": "₹0",
//             "customercare": "24/7"
//           },
//           {
//             "_id": {
//               "$oid": "65d498eca13b2deb27d54815"
//             },
//             "brokername": "Kotak Securities",
//             "foundedin": "1994",
//             "accountopeningcharge": "₹750",
//             "brocragechargedforf&o": "₹30 per trade",
//             "brocragechargedforstocks": "₹0 for delivery",
//             "accountmaintanencecharge": "₹0",
//             "customercare": "24/7"
//           },
//           {
//             "_id": {
//               "$oid": "65d498eca13b2deb27d54811"
//             },
//             "brokername": "Angel Broking",
//             "foundedin": "1987",
//             "accountopeningcharge": "₹0",
//             "brocragechargedforf&o": "₹20 per trade",
//             "brocragechargedforstocks": "₹0 for delivery",
//             "accountmaintanencecharge": "₹450 per year",
//             "customercare": "24/7"
//           },
//           {
//             "_id": {
//               "$oid": "65d498eca13b2deb27d54817"
//             },
//             "brokername": "HDFC Securities",
//             "foundedin": "2000",
//             "accountopeningcharge": "₹999",
//             "brocragechargedforf&o": "₹20 per trade",
//             "brocragechargedforstocks": "₹0 for delivery",
//             "accountmaintanencecharge": "₹0",
//             "customercare": "24/7"
//           }
          
//     ];

//     return (
//         <div className="container">
//             {data.map((entry) => (
//                 <div key={entry._id.$oid} className="data-card">
//                     <h2>Broker: {entry.brokername}</h2>
//                     <p>Founded in: {entry.foundedin}</p>
//                     <p>Account Opening Charge: {entry.accountopeningcharge}</p>
//                     <p>Brokerage Charge for F&O: {entry.brocragechargedforfANDo}</p>
//                     <p>Brokerage Charge for Stocks: {entry.brocragechargedforstocks}</p>
//                     <p>Account Maintenance Charge: {entry.accountmaintanencecharge}</p>
//                     <p>Customer Care: {entry.customercare}</p>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default Data;
