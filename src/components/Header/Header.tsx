import React from 'react'
import { useTranslation } from 'react-i18next'

import { HeaderWrapper, H1 } from './Wrappers'

import NavBar from '../NavBar/NavBar'


export default function Header() {
  const { t } = useTranslation()

  return (
    <HeaderWrapper>
      <H1>{ t('h1') }</H1>
      <NavBar />
    </HeaderWrapper>
  )
}