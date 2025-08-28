import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '@/components/layout/MainLayout.jsx'
import HomePage from '@/pages/HomePage.jsx'
import ProductsPage from '@/pages/ProductsPage.jsx'
import ProductDetailsPage from '@/pages/ProductDetailsPage.jsx'
import OrderPage from '@/pages/OrderPage.jsx'
import AboutPage from '@/pages/AboutPage.jsx'
import NotFoundPage from '@/pages/NotFoundPage.jsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'products', element: <ProductsPage /> },
      { path: 'products/:id', element: <ProductDetailsPage /> },
      { path: 'order', element: <OrderPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])
