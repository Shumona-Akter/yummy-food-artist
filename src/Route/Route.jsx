import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layoutes/MainLayout";
import Home from "../pages/Home/Home";
import ErrorLayout from "../Layoutes/ErrorLayout";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement:<ErrorLayout></ErrorLayout>,
      children:[{
        path:"/",
        element:<Home></Home>,
        errorElement:<ErrorLayout></ErrorLayout>,
      }]
    },
  ]);

export default router  