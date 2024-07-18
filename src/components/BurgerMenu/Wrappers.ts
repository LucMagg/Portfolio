import styled from 'styled-components'
import { Heading3 } from '../../data/Theme/globalStyles'
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

export const MenuListWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`

export const CloseButton = styled.button`
  border: none;
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: ${ (props) => props.theme.textColor };
`


export const NavListItemWrapper = styled.li`
  list-style: none;
  width: fit-content;
`

export const StyledA = styled.a`
  height: 100%;
  width: 100%;
  text-decoration: none;
  padding-bottom: 3px;
  ${Heading3};
  color: ${props => props.theme.mainBackGroundColor};
  background-color: ${props => props.theme.textColor};

  &:hover {
    color: ${props => props.theme.highContrastTextColor};
    transform: scale(1.1);
    @media (prefers-reduced-motion: no-preference) {
      transition: scale 0.4s;
    }
  }  
`

export const TogglersWrapper = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  min-width: 150px;
  list-style: none;
`