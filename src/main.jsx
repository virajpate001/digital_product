import ReactDOM from "react-dom/client";
import React from "react";
import './index.css'
import App from './App.jsx'
import Home from './components/Home.jsx'

import {
  createBrowserRouter,
  Link,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />,
        }
      ],
    },
  ],
 
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
