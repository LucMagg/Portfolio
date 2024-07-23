import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { FlexColumnCenter, Heading2, Heading3, Text } from '../../data/Theme/globalStyles'


type ErrorWrapperTypes = {
  $pageHeight: number
}

export const ErrorWrapper = styled.div<ErrorWrapperTypes>`
  ${ FlexColumnCenter };
  gap: 100px;
  padding-block: 80px;
  z-index: 1;
  ${ Heading2 };
  height: max(calc(100vh - ${ (props) => props.theme.headerMobileHeight + props.theme.footerHeight }px), ${ (props) => props.$pageHeight }px + 360px);
  min-height: fit-content;

  @media (min-width: ${ (props) => props.theme.mobileBreakpoint }px) {
    height: max(calc(100vh - ${ (props) => props.theme.headerNormalHeight + props.theme.footerHeight }px), ${ (props) => props.$pageHeight }px + 360px);
  }
`

export const H2 = styled.h2`
  display: none;
`

export const Status = styled.div`
  font-size: 96px;
  line-height: 99px;  
  z-index: 1;

  @media (min-width: ${ (props) => props.theme.mobileBreakpoint }px) {
    font-size: 288px;
    line-height: 263px;
  }
`

export const ErrorMessageWrapper = styled.div`
  font-size: 24px;
  padding-inline: 20px;
  z-index: 1;

  @media (min-width: ${ (props) => props.theme.mobileBreakpoint }px) {
    font-size: 32px;
  }

`

export const ErrorMessageBlock = styled.span`
  ${ FlexColumnCenter };

  @media (min-width: ${ (props) => props.theme.mobileBreakpoint }px) {
    display: inline;
  }
`

export const StyledLink = styled(Link)`
  ${ Text };
  text-decoration: none;
  cursor: pointer;  
  z-index: 1;
`