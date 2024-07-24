import React from 'react'
import { useTranslation } from 'react-i18next'
import { useScrollNavigate } from '../../hooks/useScrollNavigate'

import ThemeToggler from '../ThemeToggler/ThemeToggler'
import LanguageToggler from '../LanguageToggler/LanguageToggler'
import { NavListItemWrapper, StyledLink, TogglersWrapper } from './Wrappers'

type NavMenuProps = {
  onLinkClick: (e: React.MouseEvent<HTMLElement>, navItem: string) => void
  color: string
}

export default function NavMenu({ onLinkClick, color }: NavMenuProps) {
  const { t } = useTranslation()
  const navItems = t('navitems', { returnObjects: true }) as Record<string, string>  

  const scrollNavigate = useScrollNavigate()

  

  return (
    <>
      { Object.values(navItems).map((navItem) => {
        return (
          <NavListItemWrapper key={ navItem }>
            <StyledLink to='/' onClick={ (e) => onLinkClick(e, navItem) } $color={ color } >
              { navItem }
            </StyledLink>
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