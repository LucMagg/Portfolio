import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { ComponentsBackground, InteractiveComponentsBorder, focusRingBorder, Text } from '../../../data/Theme/globalStyles'

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;
  z-index: 1;
`

export const StyledImg = styled.img`
  width: 90%;
  max-width: 820px;
  aspect-ratio: 21/29.7;
  object-fit: contain;
  border: 1px solid ${ (props) => props.theme.componentsBorderColor };
`


export const StyledLink = styled(Link)`
  border-width: 2px;
  border-style: outset;
  padding-inline: 10px;
  ${Text};
  text-decoration: none;

  ${ComponentsBackground};    
  ${InteractiveComponentsBorder};
  border-radius: 15px;
  cursor: pointer;

  &:focus {
    outline-offset: 2px;
    border-radius: 15px;
    ${focusRingBorder}
    transition: color 0s;
  }

  &:focus-visible {
    outline-offset: 2px;
    border-radius: 15px;
    ${focusRingBorder}
    transition: color 0s;
  }
`