import styled from 'styled-components'

export const CanvasWrapper = styled.div`

`

export const StyledCanvas = styled.canvas`

  position: fixed;
  left: 0;
  height: 100%;
  width: 100%;
  top: ${ (props) => props.theme.headerMobileHeight }px;
  border: 1px solid #000;
  z-index: 0;

  @media (min-width: ${ (props) => props.theme.tabletBreakpoint }px) {
    height: calc(100vh - ${ (props) => props.theme.headerNormalHeight }px);
    top: ${ (props) => props.theme.headerNormalHeight }px;
  }
`