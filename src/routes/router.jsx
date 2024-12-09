import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../components/CategoryNews/CategoryNews";
import AuthLayout from "../layouts/AuthLayout/AuthLayout";
import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";
import NewsDetails from "../components/NewsDetails.jsx/NewsDetails";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
      children: [
        {
            path: "",
            element: <Navigate to={`/category/01`}></Navigate>
        },
        {
            path: "category/:id",
            element: <CategoryNews></CategoryNews>,
            loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
        }
      ]
    },
    {
      path: "news/:id",
      element: <PrivateRoute>
                    <NewsDetails></NewsDetails>
               </PrivateRoute>,
      loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
    },
    {
      path: "auth",
      element: <AuthLayout></AuthLayout>,
      children: [
        {
            path: "login",
            element: <Login></Login>,
        },
        {
            path: "signup",
            element: <Signup></Signup>,
        },
      ]
    },
    {
      path: "*",
      element: <ErrorPage></ErrorPage>
    },
  ]);

export default router;