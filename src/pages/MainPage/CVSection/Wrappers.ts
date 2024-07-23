import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { ComponentsBackground, InteractiveComponentsBorder, Focus, Text, FlexColumnCenter } from '../../../data/Theme/globalStyles'

export const SectionWrapper = styled.div`
  ${ FlexColumnCenter };
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
  border-radius: 15px;
`


export const StyledLink = styled(Link)`
  border-width: 2px;
  border-style: outset;
  padding-inline: 10px;
  ${ Text };
  text-decoration: none;

  ${ ComponentsBackground };    
  ${ InteractiveComponentsBorder };
  border-radius: 15px;
  cursor: pointer;

  ${ Focus };
`