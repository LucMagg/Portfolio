import React, { useEffect, useState, useRef } from 'react'
import { useTheme } from 'styled-components'
import { useTranslation } from 'react-i18next'

import BackArrow from '../BackArrow/BackArrow'
import NavMenu from '../NavMenu/NavMenu'

import { StyledLi, StyledButton, MenuWrapper, MenuListWrapper } from './Wrappers'
import { useScrollNavigate } from '../../hooks/useScrollNavigate'


export default function BurgerMenu ({ size }:{size : number }) {
  const theme = useTheme()
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [animationClass, setAnimationClass] = useState('')
  const menuRef = useRef<HTMLDivElement>(null)

  const { t } = useTranslation()
  const scrollNavigate = useScrollNavigate()

  const closeMenu = () => {
    setAnimationClass('close')
    setTimeout(() => {
      setMenuIsOpen(false)
      setAnimationClass('')
    }, 400)
  }

  const handleOpenCloseMenu = () => {
    if (menuIsOpen) {
      closeMenu()
    } else {
      setMenuIsOpen(true);
      setAnimationClass('open')
    }
  }

  const handleClick = (e: React.MouseEvent<HTMLElement>, anchor: string) => {
    e.preventDefault()
    closeMenu()
    scrollNavigate('/', anchor)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      closeMenu()
    } else if (e.key === ' ') {
      e.preventDefault()
    }
  }

  const handleFocus = () => {
    const focusableElements = document.querySelectorAll('a, button, input, textarea, [tabindex]')

    focusableElements.forEach(element => {
      const el = element as HTMLElement

      if (menuRef.current && menuRef.current.contains(el)) return

      if (menuIsOpen) {
        const currentTabIndex = el.getAttribute('tabindex')
        if (currentTabIndex !== '-1') {
          el.setAttribute('data-original-tabindex', currentTabIndex || '')
          el.setAttribute('tabindex', '-1')
        }
      } else {
        const originalTabIndex = el.getAttribute('data-original-tabindex')
        if (originalTabIndex !== null) {
          if (originalTabIndex === '') {
            el.removeAttribute('tabindex')
          } else {
            el.setAttribute('tabindex', originalTabIndex)
          }
          el.removeAttribute('data-original-tabindex')
        }
      }
    })
  }

  useEffect(() => {
    if (menuIsOpen) {
      document.addEventListener('keydown', handleKeyDown)
      setTimeout(() => handleFocus(), 0)
    } else {
      document.removeEventListener('keydown', handleKeyDown)
      handleFocus()
    }
  }, [menuIsOpen])

  return (
    <StyledLi>
      <StyledButton onClick={ handleOpenCloseMenu } aria-label={ menuIsOpen ? t('burgerMenu.close') : t('burgerMenu.open') }>
        <svg xmlns="http://www.w3.org/2000/svg" width={ size } height={ size } viewBox="0 0 24 24" fill="none">
          <rect width={24} height={24} fill={ theme.headerBackgroundColor }/>
          <path d="M3 6.00092H21M3 12.0009H21M3 18.0009H21" stroke={ theme.textColor } strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </StyledButton>
      {menuIsOpen && animationClass && (
        <MenuWrapper className={ animationClass } ref={ menuRef }>
          <MenuListWrapper>
            <StyledLi><BackArrow onClick={ handleOpenCloseMenu } ariaLabel={ t('burgerMenu.close') } size={ 32 } color={ theme.mainBackGroundColor }/></StyledLi>
            <NavMenu onLinkClick= { handleClick } color={ theme.mainBackGroundColor } />
          </MenuListWrapper>  
        </MenuWrapper>
        )}
    </StyledLi>
  )
}