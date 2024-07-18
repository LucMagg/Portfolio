import styled from 'styled-components'
import { ComponentsBorder } from '../../data/Theme/globalStyles'

type StyledCanvasProps = {
  $footerheight: number
}

export const StyledCanvas = styled.canvas<StyledCanvasProps>`

  position: fixed;
  left: 0;
  height: calc(100vh - ${ (props) => props.theme.headerMobileHeight + props.$footerheight }px);
  width: 100%;
  top: ${ (props) => props.theme.headerMobileHeight }px;
  z-index: 0;

  @media (min-width: ${ (props) => props.theme.mobileBreakpoint }px) {
    height: calc(100vh - ${ (props) => props.theme.headerNormalHeight + props.$footerheight }px);
    top: ${ (props) => props.theme.headerNormalHeight }px;
  }
`