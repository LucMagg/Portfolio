import React from 'react'
import { useTranslation } from 'react-i18next'
import { handleScroll } from '../../assets/utils'

import ThemeToggler from '../ThemeToggler/ThemeToggler'
import LanguageToggler from '../LanguageToggler/LanguageToggler'
import { NavListItemWrapper, StyledA, TogglersWrapper } from './Wrappers'


export default function NavMenu() {
  const { t } = useTranslation()
  const navItems = t('navitems', { returnObjects: true }) as Record<string, string>  

  return (
    <>
      { Object.values(navItems).map((navItem) => {
        return (
          <NavListItemWrapper key={ navItem }>
            <StyledA href='/' onClick={ (e) => handleScroll(e, navItem) }>
              { navItem }
            </StyledA>
          </NavListItemWrapper>
        )
      })}
      <TogglersWrapper>
        <ThemeToggler width={ 67 } />
        <LanguageToggler size={ 32 } />
      </TogglersWrapper>
    </>
  )
}