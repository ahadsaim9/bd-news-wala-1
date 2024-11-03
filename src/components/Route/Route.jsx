import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorElement from "../ErrorElement/ErrorElement";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import Career from "../../Pages/Career/Career";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/career",
        element: <Career></Career>,
      },
    ],
  },
]);

export default router;
