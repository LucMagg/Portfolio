import styled, { createGlobalStyle } from 'styled-components'
import { MainBackground } from '../../data/Theme/globalStyles'

export const AppContainer = styled.div`
  ${MainBackground};
 
  @media (prefers-reduced-motion: no-preference) {
    transition:
      background-color 0.4s,
      color 0.4s;
  }
`

export const GlobalStyle = createGlobalStyle`
  *:focus {
    outline: 2px solid ${(props) => props.theme.focusRingColor};
    outline-offset: 2px;
  }
`


export const Main = styled.main`

`