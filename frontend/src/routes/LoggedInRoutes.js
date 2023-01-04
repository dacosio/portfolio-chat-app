import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { selectUser } from "../features/user/userSlice";
import HomePage from "../pages/HomePage";

const LoggedInRoutes = () => {
  const { user } = useSelector(selectUser);
  return user ? <Outlet /> : <HomePage />;
};

export default LoggedInRoutes;
