import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { infiniteScale } from '../../assets/animations'
import { FlexRowCenter, Focus } from '../../data/Theme/globalStyles'


export const NavWrapper = styled.nav`
  ${ FlexRowCenter };
  justify-content: space-around;
  width: 100%;
`

export const LinkListWrapper = styled.ul`
  ${ FlexRowCenter };
  justify-content: space-between;
  gap: 20px;
  width: 90%;
`

export const LogoWrapper = styled.li`
  list-style: none;
  height: ${ (props) => props.theme.headerMobileHeight - 20 }px;
  aspect-ratio: 1;
  &:hover {
    @media (prefers-reduced-motion: no-preference) {
      animation: ${infiniteScale} 1s ease-in-out infinite;
    }
  }

  @media (min-width: ${ (props) => props.theme.mobileBreakpoint }px) {
    height: ${ (props) => props.theme.headerNormalHeight - 30 }px;
  }
`

export const LogoLink = styled(Link)`
  height: 100%;
  width: 100%;
  text-decoration: none;
  padding: 0;
  background-color: ${ (props) => props.theme.headerBackgroundColor };

  &:hover {
    color: ${ (props) => props.theme.highContrastTextColor };
    transform: scale(1.1);
    @media (prefers-reduced-motion: no-preference) {
      transition: scale 0.4s;
    }
  }

  ${ Focus };
`
