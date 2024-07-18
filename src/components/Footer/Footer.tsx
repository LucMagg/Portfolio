import React from 'react'
import { useTranslation } from 'react-i18next'
import { useFooterContext } from '../../hooks/useFooterContext'

import { StyledFooter, StyledSpan, StyledA } from './Wrappers'


export default function Footer() {
  const { t } = useTranslation()

  const { footerRef } = useFooterContext()

  return (
    <StyledFooter ref={ footerRef }>
      <StyledSpan>{ t('footer.text1') }</StyledSpan>
      <StyledA href="mailto:luc.maggiotto@gmail.com" tabIndex={ -1 }>Luc Maggiotto</StyledA>
      <StyledSpan>{ t('footer.text2') }</StyledSpan>
    </StyledFooter>
  )
}