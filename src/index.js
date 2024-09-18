import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {
  createBrowserRouter, RouterProvider
} from "react-router-dom"
import Home from './pages/home/Home';
import SingleProduct from './pages/home/SingleProduct';

const router = createBrowserRouter([
  {
    path: '/', 
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/shop/:id',
        element: <SingleProduct />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} /> 
  </React.StrictMode>
);