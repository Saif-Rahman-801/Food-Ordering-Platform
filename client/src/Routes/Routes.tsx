import Layout from "@/Layout/Layout";
import { Navigate, createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <div>Home component coming</div>,
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
