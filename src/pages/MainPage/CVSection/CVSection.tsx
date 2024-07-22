import React from 'react'
import { useTranslation } from 'react-i18next'

import { SectionWrapper, StyledImg, StyledLink } from './Wrappers'

export default function CVSection() {
  const { t } = useTranslation()

  return (
    <SectionWrapper>
      <StyledLink to='/CV_Luc_Maggiotto_Developpeur_Full-Stack.pdf' target='_blank' download>{t('section5.download')}</StyledLink>
      <StyledImg src='/CV.JPG' alt={ t('navitems.nav4')}/>
    </SectionWrapper>
  )
}