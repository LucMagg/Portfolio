import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { handleScroll } from '../../assets/utils'
import { useTheme } from 'styled-components'

import Logo from '../Logo/Logo'
import NavMenu from '../NavMenu/NavMenu'
import { NavWrapper, LinkListWrapper, LogoWrapper, LogoLink } from './Wrappers'
import BurgerMenu from '../BurgerMenu/BurgerMenu'


export default function NavBar() {
  const { t } = useTranslation()
  const theme = useTheme()

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])
 
  const svgSize = windowWidth >= theme.mobileBreakpoint ? (theme.headerNormalHeight - 30) : (theme.headerMobileHeight - 20)

  return (
    <NavWrapper>
      <LinkListWrapper>
        <LogoWrapper>
          <LogoLink href='/' onClick={ (e) => handleScroll(e, 'top') } aria-label={t('logo.alt')}>
            <Logo size={ svgSize } />
          </LogoLink>
        </LogoWrapper>
        { windowWidth >= theme.mobileBreakpoint ? <NavMenu /> : <BurgerMenu size={ svgSize }/> }
      </LinkListWrapper>
    </NavWrapper>
  )
}