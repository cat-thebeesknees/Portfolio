// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//      <BrowserRouter>
//       <Routes>
//         <Route path="/*" element={<App />} />
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>,
// )

// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import { BrowserRouter } from "react-router-dom";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );

// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
