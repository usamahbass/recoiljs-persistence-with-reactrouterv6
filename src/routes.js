import React from "react";
import { Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

const routes = (isLoggin) => [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: !isLoggin ? <Login /> : <Navigate to="/dashboard" />,
  },
  {
    path: "/dashboard",
    element: isLoggin ? <Dashboard /> : <Navigate to="/login" />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
