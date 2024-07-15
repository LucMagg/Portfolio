import React from 'react'
import { useTranslation } from 'react-i18next'

import { SectionWrapper, StyledImg, DLButton, StyledLink } from './Wrappers'

export default function CVSection() {
  const { t } = useTranslation()

  return (
    <SectionWrapper>
      <DLButton>
        <StyledLink to='/CV_Luc_Maggiotto_Developpeur_Full-Stack.pdf' tabIndex={-1} target='_blank' download>{t('section5.download')}</StyledLink>
      </DLButton>
      <StyledImg src='/CV.JPG'/>
    </SectionWrapper>
  )
}