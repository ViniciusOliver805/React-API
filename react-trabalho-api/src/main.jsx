import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider, Router, } from 'react-router-dom';

//Paginas
import Home from "./routes/Home";
import NewProduct from "./routes/NewProduct";

const router = createBrowserRouter([
  { 
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/new",
        element: <NewProduct />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
