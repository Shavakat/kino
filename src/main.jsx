import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from './Login.jsx'
import Reg from './Reg.jsx'
import Vost from './Vost.jsx'
import VostPsw from './VostPsw.jsx'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Reg",
    element: <Reg />,
  },
  {
    path: "/Vost",
    element: <Vost />,
  },
  {
    path: "/VostPsw",
    element: <VostPsw />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
