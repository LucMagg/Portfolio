import React from 'react'
import { useTranslation } from 'react-i18next'

import { StyledFooter, StyledSpan, StyledA } from './Wrappers'


export default function Footer() {
  const { t } = useTranslation()

  return (
    <StyledFooter>
      <StyledSpan>{ t('footer.text1') }</StyledSpan>
      <StyledA href="mailto:luc.maggiotto@gmail.com" tabIndex={ -1 }>Luc Maggiotto</StyledA>
      <StyledSpan>{ t('footer.text2') }</StyledSpan>
    </StyledFooter>
  )
}