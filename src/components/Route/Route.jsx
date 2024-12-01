import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorElement from "../ErrorElement/ErrorElement";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Home/Register/Register";
import News from "../../Pages/News/News";
import PrivateRoute from "./PrivateRoute";
import About from "../../Pages/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/news.json"),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/news/:id",
        element: (
          <PrivateRoute>
            <News></News>
          </PrivateRoute>
        ),
        loader: () => fetch("/news.json"),
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
