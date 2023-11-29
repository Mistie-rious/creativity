import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Root.jsx';
import Errorpage from './errorpage.jsx';
import Home from './Home.jsx';
import Teams from './Teams.jsx';
import Gallery from './Gallery.jsx';
import Aboutus from './Aboutus.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <Errorpage/>
  },
  {
    path: "home",
    element: <Home/>,
    errorElement: <Errorpage/>
  },
  {
    path: "gallery",
    element: <Gallery/>,
    errorElement: <Errorpage/>
  },
  {
    path: "teams",
    element: <Teams/>,
    errorElement: <Errorpage/>
  },
  {
    path: "aboutus",
    element: <Aboutus/>,
    errorElement: <Errorpage/>
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
