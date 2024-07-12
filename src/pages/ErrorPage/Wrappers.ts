import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Heading2, Heading3, Text } from '../../data/Theme/globalStyles'


export const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 140px;
  padding-block: 90px;
`

export const H2 = styled.h2`
  display: none;
`

export const Status = styled.div`
  ${Heading2};
  font-size: 288px;
  line-height: 263px;
`

export const ErrorMessageWrapper = styled.div`
  ${Heading3};
  font-size: 36px;
  padding-inline: 20px;
`

export const ErrorMessageBlock = styled.span`
  @media (max-width: ${(props) => props.theme.mobileBreakpoint}) {
    display: block;
  }
`

export const StyledLink = styled(Link)`
  ${Text};
  text-decoration: none;
  
`