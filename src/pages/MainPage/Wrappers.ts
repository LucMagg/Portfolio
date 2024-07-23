import styled from 'styled-components'
import { Heading2 } from '../../data/Theme/globalStyles'



export const Section = styled.section`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${ (props) => props.theme.componentsBorderColor};
  min-height: calc(100vh - ${ (props) => props.theme.headerMobileHeight }px);
  
  @media (min-width: ${(props) => props.theme.mobileBreakpoint}px) {
    min-height: calc(100vh - ${ (props) => props.theme.headerNormalHeight }px);
  }
`

export const H2 = styled.h2`
  ${ Heading2 };
  padding-left: 2%;
  padding-top: 10px;
  z-index: 1;
`