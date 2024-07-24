import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FlexRowCenter, Text } from '../../data/Theme/globalStyles'

export const StyledFooter = styled.footer`
  border-top: 1px solid ${ (props) => props.theme.componentsBorderColor };
  background-color: ${ (props) => props.theme.headerBackGroundColor };
  ${ FlexRowCenter };
  flex-wrap: wrap;
  gap: 3px;
  height: ${ (props) => props.theme.footerHeight }px;
  padding: 10px;
  ${ Text };
`

export const StyledSpan = styled.span`
  min-width: fit-content;
`

export const StyledA = styled(Link)`
  ${ Text };
  text-decoration: underline;
`