import React from 'react'
import { useTranslation } from 'react-i18next'

import { LanguageTogglerWrapper, StyledSpan } from './Wrappers'
import WorldSvg from './WorldSvg'

export default function LanguageToggler({ size }) {
  const { t, i18n } = useTranslation()

  const handleChangeLanguage = () => {
    const newValue = i18n.language === 'fr' ? 'en' : 'fr'
    i18n.changeLanguage(newValue)
    document.documentElement.lang = newValue
  }

  return (
    <LanguageTogglerWrapper size={ size } onClick={handleChangeLanguage}>
      <WorldSvg size= { 26 } />
      <StyledSpan>{t('language')}</StyledSpan>
    </LanguageTogglerWrapper>
  )
}

