import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
// import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
// const router = createBrowserRouter([{}]);
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
