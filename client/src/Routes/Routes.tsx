import Layout from "@/Layout/Layout";
import HomePage from "@/components/Pages/HomePage";
import { Navigate, createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage /> ,
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
