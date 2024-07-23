import styled, { createGlobalStyle } from 'styled-components'
import { MainBackground } from '../../data/Theme/globalStyles'

export const AppContainer = styled.div`
  ${ MainBackground };
 
  @media (prefers-reduced-motion: no-preference) {
    transition:
      background-color 0.4s,
      color 0.4s;
  }
`