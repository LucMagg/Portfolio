import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FlexColumnCenter, Focus, Heading3 } from '../../data/Theme/globalStyles'


export const NavListItemWrapper = styled.li`
  list-style: none;
  width: fit-content;
`

export const StyledA = styled(Link)`
  height: 100%;
  width: 100%;
  text-decoration: none;
  padding-bottom: 3px;
  ${ Heading3 };
  background-color: ${ (props) => props.theme.headerBackgroundColor };

  &:hover {
    color: ${ (props) => props.theme.highContrastTextColor };
    transform: scale(2);
    @media (prefers-reduced-motion: no-preference) {
      transition: scale 0.4s ease;
    }
  }

  ${ Focus };
  &:focus, &:focus-visible, &:focus-within {
    outline-offset: 5px;
    border-radius: 10px;
  }
`

export const TogglersWrapper = styled.li`
  ${ FlexColumnCenter };
  gap: 10px;
  min-width: 150px;
  list-style: none;
`