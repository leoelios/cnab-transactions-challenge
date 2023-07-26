import React from 'react'
import router from './routes'
import { RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <h1>asd</h1>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
