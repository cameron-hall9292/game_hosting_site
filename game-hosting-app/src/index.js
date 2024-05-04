import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

//import routes

import App from './App';
import Root from "./routes/root"
import ErrorPage from "./error_page";
import About from "./About";






import {
    createHashRouter,
    RouterProvider,
  } from "react-router-dom";
  
  import "./index.css";
  
  const router = createHashRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />
    },
    {
      path: "/Games",
      element: <App />

    },
    {
      path: "/About",
      element: <About />

    },




  ]);
  
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );




  // const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
 
  
//     <App />
  
// );


