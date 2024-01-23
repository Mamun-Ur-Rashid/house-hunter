import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Main from './layout/Main.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './layout/Router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}>
   </RouterProvider>
  </React.StrictMode>,
)
