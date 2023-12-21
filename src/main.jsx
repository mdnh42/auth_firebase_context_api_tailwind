import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main.jsx';
import Home from './components/Home.jsx';
import Register from './components/Register.jsx';
import Login from './components/Login.jsx';
import AuthProviders from './provider/AuthProviders.jsx';
import Orders from './components/Orders.jsx';
import PrivateRouts from './Routes/PrivateRouts.jsx';
import UserProfile from './components/UserProfile.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      }, {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/profile',
        element: <PrivateRouts><UserProfile></UserProfile></PrivateRouts>
      },
      {
        path: '/orders',
        element: <PrivateRouts><Orders></Orders></PrivateRouts>
      },
    ]
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
