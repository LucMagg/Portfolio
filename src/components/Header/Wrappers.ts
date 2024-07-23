import styled from 'styled-components'
import { FlexRowCenter } from '../../data/Theme/globalStyles'


export const HeaderWrapper = styled.header`
  ${ FlexRowCenter };
  justify-content: space-between;
  width: 100%;
  height: ${ (props) => props.theme.headerMobileHeight }px;
  padding: 10px;
  position: sticky;
  top: 0;
  z-index: 3;
  background-color: ${ (props) => props.theme.headerBackGroundColor };
  border-bottom: 1px solid ${ (props) => props.theme.componentsBorderColor };

  @media (prefers-reduced-motion: no-preference) {
      transition: 0.4s;
  }

  @media (min-width: ${ (props) => props.theme.mobileBreakpoint }px) {
    height: ${ (props) => props.theme.headerNormalHeight }px;
  }  
`

export const H1 = styled.h1`
  display: none;
`

