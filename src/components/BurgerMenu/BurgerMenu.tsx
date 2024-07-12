import React, { useState} from 'react'
import { useTheme } from 'styled-components'
import { useTranslation } from 'react-i18next'

import ThemeToggler from '../ThemeToggler/ThemeToggler'
import LanguageToggler from '../LanguageToggler/LanguageToggler'

import { StyledButton, MenuWrapper, MenuListWrapper, CloseButton, NavListItemWrapper, StyledA, TogglersWrapper } from './Wrappers'
import { handleScroll } from '../../assets/utils'



export default function BurgerMenu ({ size }:{size : number }) {
  const theme = useTheme()
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [animationClass, setAnimationClass] = useState('')

  const { t } = useTranslation()
  const navItems = t('navitems', { returnObjects: true }) as Record<string, string>

  const handleBurgerClick = () => {
    if (menuIsOpen) {
      setAnimationClass('close')
      setTimeout(() => {
        setMenuIsOpen(false)
        setAnimationClass('')
      }, 400)
    } else {
      setMenuIsOpen(true);
      setAnimationClass('open')
    }
  }

  const handleNavItemClick = (e, navItem) => {
    setAnimationClass('close')
    setTimeout(() => {
      setMenuIsOpen(false)
      setAnimationClass('')
    }, 400)
    handleScroll(e, navItem)
  }

  return (
    <>
      <StyledButton onClick={ handleBurgerClick }>
        <svg xmlns="http://www.w3.org/2000/svg" width={ size } height={ size } viewBox="0 0 24 24" fill="none">
          <rect width={24} height={24} fill={ theme.headerBackgroundColor }/>
          <path d="M3 6.00092H21M3 12.0009H21M3 18.0009H21" stroke={ theme.textColor } strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </StyledButton>
      {menuIsOpen && animationClass && (
        <MenuWrapper className={ animationClass }>
          <MenuListWrapper>
            <CloseButton onClick={ handleBurgerClick }>
              <svg xmlns="http://www.w3.org/2000/svg" width={ 32 } height={ 32 } viewBox="0 0 448 512">
                <path 
                  d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
                  fill={ theme.mainBackGroundColor }
                />
              </svg>
            </CloseButton>
            { Object.values(navItems).map((navItem) => {
              return (
                <NavListItemWrapper key={ navItem }>
                  <StyledA href='/' onClick={ (e) => handleNavItemClick(e, navItem) }>
                    { navItem }
                  </StyledA>
                </NavListItemWrapper>
              )
            })}
            <TogglersWrapper>
              <ThemeToggler width={ 67 } />
              <LanguageToggler size={ 32 } />
            </TogglersWrapper>    
          </MenuListWrapper>  
        </MenuWrapper>
        )}
    </>
  )
}