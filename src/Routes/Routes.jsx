import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../Layouts/Root";
import AddPaintingandDrawing from "../Pages/AddPaintingandDrawing/AddPaintingandDrawing";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import PaintingAndDrawing from "../Pages/PaintingAndDrawing/PaintingAndDrawing";
import Register from "../Pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: 'painting-and-drawing',
          element: <PaintingAndDrawing></PaintingAndDrawing>
        },
        {
          path: 'add-painting-and-drawing',
          element: <PrivateRoutes>
            <AddPaintingandDrawing></AddPaintingandDrawing>
          </PrivateRoutes>
        }
      ]
    },
  ]);

  export default router