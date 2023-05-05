import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layoutes/MainLayout";
import Home from "../pages/Home/Home";
import ErrorLayout from "../Layoutes/ErrorLayout";
import Login from "../pages/Login";
import Resister from "../pages/Resister";
import ChefDetailsmain from "../pages/Home/ChefDetails/ChefDetailsmain";
import PrivateRoutes from "./PrivateRoutes";
import Blog from "../pages/Blog/Blog";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement:<ErrorLayout></ErrorLayout>,
      children:[
        {
        path:"/",
        element:<Home></Home>,
        // errorElement:<ErrorLayout></ErrorLayout>,
        loader:() => fetch("https://yummy-server-shumona-akter.vercel.app/")
      },
        {
        path:"/login",
        element:<Login/>,
        // errorElement:<ErrorLayout></ErrorLayout>,
      },
        {
        path:"/resister",
        element:<Resister/>,
        // errorElement:<ErrorLayout></ErrorLayout>,
      },
      {
        path:'/:id',
        element:<PrivateRoutes><ChefDetailsmain></ChefDetailsmain></PrivateRoutes>,
        // errorElement:<ErrorLayout></ErrorLayout>,
        loader: ({params})=> fetch(`https://yummy-server-shumona-akter.vercel.app/chef/${params.id}`)
      },
      {
        path:'/blog',
        element:<Blog></Blog>,
        // errorElement:<ErrorLayout></ErrorLayout>,
       }
    ]
    },
  ]);

export default router  