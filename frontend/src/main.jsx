import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/Login/index.jsx';
import Notes from './pages/Notes/index.jsx';
import SignUp from './pages/SignUp/index.jsx';
import  axios  from 'axios';
import { Provider } from 'react-redux';
import store from '../store.js';
axios.defaults.baseURL = `http://localhost:5000`
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>
  },
  
  {
    path: "/notes",
    element: <Notes/>
  },
  {
    path: "/sign-up",
    element: <SignUp/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      {/* <App /> */} 
    </Provider>
  </React.StrictMode>,
)
