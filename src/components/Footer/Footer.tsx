import React from 'react'
import { useTranslation } from 'react-i18next'
import { useFooterContext } from '../../hooks/useFooterContext'
import { useScrollNavigate } from '../../hooks/useScrollNavigate'

import { StyledFooter, StyledSpan, StyledA } from './Wrappers'


export default function Footer() {
  const { t } = useTranslation()
  const navigate = useScrollNavigate()
  const { footerRef } = useFooterContext()

  const handleClick = (e:React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    navigate('/','contact')
  }

  return (
    <StyledFooter ref={ footerRef }>
      <StyledSpan>{ t('footer.text1') }</StyledSpan>
      <StyledA to="mailto:luc.maggiotto@gmail.com" onClick={ (e) => handleClick(e) } tabIndex={ -1 }>Luc Maggiotto</StyledA>
      <StyledSpan>{ t('footer.text2') }</StyledSpan>
    </StyledFooter>
  )
}