import Layout from "@/Layout/Layout";
import Hero from "@/components/Hero";
import { Navigate, createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Hero /> ,
      },
    ],
  },
  {
    path: "/user-profile",
    element: <div>User profile coming</div>,
  },
  {
    path: "*",
    element: <Navigate to={`/`} />,
  },
]);
