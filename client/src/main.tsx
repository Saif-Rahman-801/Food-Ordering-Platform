import ReactDOM from "react-dom/client";
import "./global.css";
import "./index.css"
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes.tsx";
import "@fontsource/lexend";
import 'aos/dist/aos.css';
import AOS from 'aos';
import React from "react";

AOS.init()

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
