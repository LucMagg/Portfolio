import React, { useState, useEffect } from 'react'

import PortfolioCard from '../PortfolioCard/PortfolioCard'
import data from '../../data/portfolio/portfolio.json'
import { commonTheme } from '../../data/Theme/themes'

import { ProjectsWrapper, PortfolioCardWrapper } from './Wrappers'

export default function Portfolio({ mainPage, filter }: { mainPage: boolean, filter?: string }) {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    };
  }, [])

  return (
    <ProjectsWrapper>
      { data.map((item) => {
        if ((!mainPage && (item.type === filter || filter === 'all')) || (item.majorProject && mainPage))  {
          return (
            <PortfolioCardWrapper key={ item.title }>
              <PortfolioCard item={ item } type={ width > commonTheme.tabletBreakpoint ? "desktop" : "mobile" } />
            </PortfolioCardWrapper>
          )
        }
      })
      }
    </ProjectsWrapper>
  )
 
}