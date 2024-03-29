import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { Error } from '@/components/Error'
import { Resume } from '@/components/Resume'
import '@/styles/index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Resume />}
      errorElement={
        <Error
          statusCode={404}
          error="Page Not Found"
        />
      }
    />
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
