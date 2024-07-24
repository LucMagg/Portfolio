import React from 'react'
import { useTranslation } from 'react-i18next' 

import { PortfolioSectionWrapper, ProjectsWrapper, MoreButton } from './Wrappers'
import { useScrollNavigate } from '../../../hooks/useScrollNavigate'
import Portfolio from '../../../components/Portfolio/Portfolio'


export default function PortfolioSection() {
  const { t } = useTranslation()
  const navigate = useScrollNavigate()

  const goToPortfolio = () => {
    navigate('/projects', 'top') 
  }

  return (
    <PortfolioSectionWrapper>
      <ProjectsWrapper>
        <Portfolio mainPage={ true } />
      </ProjectsWrapper>
      <MoreButton onClick={goToPortfolio}>{ t('section3.button') }</MoreButton>
    </PortfolioSectionWrapper>
  )

}