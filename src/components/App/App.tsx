import React from 'react'
import { createBrowserRouter, RouterProvider, LoaderFunctionArgs } from 'react-router-dom'
import Layout from '../../pages/Layout/Layout'
import MainPage from '../../pages/MainPage/MainPage'
import ErrorPage from '../../pages/ErrorPage/ErrorPage'
import PortfolioPage from '../../pages/PortfolioPage/PorfolioPage'
import PortfolioFocusPage from '../../pages/PortfolioFocusPage/PortfolioFocusPage'
import data from '../../data/portfolio/portfolio.json'
import { PortfolioItemType } from '../../data/portfolio/portfolioTypes'
import { contractStr } from '../../assets/utils'

const getDataBySlug = ({ params }: LoaderFunctionArgs<PortfolioItemType>) => {
  if (params.slug === undefined) {
    throw new Response("Not Found", { status: 404 })
  }
  const dataBySlug = data.find((entry) => contractStr(entry.title) === params.slug)
  if (dataBySlug === undefined) {
    throw new Response("Not Found", { status: 404 })
  }
  return dataBySlug
}

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      
      children : [
        {
          index: true,
          element: <MainPage />
        },
        {
          path: '/projects',
          element: <PortfolioPage />
        },
        {
          path: '/projects/:slug',
          element: <PortfolioFocusPage />,
          loader: getDataBySlug, 
        }
      ]
    } 
  ], {
    basename: '/Portfolio'
  })

  return (
    <RouterProvider router={router} />
  )
}