import styled from 'styled-components'
import { Heading3 } from '../../data/Theme/globalStyles'


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
  background-color: ${props => props.theme.headerBackgroundColor};

  &:hover {
    color: ${props => props.theme.highContrastTextColor};
    transform: scale(2);
    @media (prefers-reduced-motion: no-preference) {
      transition: scale 0.4s ease;
    }
  }
  
  &:focus {
    outline-offset: 5px;
    border-radius: 10px;
    border-color: ${props => props.theme.focusRingColor};
    transition: color 0s;
  }
`

export const TogglersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  min-width: 150px;
`