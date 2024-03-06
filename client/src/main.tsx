import ReactDOM from "react-dom/client";
import "./global.css";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes.tsx";
import "@fontsource/lexend";
import "aos/dist/aos.css";
import AOS from "aos";
import React from "react";
import Auth0ProviderWithNavigate from "./auth/Auth0ProviderWithNavigate.tsx";

AOS.init();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Auth0ProviderWithNavigate>
      <RouterProvider router={router} />
    </Auth0ProviderWithNavigate>
  </React.StrictMode>
);
