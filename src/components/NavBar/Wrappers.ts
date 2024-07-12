import styled from 'styled-components'
import { infiniteScale } from '../../assets/animations'


export const NavWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`

export const LinkListWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  width: 90%;
`

export const LogoWrapper = styled.li`
  list-style: none;
  height: ${props => props.theme.headerMobileHeight - 20}px;
  aspect-ratio: 1;
  &:hover {
    @media (prefers-reduced-motion: no-preference) {
      animation: ${infiniteScale} 1s ease-in-out infinite;
    }
  }

  @media (min-width: ${(props) => props.theme.mobileBreakpoint}px) {
    height: ${props => props.theme.headerNormalHeight - 30}px;
  }
`

export const LogoLink = styled.a`
  height: 100%;
  width: 100%;
  text-decoration: none;
  padding: 0;
  background-color: ${props => props.theme.headerBackgroundColor};

  &:hover {
    color: ${props => props.theme.highContrastTextColor};
    transform: scale(1.1);
    @media (prefers-reduced-motion: no-preference) {
      transition: scale 0.4s;
    }
  }

  &:focus {
    outline-offset: 5px;
    border-radius: 10px;
    border-color: ${props => props.theme.focusRingColor};
    transition: color 0s;
  }
`
