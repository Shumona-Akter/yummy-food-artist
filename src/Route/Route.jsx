import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layoutes/MainLayout";
import Home from "../pages/Home/Home";
import ErrorLayout from "../Layoutes/ErrorLayout";
import Login from "../pages/Login";
import Resister from "../pages/Resister";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement:<ErrorLayout></ErrorLayout>,
      children:[
        {
        path:"/",
        element:<Home></Home>,
        errorElement:<ErrorLayout></ErrorLayout>,
        loader:() => fetch("https://yummy-server-shumona-akter.vercel.app/")
      },
        {
        path:"/login",
        element:<Login/>,
        errorElement:<ErrorLayout></ErrorLayout>,
      },
        {
        path:"/resister",
        element:<Resister/>,
        errorElement:<ErrorLayout></ErrorLayout>,
      },
    ]
    },
  ]);

export default router  