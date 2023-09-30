import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layout/Main";
import Others from "../Layout/Others";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import Home from "../Pages/Home/Home/Home";
import Details from "../Pages/Home/Details/Details";

  const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
          {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('http://localhost:5000/courses')
          },
          {
            path: '/details/:id',
            element: <Details></Details>,
            loader: ({params}) => fetch(`http://localhost:5000/courses/${params.id}`)
          }
        ]
    },
    {
      path: '/',
      element: <Others></Others>,
      children: [
        {
          path: '/sign-in',
          element: <SignIn></SignIn>
        },
        {
          path: '/sign-up',
          element: <SignUp></SignUp>
        }
      ]
    }
  ])

  export default router;