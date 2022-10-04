import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import ErrorPage from './Components/Pages/ErrorPage';
import List from './Components/List';
import Add from './Components/Pages/Add';
import CheckedList from './Components/Pages/CheckedList';
import EditList from './Components/Pages/EditList';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "list",
    element: <List />
  },
  {
    path: "add",
    element: <Add />
  },
  {
    path: "checked",
    element: <CheckedList />
  },
  {
    path: "edit",
    element: <EditList />
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <RouterProvider router={router} />

);

