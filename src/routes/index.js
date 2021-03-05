import React from "react";
import { Redirect } from "react-router-dom";

import Pageslogin from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
import Pagesregister from "../pages/Authentication/Register";
import PagesDirectory from "../pages/Extra Pages/pages-directory";

const authProtectedRoutes = [
  // DashBoard
  { path: "/dashboard", component: PagesDirectory },

  //Calendar

  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
];

const publicRoutes = [
  { path: "/logout", component: Logout },
  { path: "/login", component: Pageslogin },
  { path: "/register", component: Pagesregister },
];

export { authProtectedRoutes, publicRoutes };
