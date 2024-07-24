import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FlexColumnCenter, Focus, Heading3 } from '../../data/Theme/globalStyles'


type LinkProps = {
  $color: string
}

export const NavListItemWrapper = styled.li`
  list-style: none;
  width: fit-content;
`

export const StyledLink = styled(Link)<LinkProps>`
  display: block;
  height: 100%;
  width: 100%;
  text-decoration: none;
  padding-bottom: 3px;
  ${ Heading3 };
  color: ${ (props) => props.$color };

  &:hover {
    transform: scale(1.5);
  }

  ${ Focus };
  &:focus, &:focus-visible, &:focus-within {
    outline-offset: 5px;
    border-radius: 10px;
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: transform 0.4s ease !important;
  }
`

export const TogglersWrapper = styled.li`
  ${ FlexColumnCenter };
  gap: 10px;
  min-width: 150px;
  list-style: none;
`