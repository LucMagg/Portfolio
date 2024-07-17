import styled from 'styled-components'
import { Text } from '../../data/Theme/globalStyles'

export const StyledFooter = styled.footer`
  border-top: 1px solid ${ (props) => props.theme.componentsBorderColor };
  background-color: ${ (props) => props.theme.headerBackGroundColor };
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: 3px;
  height: ${ (props) => props.theme.footerHeight }px;
  padding: 10px;
  ${ Text };
`

export const StyledSpan = styled.span`
  min-width: fit-content;
`

export const StyledA = styled.a`
  ${ Text };
  text-decoration: underline;
`