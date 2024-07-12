import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next' 

import { PortfolioSectionWrapper, ProjectsWrapper, MoreButton } from './Wrappers'
import { scrollToAnchor } from '../../../assets/utils'
import Portfolio from '../../../components/Portfolio/Portfolio'


export default function PortfolioSection() {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const goToPortfolio = () => {
    let p = new Promise((resolve) => { 
      navigate('/projects') 
      resolve(true)
    })
    p.then(() => { scrollToAnchor('top') })
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