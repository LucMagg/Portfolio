import React from 'react'
import {useLoaderData } from 'react-router-dom'
import { PortfolioItemType } from '../../data/portfolio/portfolioTypes'
import ErrorPage from '../ErrorPage/ErrorPage'

export default function PortfolioFocusPage() {
  const project = useLoaderData() as PortfolioItemType


  return (
    <p>{ project.title }</p>
  )
}