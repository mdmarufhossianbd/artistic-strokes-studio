import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../Layouts/Root";
import AddPaintingandDrawing from "../Pages/AddPaintingandDrawing/AddPaintingandDrawing";
import Category from "../Pages/Category/Category";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyPaintsAndDrawing from "../Pages/MyPaintsAndDrawing/MyPaintsAndDrawing";
import PaintingAndDrawing from "../Pages/PaintingAndDrawing/PaintingAndDrawing";
import PaintingAndDrawingDetails from "../Pages/PaintingAndDrawingDetails/PaintingAndDrawingDetails";
import Register from "../Pages/Register/Register";
import UpdateCraft from "../Pages/UpdateCraft/UpdateCraft";
import PrivateRoutes from "./PrivateRoutes";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
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
          path: '/painting-and-drawing',
          element: <PaintingAndDrawing></PaintingAndDrawing>,
          loader: () => fetch('https://painting-and-drawing-server-beryl.vercel.app/paintings-and-drawings')
        },
        {
          path: '/paintings-and-drawings/:id',
          element: <PrivateRoutes><PaintingAndDrawingDetails></PaintingAndDrawingDetails></PrivateRoutes>,
          loader: ({params}) => fetch(`https://painting-and-drawing-server-beryl.vercel.app/paintings-and-drawings/${params.id}`)
        },
        {
          path: 'add-painting-and-drawing',
          element: <PrivateRoutes>
            <AddPaintingandDrawing></AddPaintingandDrawing></PrivateRoutes>
        },
        {
          path: '/my-paintings-and-drawings/',
          element: <PrivateRoutes><MyPaintsAndDrawing></MyPaintsAndDrawing></PrivateRoutes>,
          loader: ({params}) => fetch(`https://painting-and-drawing-server-beryl.vercel.app/user-added/${params.email}`)
        },
        {
          path: '/update-craft/:id',
          element: <PrivateRoutes><UpdateCraft></UpdateCraft></PrivateRoutes>,
          loader: ({params}) => fetch(`https://painting-and-drawing-server-beryl.vercel.app/paintings-and-drawings/${params.id}`)
        },
        {
          path: '/category/:category',
          element: <Category></Category>,
          loader: ({params}) => fetch(`https://painting-and-drawing-server-beryl.vercel.app/category/${params.category}`)
        }
      ]
    },
  ]);

  export default router