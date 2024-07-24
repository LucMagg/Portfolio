import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FlexColumnCenter, Heading3, Focus } from '../../data/Theme/globalStyles'
import { slideFromTopRightCorner, slideToTopRightCorner } from '../../assets/animations'


export const StyledLi = styled.li`
  list-style: none;
`

export const StyledButton = styled.button`
  border: 1px solid ${ (props) => props.theme.textColor };
  border-radius: 10px;
  box-sizing: content-box;
  background-color: ${ (props) => props.theme.headerBackGroundColor };
  height: ${ (props) => props.theme.headerMobileHeight - 20 }px;
  cursor: pointer;

  ${ Focus };
`

export const MenuWrapper = styled.div`
  z-index: 3;
  position: absolute;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${ (props) => props.theme.textColor };
  opacity: 0.9;

  @media (prefers-reduced-motion: no-preference) {
    &.open {
      animation: ${ slideFromTopRightCorner } 0.4s ease;
    }
    &.close {
      animation: ${ slideToTopRightCorner } 0.4s ease;
    }
  }
`

export const MenuListWrapper = styled.ul`
  width: 100%;
  height: 100%;
  position: relative;
  gap: 20px;
  ${ FlexColumnCenter };
`