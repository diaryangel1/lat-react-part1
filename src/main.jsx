import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/login.jsx'
import RegisterPage from './pages/register.jsx'
import ErrorPage from './pages/404.jsx'
import ProductsPage from './pages/products.jsx'
import ProfilePage from './pages/profile.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    // bikin element yang mau dirender di page
    // membuat main page dengan mengubah div yang ada di element
    element: <div
    className='flex flex-col justify-center min-h-screen items-center bg-slate-200'>
        <h1 className="font-bold text-4xl">
          SELAMAT DATANG GOKILLLL</h1>
          {/* menampilkan button YANG LANGSUNG PINDAH KE login page */}
          <button onClick={() => router.navigate('/Login')} className='bg-blue-500 p-3 rounded-lg text-white font-bold mt-5'>GET STARTED</button>
      </div>,
    errorElement: <ErrorPage/> 
  },

  {
    path: '/Login',
    element: <LoginPage />,},

  {
      path: '/Register',
      element: <RegisterPage />,
    },
    {
      path: '/products',
      element: <ProductsPage />,
    }
    // up59 bikin path profile
    ,{
      path: '/profile',
      element: <ProfilePage/>,
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
    
    </React.StrictMode>,
)
