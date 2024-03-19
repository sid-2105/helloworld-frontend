import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";


import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import AboutPage from "./Pages/AboutPage.jsx";
import CommunityPage from "./Pages/CommunityPage.jsx";
import GalleryPage from "./Pages/GalleryPage.jsx";
import ContactPage from "./Pages/ContactPage.jsx";
import HelpPage from "./Pages/HelpPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App/>,
      },
      {
        path: "/about",
        element: <AboutPage/>,
      },
      
      {
        path:"/community",
        element:<CommunityPage/>,
      },

      {
        path:"/contact",
        element:<ContactPage/>,
      },
      
      {
        path:"/help",
        element:<HelpPage/>,
      },

      {
        path:"/gallery",
        element:<GalleryPage/>
      }
    
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
